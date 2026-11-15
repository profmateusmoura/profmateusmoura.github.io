begin;

alter table public.classes add constraint classes_id_course_key unique (id, course_id);

create table public.curriculum_subjects (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null check (length(trim(title)) between 1 and 100),
  weekly_lessons integer not null check (weekly_lessons between 1 and 25),
  created_at timestamptz not null default now(),
  unique (course_id, title),
  unique (id, course_id)
);

create table public.class_timetable_slots (
  class_id uuid not null,
  course_id uuid not null,
  subject_id uuid not null,
  teacher_id uuid not null references public.user_profiles(user_id) on delete restrict,
  weekday integer not null check (weekday between 1 and 5),
  lesson_period integer not null check (lesson_period between 1 and 5),
  updated_at timestamptz not null default now(),
  foreign key (class_id, course_id) references public.classes(id, course_id) on delete cascade,
  foreign key (subject_id, course_id) references public.curriculum_subjects(id, course_id) on delete cascade,
  primary key (class_id, weekday, lesson_period),
  unique (teacher_id, weekday, lesson_period)
);
create index class_timetable_subject_idx on public.class_timetable_slots(class_id, subject_id);
create index class_timetable_teacher_idx on public.class_timetable_slots(teacher_id, weekday, lesson_period);

alter table public.curriculum_subjects enable row level security;
alter table public.class_timetable_slots enable row level security;
revoke all on public.curriculum_subjects, public.class_timetable_slots from public, anon, authenticated;
grant select on public.curriculum_subjects, public.class_timetable_slots to authenticated;

create policy "authorized users read curriculum"
on public.curriculum_subjects for select to authenticated
using ((select public.pje_can_enter()));
create policy "staff read relevant timetable"
on public.class_timetable_slots for select to authenticated
using ((select public.pje_can_enter()) and
  (app_private.is_coordinator() or app_private.teaches_class(class_id)));

create function public.save_curriculum_subject(p_subject uuid, p_course uuid, p_title text, p_weekly_lessons integer)
returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  saved_id uuid;
begin
  if auth.uid() is null or not public.pje_can_enter() or not app_private.is_coordinator() then
    raise exception 'Somente a coordenação pode configurar a grade curricular.' using errcode = '42501';
  end if;
  if p_course is null or p_title is null or length(trim(p_title)) not between 1 and 100
    or p_weekly_lessons not between 1 and 25
    or not exists (select 1 from public.courses where id = p_course and active) then
    raise exception 'Confira o curso, o nome e a quantidade de aulas semanais.';
  end if;
  if p_subject is not null then
    if not exists (select 1 from public.curriculum_subjects where id = p_subject and course_id = p_course) then
      raise exception 'Matéria não encontrada para este curso.';
    end if;
    update public.curriculum_subjects set title = trim(p_title), weekly_lessons = p_weekly_lessons
      where id = p_subject returning id into saved_id;
  else
    insert into public.curriculum_subjects(course_id, title, weekly_lessons)
      values (p_course, trim(p_title), p_weekly_lessons) returning id into saved_id;
  end if;
  return saved_id;
end;
$$;

create function public.save_subject_weekly_schedule(
  p_class uuid, p_subject uuid, p_teacher uuid, p_slots jsonb
)
returns integer
language plpgsql security definer set search_path = ''
as $$
declare
  actor uuid := auth.uid();
  subject_course uuid;
  required_count integer;
  inserted_count integer;
begin
  if actor is null or not public.pje_can_enter() or not app_private.is_coordinator() then
    raise exception 'Somente a coordenação pode distribuir horários.' using errcode = '42501';
  end if;
  select course_id, weekly_lessons into subject_course, required_count
    from public.curriculum_subjects where id = p_subject;
  if subject_course is null or not exists (
    select 1 from public.classes where id = p_class and course_id = subject_course and active
  ) then
    raise exception 'Selecione uma turma ativa e uma matéria da grade do curso.';
  end if;
  if not exists (select 1 from public.user_profiles where user_id = p_teacher and app_role = 'docente') then
    raise exception 'Selecione um professor cadastrado como docente.';
  end if;
  if p_slots is null or jsonb_typeof(p_slots) <> 'array'
     or jsonb_array_length(p_slots) <> required_count
     or exists (
       select 1 from jsonb_to_recordset(p_slots) as x(weekday integer, lesson_period integer)
       where x.weekday is null or x.lesson_period is null
          or x.weekday not between 1 and 5 or x.lesson_period not between 1 and 5
     )
     or (select count(*) from (
       select x.weekday, x.lesson_period from jsonb_to_recordset(p_slots) as x(weekday integer, lesson_period integer)
       group by x.weekday, x.lesson_period
     ) unique_slots) <> required_count then
    raise exception 'Marque exatamente % horários diferentes na semana.', required_count;
  end if;
  if exists (
    select 1 from jsonb_to_recordset(p_slots) x(weekday integer, lesson_period integer)
    join public.class_timetable_slots occupied
      on occupied.teacher_id = p_teacher and occupied.weekday = x.weekday
      and occupied.lesson_period = x.lesson_period
      and not (occupied.class_id = p_class and occupied.subject_id = p_subject)
  ) then
    raise exception 'O professor já tem aula em um ou mais horários selecionados.';
  end if;

  delete from public.class_timetable_slots where class_id = p_class and subject_id = p_subject;
  insert into public.class_timetable_slots(class_id, course_id, subject_id, teacher_id, weekday, lesson_period)
    select p_class, subject_course, p_subject, p_teacher, x.weekday, x.lesson_period
    from jsonb_to_recordset(p_slots) as x(weekday integer, lesson_period integer);
  get diagnostics inserted_count = row_count;

  insert into public.class_memberships(class_id, user_id, membership_role)
    values (p_class, p_teacher, 'docente') on conflict (class_id, user_id) do nothing;
  return inserted_count;
end;
$$;

revoke execute on function public.save_curriculum_subject(uuid, uuid, text, integer) from public, anon;
revoke execute on function public.save_subject_weekly_schedule(uuid, uuid, uuid, jsonb) from public, anon;
grant execute on function public.save_curriculum_subject(uuid, uuid, text, integer) to authenticated;
grant execute on function public.save_subject_weekly_schedule(uuid, uuid, uuid, jsonb) to authenticated;

commit;
