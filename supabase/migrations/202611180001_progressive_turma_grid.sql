begin;
alter table public.module_subjects
  add column weekly_lessons integer,
  add column blocks_next_module boolean not null default false;
update public.module_subjects m set weekly_lessons = s.weekly_lessons
from public.curriculum_subjects s where s.id = m.subject_id;
alter table public.module_subjects alter column weekly_lessons set not null;
alter table public.module_subjects add constraint module_subject_weekly_load check (weekly_lessons between 1 and 25);
alter table public.offered_subjects alter column responsible_teacher drop not null;
alter table public.offering_slots alter column teacher_id drop not null;

create function public.configure_module_subject(
  p_module uuid, p_subject uuid, p_title text, p_lessons integer, p_prerequisite boolean
) returns uuid language plpgsql security definer set search_path = ''
as $$
declare
  course uuid;
  subject uuid := p_subject;
begin
  if not public.pje_can_enter() or not app_private.is_coordinator() then
    raise exception 'Somente a coordenação configura disciplinas.' using errcode = '42501';
  end if;
  select course_id into strict course from public.course_modules where id = p_module for update;
  if exists(select 1 from public.semester_offerings where module_id = p_module and closed_at is not null) then
    raise exception 'O módulo possui grade fechada. A composição deve ser preservada.';
  end if;
  if nullif(trim(p_title),'') is null or p_lessons is null or p_lessons not between 1 and 25
     or p_prerequisite is null then raise exception 'Confira o nome e a carga semanal.'; end if;
  if subject is null then
    insert into public.curriculum_subjects(course_id,title,weekly_lessons)
    values(course,trim(p_title),p_lessons)
    on conflict(course_id,title) do update set title = excluded.title returning id into subject;
  elsif not exists(select 1 from public.curriculum_subjects where id = subject and course_id = course) then
    raise exception 'Disciplina não pertence ao curso.';
  else
    update public.curriculum_subjects set title = trim(p_title) where id = subject;
  end if;
  insert into public.module_subjects(module_id,course_id,subject_id,weekly_lessons,blocks_next_module)
  values(p_module,course,subject,p_lessons,p_prerequisite)
  on conflict(module_id,subject_id) do update
  set weekly_lessons = excluded.weekly_lessons, blocks_next_module = excluded.blocks_next_module;
  return subject;
end;
$$;

create function public.save_turma_grid(p_offering uuid, p_grid jsonb, p_close boolean)
returns void language plpgsql security definer set search_path = ''
as $$
declare
  offer public.semester_offerings;
  year_number integer;
begin
  if not public.pje_can_enter() or not app_private.is_coordinator() then
    raise exception 'Somente a coordenação monta a grade.' using errcode = '42501';
  end if;
  select * into strict offer from public.semester_offerings where id = p_offering for update;
  if offer.closed_at is not null then raise exception 'A grade está fechada.'; end if;
  if p_close is null or jsonb_typeof(p_grid) is distinct from 'array' then raise exception 'Grade inválida.'; end if;
  if jsonb_array_length(p_grid) > 25 or exists(
    select 1 from jsonb_to_recordset(p_grid) x(slot integer,subject_id uuid,teacher_id uuid)
    where slot is null or slot not between 1 and 25 or subject_id is null
      or not exists(select 1 from public.module_subjects where module_id = offer.module_id and subject_id = x.subject_id)
      or (teacher_id is not null and not exists(
        select 1 from public.user_profiles where user_id = x.teacher_id and app_role in ('docente','coordenacao')))
  ) or (select count(distinct slot) from jsonb_to_recordset(p_grid) x(slot integer)) <> jsonb_array_length(p_grid)
  then raise exception 'Confira as disciplinas e os horários.'; end if;
  if exists(select 1 from public.module_subjects m where m.module_id = offer.module_id and (
    (select count(*) from jsonb_to_recordset(p_grid) x(subject_id uuid) where x.subject_id = m.subject_id) > m.weekly_lessons
    or (p_close and (select count(*) from jsonb_to_recordset(p_grid) x(subject_id uuid) where x.subject_id = m.subject_id) <> m.weekly_lessons)
  )) or (p_close and jsonb_array_length(p_grid) <> 25)
  then raise exception 'Confira a carga por disciplina. O fechamento exige os 25 horários.'; end if;

  select school_year into strict year_number from public.classes where id = offer.class_id;
  insert into public.offered_subjects(offering_id,module_id,subject_id,weekly_lessons)
    select offer.id,offer.module_id,subject_id,weekly_lessons from public.module_subjects
    where module_id = offer.module_id
    on conflict(offering_id,subject_id) do update set weekly_lessons = excluded.weekly_lessons;
  delete from public.offering_slots where offering_id = offer.id;
  insert into public.offering_slots(offering_id,subject_id,teacher_id,school_year,semester,slot)
    select offer.id,x.subject_id,x.teacher_id,year_number,offer.semester,x.slot
    from jsonb_to_recordset(p_grid) x(slot integer,subject_id uuid,teacher_id uuid);
  if p_close then update public.semester_offerings set closed_at = now() where id = offer.id; end if;
exception when unique_violation then
  raise exception 'Um professor já tem aula neste horário em outra turma.';
end;
$$;
revoke all on function public.configure_module_subject(uuid,uuid,text,integer,boolean),
  public.save_turma_grid(uuid,jsonb,boolean) from public, anon;
grant execute on function public.configure_module_subject(uuid,uuid,text,integer,boolean),
  public.save_turma_grid(uuid,jsonb,boolean) to authenticated;

-- Preserva inserções feitas pelo formulário anterior de módulos.
create function app_private.default_module_lessons() returns trigger language plpgsql
set search_path = '' as $$
begin
  if new.weekly_lessons is null then
    select weekly_lessons into new.weekly_lessons from public.curriculum_subjects where id = new.subject_id;
  end if;
  return new;
end;
$$;
create trigger module_lessons_default before insert on public.module_subjects
for each row execute function app_private.default_module_lessons();
create function public.assign_offering_teacher(p_offering uuid, p_subject uuid, p_teacher uuid)
returns void language plpgsql security definer set search_path = ''
as $$
begin
  if not public.pje_can_enter() or not app_private.is_coordinator() then
    raise exception 'Somente a coordenação define professores.' using errcode = '42501';
  end if;
  perform 1 from public.semester_offerings where id = p_offering for update;
  if not found then raise exception 'Oferta não encontrada.'; end if;
  if p_teacher is not null and not exists(
    select 1 from public.user_profiles where user_id = p_teacher and app_role in ('docente','coordenacao')
  ) then raise exception 'Selecione um professor cadastrado.'; end if;
  update public.offered_subjects set responsible_teacher = p_teacher
  where offering_id = p_offering and subject_id = p_subject;
  if not found then raise exception 'Disciplina não pertence à oferta.'; end if;
  update public.offering_slots set teacher_id = p_teacher
  where offering_id = p_offering and subject_id = p_subject;
exception when unique_violation then
  raise exception 'O professor tem conflito de horário com outra turma.';
end;
$$;
revoke all on function public.assign_offering_teacher(uuid,uuid,uuid) from public, anon;
grant execute on function public.assign_offering_teacher(uuid,uuid,uuid) to authenticated;
commit;
