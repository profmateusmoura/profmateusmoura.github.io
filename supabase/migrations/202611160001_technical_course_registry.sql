begin;

with catalog(code, title) as (values
  ('ADM', 'Administração'), ('ACL', 'Análises Clínicas'),
  ('CAM', 'Controle Ambiental'), ('EDI', 'Edificações'),
  ('ELT', 'Eletrotécnica'), ('MEC', 'Mecânica'),
  ('MCT', 'Mecatrônica'), ('ENF', 'Enfermagem'),
  ('MET', 'Metalurgia'), ('INF', 'Informática'), ('QUI', 'Química')
)
insert into public.courses(code, title)
select code, title from catalog
where not exists (select 1 from public.courses c where lower(trim(c.title)) = lower(catalog.title))
on conflict (code) do nothing;

insert into public.course_modules(course_id, module_number, title)
select c.id, n, 'Módulo ' || (array['I','II','III','IV'])[n]
from public.courses c cross join generate_series(1,4) n
where lower(trim(c.title)) in (
  'administração', 'análises clínicas', 'controle ambiental', 'edificações',
  'eletrotécnica', 'mecânica', 'mecatrônica', 'enfermagem', 'metalurgia', 'informática', 'química'
)
on conflict (course_id, module_number) do nothing;

create function public.create_semester_class(
  p_course_id uuid, p_name text, p_year integer, p_modality text,
  p_module uuid, p_semester integer
)
returns uuid language plpgsql set search_path = ''
as $$
declare
  class_id uuid;
begin
  if not public.pje_can_enter() or not app_private.is_coordinator() then
    raise exception 'Somente a coordenação pode cadastrar turmas semestrais.' using errcode = '42501';
  end if;
  class_id := public.create_managed_class(p_course_id, p_name, p_year, p_modality);
  insert into public.semester_offerings(class_id, course_id, module_id, semester)
    values (class_id, p_course_id, p_module, p_semester);
  return class_id;
end;
$$;
revoke execute on function public.create_semester_class(uuid,text,integer,text,uuid,integer) from public, anon;
grant execute on function public.create_semester_class(uuid,text,integer,text,uuid,integer) to authenticated;

commit;
