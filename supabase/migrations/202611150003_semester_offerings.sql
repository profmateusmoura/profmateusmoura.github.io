begin;

alter table public.courses add column syllabus text not null default '';

create table public.course_modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id),
  module_number integer not null check (module_number > 0),
  title text not null check (length(trim(title)) > 0),
  unique (course_id, module_number),
  unique (id, course_id)
);

create table public.module_subjects (
  module_id uuid not null,
  course_id uuid not null,
  subject_id uuid not null,
  primary key (module_id, subject_id),
  foreign key (module_id, course_id) references public.course_modules(id, course_id),
  foreign key (subject_id, course_id) references public.curriculum_subjects(id, course_id)
);

create table public.semester_offerings (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null,
  course_id uuid not null,
  module_id uuid not null,
  semester integer not null check (semester in (1, 2)),
  unique (class_id, semester),
  unique (id, module_id),
  foreign key (class_id, course_id) references public.classes(id, course_id),
  foreign key (module_id, course_id) references public.course_modules(id, course_id)
);

create table public.offered_subjects (
  offering_id uuid not null,
  module_id uuid not null,
  subject_id uuid not null,
  responsible_teacher uuid not null references public.user_profiles(user_id),
  weekly_lessons integer not null check (weekly_lessons between 1 and 25),
  primary key (offering_id, subject_id),
  foreign key (offering_id, module_id) references public.semester_offerings(id, module_id),
  foreign key (module_id, subject_id) references public.module_subjects(module_id, subject_id)
);

create table public.school_period_rules (
  school_year integer not null check (school_year between 2000 and 2100),
  semester integer not null check (semester in (1, 2)),
  attendance_scope text not null check (attendance_scope in ('modulo', 'componente')),
  min_attendance_percent numeric(5,2) not null default 75
    check (min_attendance_percent between 0 and 100),
  primary key (school_year, semester)
);

do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'course_modules', 'module_subjects', 'semester_offerings',
    'offered_subjects', 'school_period_rules'
  ] loop
    execute format('alter table public.%I enable row level security', table_name);
    execute format('revoke all on public.%I from public, anon, authenticated', table_name);
    execute format('grant select, insert, update, delete on public.%I to authenticated', table_name);
    execute format(
      'create policy "coordination manages academic structure" on public.%I
       for all to authenticated
       using ((select public.pje_can_enter()) and (select app_private.is_coordinator()))
       with check ((select public.pje_can_enter()) and (select app_private.is_coordinator()))',
      table_name
    );
  end loop;
end;
$$;

commit;
