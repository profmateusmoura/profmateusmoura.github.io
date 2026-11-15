begin;

alter table public.semester_offerings add column closed_at timestamptz;

create table public.offering_slots (
  offering_id uuid not null,
  subject_id uuid not null,
  teacher_id uuid not null references public.user_profiles(user_id),
  school_year integer not null,
  semester integer not null,
  slot integer not null check (slot between 1 and 25),
  primary key (offering_id, slot),
  unique (school_year, semester, teacher_id, slot),
  foreign key (offering_id, subject_id) references public.offered_subjects(offering_id, subject_id)
);
alter table public.offering_slots enable row level security;
revoke all on public.offering_slots from public, anon, authenticated;
grant select on public.offering_slots to authenticated;
create policy "coordination reads offering slots" on public.offering_slots for select to authenticated
using ((select public.pje_can_enter()) and (select app_private.is_coordinator()));

create function public.close_offering_schedule(p_offering uuid, p_grid jsonb)
returns void language plpgsql security definer set search_path = ''
as $$
declare
  offering public.semester_offerings;
  year_number integer;
begin
  if not public.pje_can_enter() or not app_private.is_coordinator() then
    raise exception 'Somente a coordenação pode fechar a grade.' using errcode = '42501';
  end if;
  select * into strict offering from public.semester_offerings where id = p_offering for update;
  if offering.closed_at is not null then
    raise exception 'A grade já está fechada.';
  end if;
  select school_year into strict year_number from public.classes where id = offering.class_id;
  if jsonb_typeof(p_grid) is distinct from 'array' then
    raise exception 'Informe os 25 horários.';
  end if;
  if jsonb_array_length(p_grid) <> 25 then
    raise exception 'Informe os 25 horários.';
  end if;
  if exists (
    select 1 from jsonb_to_recordset(p_grid) x(subject_id uuid, teacher_id uuid)
    where not exists (
      select 1 from public.offered_subjects s
      where s.offering_id = p_offering and s.subject_id = x.subject_id
    ) or not exists (
      select 1 from public.user_profiles t
      where t.user_id = x.teacher_id and t.app_role in ('docente', 'coordenacao')
    )
  ) then
    raise exception 'Cada horário precisa de uma disciplina da oferta e de um professor.';
  end if;
  if exists (
    select 1 from public.offered_subjects s
    where s.offering_id = p_offering and s.weekly_lessons <> (
      select count(*) from jsonb_to_recordset(p_grid) x(subject_id uuid)
      where x.subject_id = s.subject_id
    )
  ) then
    raise exception 'A quantidade de horários precisa corresponder à carga de cada disciplina.';
  end if;
  if exists (
    select 1 from public.module_subjects m
    where m.module_id = offering.module_id and not exists (
      select 1 from public.offered_subjects s
      where s.offering_id = p_offering and s.subject_id = m.subject_id
    )
  ) then
    raise exception 'Configure todas as disciplinas do módulo antes de fechar a grade.';
  end if;

  insert into public.offering_slots(offering_id, subject_id, teacher_id, school_year, semester, slot)
  select p_offering, (item->>'subject_id')::uuid, (item->>'teacher_id')::uuid,
         year_number, offering.semester, position::integer
  from jsonb_array_elements(p_grid) with ordinality as grid(item, position);
  update public.semester_offerings set closed_at = now() where id = p_offering;
exception when unique_violation then
  raise exception 'Um professor já está alocado nesse horário em outra turma do semestre.';
end;
$$;
revoke all on function public.close_offering_schedule(uuid, jsonb) from public, anon;
grant execute on function public.close_offering_schedule(uuid, jsonb) to authenticated;

commit;
