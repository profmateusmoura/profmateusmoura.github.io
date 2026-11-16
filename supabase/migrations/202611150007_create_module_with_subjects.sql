begin;
create function public.create_module_with_subjects(
  p_course uuid, p_number integer, p_title text, p_subjects uuid[]
)
returns public.course_modules
language plpgsql set search_path = ''
as $$
declare
  created_module public.course_modules;
  subject_count integer;
  total integer;
begin
  if not public.pje_can_enter() or not app_private.is_coordinator() then
    raise exception 'Somente a coordenação pode cadastrar módulos.' using errcode = '42501';
  end if;
  perform 1 from public.curriculum_subjects
    where course_id = p_course and id = any(p_subjects) for share;
  select count(*), coalesce(sum(weekly_lessons), 0) into subject_count, total
    from public.curriculum_subjects where course_id = p_course and id = any(p_subjects);
  if coalesce(cardinality(p_subjects), 0) = 0 or subject_count <> cardinality(p_subjects) or total <> 25 then
    raise exception 'Selecione disciplinas do curso que somem exatamente 25 aulas semanais.';
  end if;
  insert into public.course_modules(course_id, module_number, title)
    values (p_course, p_number, trim(p_title))
    on conflict (course_id, module_number) do update set title = excluded.title
    returning * into created_module;
  if exists (
    select 1 from public.semester_offerings where module_id = created_module.id
  ) and (
    exists (select 1 from public.module_subjects
      where module_id = created_module.id and not (subject_id = any(p_subjects)))
    or exists (select 1 from unnest(p_subjects) as ids(subject)
      where not exists (select 1 from public.module_subjects
        where module_id = created_module.id and subject_id = ids.subject))
  ) then
    raise exception 'O módulo já tem ofertas semestrais. A composição da grade está protegida.';
  end if;
  delete from public.module_subjects
    where module_id = created_module.id and not (subject_id = any(p_subjects));
  insert into public.module_subjects(module_id, course_id, subject_id)
    select created_module.id, p_course, subject from unnest(p_subjects) as ids(subject)
    on conflict (module_id, subject_id) do nothing;
  return created_module;
end;
$$;
revoke execute on function public.create_module_with_subjects(uuid, integer, text, uuid[]) from public, anon;
grant execute on function public.create_module_with_subjects(uuid, integer, text, uuid[]) to authenticated;
commit;
