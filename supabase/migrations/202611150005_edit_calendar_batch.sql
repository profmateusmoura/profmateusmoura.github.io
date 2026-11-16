begin;

create function public.replace_school_days_bulk(
  p_year integer, p_semester integer, p_weekday integer, p_dates date[], p_previous date[]
)
returns void language plpgsql set search_path = ''
as $$
declare
  current_dates date[];
begin
  if not public.pje_can_enter() or not app_private.is_coordinator() then
    raise exception 'Somente a coordenação pode editar o calendário.' using errcode = '42501';
  end if;
  if p_year is null or p_year not between 2000 and 2100
     or p_semester is null or p_semester not in (1, 2)
     or p_weekday is null or p_weekday not between 1 and 5
     or p_dates is null or cardinality(p_dates) > 18
     or cardinality(p_dates) <> (select count(distinct d) from unnest(p_dates) d)
     or exists (select 1 from unnest(p_dates) d where extract(year from d) <> p_year
       or (extract(month from d) <= 6) <> (p_semester = 1)) then
    raise exception 'Selecione até 18 datas distintas dentro do semestre.';
  end if;
  lock table public.school_days in share row exclusive mode;
  select coalesce(array_agg(school_date order by school_date), array[]::date[])
    into current_dates from public.school_days
    where school_year = p_year and semester = p_semester and teaching_weekday = p_weekday;
  if current_dates is distinct from p_previous then
    raise exception 'O calendário mudou. Atualize a página antes de editar.';
  end if;
  if exists (select 1 from public.school_days
    where school_date = any(p_dates) and not (school_date = any(current_dates))) then
    raise exception 'Uma data selecionada já está ocupada. Atualize o calendário.';
  end if;
  delete from public.school_days
    where school_date = any(current_dates) and not (school_date = any(p_dates));
  insert into public.school_days(school_date, school_year, semester, teaching_weekday)
    select d, p_year, p_semester, p_weekday from unnest(p_dates) d
    where not (d = any(current_dates));
exception when foreign_key_violation then
  raise exception 'Uma das datas removidas já tem chamada registrada. Mantenha essa data na seleção.';
end;
$$;
revoke execute on function public.replace_school_days_bulk(integer, integer, integer, date[], date[]) from public, anon;
grant execute on function public.replace_school_days_bulk(integer, integer, integer, date[], date[]) to authenticated;

commit;
