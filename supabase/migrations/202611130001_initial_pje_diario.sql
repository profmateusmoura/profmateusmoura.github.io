-- PJE pilot: teacher-managed roster, attendance, course posts, grades and reading progress.
-- Google login is configured in Supabase Auth. New auth users are always ordinary students.
-- Promote coordinators only through the Supabase SQL editor using a verified auth.users UUID.

begin;

create schema if not exists app_private;
revoke all on schema app_private from public, anon, authenticated;

create table public.user_profiles (
    user_id uuid primary key references auth.users(id) on delete cascade,
    display_name text not null default '',
    app_role text not null default 'aluno' check (app_role in ('aluno', 'docente', 'coordenacao')),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create function app_private.create_student_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    insert into public.user_profiles (user_id, display_name, app_role)
    values (
        new.id,
        coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', ''),
        'aluno'
    )
    on conflict (user_id) do nothing;
    return new;
end;
$$;

create trigger on_auth_user_created_pje
after insert on auth.users
for each row execute function app_private.create_student_profile();

create table public.courses (
    id uuid primary key default gen_random_uuid(),
    code text not null unique,
    title text not null,
    active boolean not null default true,
    created_at timestamptz not null default now()
);

create table public.classes (
    id uuid primary key default gen_random_uuid(),
    course_id uuid not null references public.courses(id) on delete restrict,
    name text not null,
    school_year integer not null,
    active boolean not null default true,
    created_at timestamptz not null default now(),
    unique (course_id, name, school_year)
);

create table public.class_memberships (
    class_id uuid not null references public.classes(id) on delete cascade,
    user_id uuid not null references public.user_profiles(user_id) on delete cascade,
    membership_role text not null check (membership_role in ('docente', 'aluno')),
    joined_at timestamptz not null default now(),
    primary key (class_id, user_id)
);
create index class_memberships_user_role_idx on public.class_memberships(user_id, membership_role);

create function app_private.is_coordinator()
returns boolean
language sql stable security definer
set search_path = ''
as $$
    select exists (
        select 1 from public.user_profiles p
        where p.user_id = (select auth.uid()) and p.app_role = 'coordenacao'
    );
$$;

create function app_private.teaches_class(target_class uuid)
returns boolean
language sql stable security definer
set search_path = ''
as $$
    select app_private.is_coordinator() or exists (
        select 1 from public.class_memberships m
        where m.class_id = target_class
          and m.user_id = (select auth.uid())
          and m.membership_role = 'docente'
    );
$$;

create function app_private.enrolled_in_class(target_class uuid, target_user uuid default auth.uid())
returns boolean
language sql stable security definer
set search_path = ''
as $$
    select exists (
        select 1 from public.class_memberships m
        where m.class_id = target_class and m.user_id = target_user
          and m.membership_role = 'aluno'
    );
$$;

create function app_private.can_view_student(target_user uuid)
returns boolean
language sql stable security definer
set search_path = ''
as $$
    select app_private.is_coordinator() or exists (
        select 1
        from public.class_memberships teacher
        join public.class_memberships student on student.class_id = teacher.class_id
        where teacher.user_id = (select auth.uid())
          and teacher.membership_role = 'docente'
          and student.user_id = target_user
          and student.membership_role = 'aluno'
    );
$$;

grant usage on schema app_private to authenticated;
grant execute on function app_private.is_coordinator() to authenticated;
grant execute on function app_private.teaches_class(uuid) to authenticated;
grant execute on function app_private.enrolled_in_class(uuid, uuid) to authenticated;
grant execute on function app_private.can_view_student(uuid) to authenticated;

create table public.course_posts (
    id uuid primary key default gen_random_uuid(),
    class_id uuid not null references public.classes(id) on delete cascade,
    title text not null,
    body text not null default '',
    resource_url text,
    status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
    author_id uuid not null default auth.uid() references public.user_profiles(user_id),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    published_at timestamptz,
    check (resource_url is null or resource_url ~ '^https://')
);
create index course_posts_class_status_idx on public.course_posts(class_id, status, published_at desc);

create table public.attendance_sessions (
    id uuid primary key default gen_random_uuid(),
    class_id uuid not null references public.classes(id) on delete cascade,
    held_at timestamptz not null,
    topic text,
    notes text,
    created_by uuid not null default auth.uid() references public.user_profiles(user_id),
    created_at timestamptz not null default now(),
    unique (class_id, held_at)
);
create index attendance_sessions_class_date_idx on public.attendance_sessions(class_id, held_at desc);

create table public.attendance_entries (
    session_id uuid not null references public.attendance_sessions(id) on delete cascade,
    student_id uuid not null references public.user_profiles(user_id) on delete cascade,
    status text not null check (status in ('presente', 'ausente', 'justificada', 'atraso')),
    note text,
    marked_by uuid not null default auth.uid() references public.user_profiles(user_id),
    marked_at timestamptz not null default now(),
    primary key (session_id, student_id)
);
create index attendance_entries_student_idx on public.attendance_entries(student_id, session_id);

create table public.assessments (
    id uuid primary key default gen_random_uuid(),
    class_id uuid not null references public.classes(id) on delete cascade,
    title text not null,
    description text not null default '',
    max_score numeric(7,2) not null check (max_score > 0),
    due_at timestamptz,
    status text not null default 'draft' check (status in ('draft', 'published', 'closed')),
    created_by uuid not null default auth.uid() references public.user_profiles(user_id),
    created_at timestamptz not null default now(),
    published_at timestamptz
);
create index assessments_class_status_idx on public.assessments(class_id, status);

create table public.grades (
    assessment_id uuid not null references public.assessments(id) on delete cascade,
    student_id uuid not null references public.user_profiles(user_id) on delete cascade,
    score numeric(7,2) not null check (score >= 0),
    feedback text not null default '',
    graded_by uuid not null default auth.uid() references public.user_profiles(user_id),
    graded_at timestamptz not null default now(),
    primary key (assessment_id, student_id)
);
create index grades_student_idx on public.grades(student_id, assessment_id);

create table public.grade_change_log (
    id bigint generated always as identity primary key,
    assessment_id uuid not null,
    student_id uuid not null,
    old_score numeric(7,2) not null,
    new_score numeric(7,2) not null,
    changed_by uuid not null default auth.uid(),
    changed_at timestamptz not null default now()
);

create function app_private.log_grade_change()
returns trigger
language plpgsql security definer
set search_path = ''
as $$
begin
    if old.score is distinct from new.score then
        insert into public.grade_change_log (assessment_id, student_id, old_score, new_score, changed_by)
        values (old.assessment_id, old.student_id, old.score, new.score, (select auth.uid()));
    end if;
    new.graded_by := (select auth.uid());
    new.graded_at := now();
    return new;
end;
$$;

create trigger log_grade_change_before_update
before update on public.grades
for each row execute function app_private.log_grade_change();

create table public.learning_progress (
    user_id uuid not null default auth.uid() references public.user_profiles(user_id) on delete cascade,
    course_code text not null references public.courses(code) on delete cascade,
    page_slug text not null,
    section_id text not null default '',
    completed boolean not null default false,
    active_seconds integer not null default 0 check (active_seconds between 0 and 86400),
    last_seen_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    primary key (user_id, course_code, page_slug)
);
create index learning_progress_course_idx on public.learning_progress(course_code, user_id);

-- The browser can only register its own progress. Do not trust a client-supplied timer
-- as verified attendance or proof that a page was read.
create function app_private.protect_learning_progress()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
    if new.user_id <> (select auth.uid()) then
        raise exception 'progress can only be written for the signed-in user';
    end if;
    new.updated_at := now();
    new.last_seen_at := now();
    return new;
end;
$$;
create trigger protect_learning_progress_before_write
before insert or update on public.learning_progress
for each row execute function app_private.protect_learning_progress();

alter table public.user_profiles enable row level security;
alter table public.courses enable row level security;
alter table public.classes enable row level security;
alter table public.class_memberships enable row level security;
alter table public.course_posts enable row level security;
alter table public.attendance_sessions enable row level security;
alter table public.attendance_entries enable row level security;
alter table public.assessments enable row level security;
alter table public.grades enable row level security;
alter table public.grade_change_log enable row level security;
alter table public.learning_progress enable row level security;

revoke all on table public.user_profiles, public.courses, public.classes,
    public.class_memberships, public.course_posts, public.attendance_sessions,
    public.attendance_entries, public.assessments, public.grades,
    public.grade_change_log, public.learning_progress from anon, authenticated;
grant select on public.user_profiles, public.courses, public.classes, public.class_memberships,
    public.course_posts, public.attendance_sessions, public.attendance_entries,
    public.assessments, public.grades, public.learning_progress to authenticated;
grant insert, update, delete on public.courses, public.classes, public.class_memberships,
    public.course_posts, public.attendance_sessions, public.attendance_entries,
    public.assessments, public.grades to authenticated;
grant insert, update on public.learning_progress to authenticated;

create policy "profiles visible to self, coordinator, or class teacher"
on public.user_profiles for select to authenticated
using (user_id = (select auth.uid()) or app_private.can_view_student(user_id));

create policy "courses visible to signed-in users"
on public.courses for select to authenticated using (true);
create policy "coordinators manage courses"
on public.courses for all to authenticated
using (app_private.is_coordinator()) with check (app_private.is_coordinator());

create policy "class participants can view their classes"
on public.classes for select to authenticated
using (app_private.teaches_class(id) or app_private.enrolled_in_class(id));
create policy "coordinators manage classes"
on public.classes for all to authenticated
using (app_private.is_coordinator()) with check (app_private.is_coordinator());

create policy "members see own membership or teachers see class roster"
on public.class_memberships for select to authenticated
using (user_id = (select auth.uid()) or app_private.teaches_class(class_id));
create policy "coordinators manage memberships"
on public.class_memberships for all to authenticated
using (app_private.is_coordinator()) with check (app_private.is_coordinator());
create policy "teachers enroll students"
on public.class_memberships for insert to authenticated
with check (membership_role = 'aluno' and app_private.teaches_class(class_id));
create policy "teachers remove students"
on public.class_memberships for delete to authenticated
using (membership_role = 'aluno' and app_private.teaches_class(class_id));

create policy "students read published class posts and teachers read class posts"
on public.course_posts for select to authenticated
using (app_private.teaches_class(class_id) or
    (status = 'published' and app_private.enrolled_in_class(class_id)));
create policy "teachers manage class posts"
on public.course_posts for insert to authenticated
with check (app_private.teaches_class(class_id) and author_id = (select auth.uid()));
create policy "teachers update class posts"
on public.course_posts for update to authenticated
using (app_private.teaches_class(class_id))
with check (app_private.teaches_class(class_id) and author_id = (select auth.uid()));
create policy "teachers delete class posts"
on public.course_posts for delete to authenticated using (app_private.teaches_class(class_id));

create policy "participants read attendance sessions"
on public.attendance_sessions for select to authenticated
using (app_private.teaches_class(class_id) or app_private.enrolled_in_class(class_id));
create policy "teachers create attendance sessions"
on public.attendance_sessions for insert to authenticated
with check (app_private.teaches_class(class_id) and created_by = (select auth.uid()));
create policy "teachers update attendance sessions"
on public.attendance_sessions for update to authenticated
using (app_private.teaches_class(class_id)) with check (app_private.teaches_class(class_id));
create policy "teachers delete attendance sessions"
on public.attendance_sessions for delete to authenticated using (app_private.teaches_class(class_id));

create policy "students read own attendance, teachers read class attendance"
on public.attendance_entries for select to authenticated
using (student_id = (select auth.uid()) or exists (
    select 1 from public.attendance_sessions s
    where s.id = session_id and app_private.teaches_class(s.class_id)
));
create policy "teachers mark class attendance"
on public.attendance_entries for insert to authenticated
with check (marked_by = (select auth.uid()) and exists (
    select 1 from public.attendance_sessions s
    where s.id = session_id and app_private.teaches_class(s.class_id)
      and app_private.enrolled_in_class(s.class_id, student_id)
));
create policy "teachers correct class attendance"
on public.attendance_entries for update to authenticated
using (exists (select 1 from public.attendance_sessions s
    where s.id = session_id and app_private.teaches_class(s.class_id)))
with check (exists (select 1 from public.attendance_sessions s
    where s.id = session_id and app_private.teaches_class(s.class_id)
      and app_private.enrolled_in_class(s.class_id, student_id)));
create policy "teachers delete class attendance"
on public.attendance_entries for delete to authenticated
using (exists (select 1 from public.attendance_sessions s
    where s.id = session_id and app_private.teaches_class(s.class_id)));

create policy "students read published assessments and teachers read class assessments"
on public.assessments for select to authenticated
using (app_private.teaches_class(class_id) or
    (status <> 'draft' and app_private.enrolled_in_class(class_id)));
create policy "teachers create assessments"
on public.assessments for insert to authenticated
with check (app_private.teaches_class(class_id) and created_by = (select auth.uid()));
create policy "teachers update assessments"
on public.assessments for update to authenticated
using (app_private.teaches_class(class_id)) with check (app_private.teaches_class(class_id));
create policy "teachers delete assessments"
on public.assessments for delete to authenticated using (app_private.teaches_class(class_id));

create policy "students read own published grades and teachers read class grades"
on public.grades for select to authenticated
using (student_id = (select auth.uid()) and exists (
    select 1 from public.assessments a where a.id = assessment_id and a.status = 'published'
) or app_private.can_view_student(student_id) and exists (
    select 1 from public.assessments a where a.id = assessment_id
      and app_private.teaches_class(a.class_id)
));
create policy "teachers enter grades for enrolled students"
on public.grades for insert to authenticated
with check (graded_by = (select auth.uid()) and exists (
    select 1 from public.assessments a where a.id = assessment_id
      and app_private.teaches_class(a.class_id)
      and app_private.enrolled_in_class(a.class_id, student_id)
      and score <= a.max_score
));
create policy "teachers correct grades within their classes"
on public.grades for update to authenticated
using (exists (select 1 from public.assessments a
    where a.id = assessment_id and app_private.teaches_class(a.class_id)))
with check (exists (select 1 from public.assessments a
    where a.id = assessment_id and app_private.teaches_class(a.class_id)
      and app_private.enrolled_in_class(a.class_id, student_id)
      and score <= a.max_score));
create policy "teachers delete grades within their classes"
on public.grades for delete to authenticated
using (exists (select 1 from public.assessments a
    where a.id = assessment_id and app_private.teaches_class(a.class_id)));

grant select on public.grade_change_log to authenticated;
create policy "coordinators audit grade corrections"
on public.grade_change_log for select to authenticated using (app_private.is_coordinator());

create policy "students manage own learning progress"
on public.learning_progress for all to authenticated
using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "teachers view progress of their enrolled students"
on public.learning_progress for select to authenticated
using (app_private.can_view_student(user_id));

insert into public.courses (code, title)
values ('PJE', 'Programação de Jogos Eletrônicos')
on conflict (code) do nothing;

commit;

-- Promote a coordinator manually after verifying the account UUID in Authentication > Users.
-- update public.user_profiles set app_role = 'coordenacao' where user_id = '<verified UUID>';
