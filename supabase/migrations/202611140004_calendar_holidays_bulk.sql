begin;

alter table public.school_days
    add column holiday_name text,
    alter column teaching_weekday drop not null,
    add constraint school_days_kind check (
        (teaching_weekday is not null and holiday_name is null)
        or (teaching_weekday is null and holiday_name is not null
            and length(trim(holiday_name)) between 1 and 120)
    );

create function app_private.guard_holiday_attendance()
returns trigger
language plpgsql security definer
set search_path = ''
as $$
begin
    if tg_table_name = 'school_days' then
        if new.holiday_name is not null and exists (
            select 1 from public.attendance_sessions where school_date = old.school_date
        ) then
            raise exception 'Há uma chamada registrada nesta data.' using errcode = '23514';
        end if;
    elsif new.school_date is not null then
        perform 1 from public.school_days
        where school_date = new.school_date and holiday_name is null
        for share;
        if not found then
            raise exception 'A data selecionada é um feriado ou não é letiva.' using errcode = '23514';
        end if;
    end if;
    return new;
end;
$$;
revoke execute on function app_private.guard_holiday_attendance() from public, anon, authenticated;

create trigger prevent_holiday_with_attendance
before update on public.school_days
for each row execute function app_private.guard_holiday_attendance();

create trigger prevent_attendance_on_holiday
before insert or update of school_date on public.attendance_sessions
for each row execute function app_private.guard_holiday_attendance();

create function public.save_school_days_bulk(
    p_year integer, p_semester integer, p_weekday integer, p_dates date[]
)
returns integer
language plpgsql
set search_path = ''
as $$
declare
    selected_count integer;
    saved_count integer;
begin
    if not public.pje_can_enter() or not app_private.is_coordinator() then
        raise exception 'Somente a coordenação pode editar o calendário.' using errcode = '42501';
    end if;
    if coalesce(cardinality(p_dates), 0) not between 1 and 18
       or p_weekday is null or p_weekday not between 1 and 5 then
        raise exception 'Selecione de 1 a 18 datas e um horário pedagógico.';
    end if;

    select count(distinct day) into selected_count from unnest(p_dates) as dates(day);
    if selected_count <> cardinality(p_dates) then
        raise exception 'A seleção tem datas vazias ou repetidas.';
    end if;

    insert into public.school_days (school_date, school_year, semester, teaching_weekday)
    select day, p_year, p_semester, p_weekday from unnest(p_dates) as dates(day)
    order by day
    on conflict (school_date) do nothing;
    get diagnostics saved_count = row_count;
    if saved_count <> selected_count then
        raise exception 'Uma data selecionada já está cadastrada. Atualize o calendário e refaça a seleção.'
            using errcode = '23505';
    end if;
    return saved_count;
end;
$$;
revoke execute on function public.save_school_days_bulk(integer, integer, integer, date[]) from public, anon;
grant execute on function public.save_school_days_bulk(integer, integer, integer, date[]) to authenticated;

commit;
