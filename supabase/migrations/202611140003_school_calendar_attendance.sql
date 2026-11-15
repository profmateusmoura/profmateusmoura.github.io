begin;

create table public.school_days (
    school_date date primary key,
    school_year integer not null check (school_year between 2000 and 2100),
    semester integer not null check (semester in (1, 2)),
    teaching_weekday integer not null check (teaching_weekday between 1 and 5),
    check (extract(year from school_date) = school_year)
);
create index school_days_period_idx on public.school_days(school_year, semester, school_date);

alter table public.school_days enable row level security;
revoke all on public.school_days from public, anon, authenticated;
grant select, insert, update, delete on public.school_days to authenticated;

create policy "staff read school calendar"
on public.school_days for select to authenticated
using ((select public.pje_can_enter()) and exists (
    select 1 from public.user_profiles
    where user_id = (select auth.uid()) and app_role in ('docente', 'coordenacao')
));

create policy "coordination manages school calendar"
on public.school_days for all to authenticated
using ((select public.pje_can_enter()) and (select app_private.is_coordinator()))
with check ((select public.pje_can_enter()) and (select app_private.is_coordinator()));

-- Existing calls keep their original date and do not require a backfill.
alter table public.attendance_sessions
    add column school_date date references public.school_days(school_date) on delete restrict;

-- All new calls go through the function so session and marks commit together.
revoke insert, update, delete on public.attendance_sessions, public.attendance_entries from authenticated;

create function public.save_calendar_attendance(
    p_class uuid, p_date date, p_time time, p_topic text, p_marks jsonb
)
returns uuid
language plpgsql security definer
set search_path = ''
as $$
declare
    actor uuid := auth.uid();
    session_id uuid;
    lesson_at timestamptz;
    roster_size integer;
begin
    if actor is null or not public.pje_can_enter() or not app_private.teaches_class(p_class) then
        raise exception 'Sem autorização para registrar chamada nesta turma.' using errcode = '42501';
    end if;
    if not exists (select 1 from public.classes where id = p_class and active) then
        raise exception 'Selecione uma turma ativa.';
    end if;
    if p_date is null or p_time is null or p_time >= time '24:00'
       or not exists (
           select 1 from public.school_days d
           join public.classes c on c.school_year = d.school_year
           where c.id = p_class and d.school_date = p_date
       ) then
        raise exception 'Selecione um dia letivo e informe o horário.';
    end if;
    if p_marks is null or jsonb_typeof(p_marks) <> 'object'
       or length(coalesce(p_topic, '')) > 200 then
        raise exception 'Confira as marcações e o conteúdo da aula.';
    end if;

    select count(*) into roster_size from public.class_memberships
    where class_id = p_class and membership_role = 'aluno';
    if roster_size = 0 or roster_size <> (select count(*) from jsonb_each(p_marks))
       or exists (
           select 1 from jsonb_each_text(p_marks) as entry(student, mark)
           where entry.mark is null or entry.mark not in ('presente', 'ausente', 'atraso', 'justificada')
              or not app_private.enrolled_in_class(p_class, entry.student::uuid)
       ) then
        raise exception 'A lista deve conter uma marcação para cada aluno matriculado.';
    end if;

    lesson_at := (p_date + date_trunc('minute', p_time - time '00:00'))::timestamp
        at time zone 'America/Sao_Paulo';
    insert into public.attendance_sessions (class_id, held_at, school_date, topic, created_by)
    values (p_class, lesson_at, p_date, nullif(trim(p_topic), ''), actor)
    on conflict (class_id, held_at) do update
    set school_date = excluded.school_date, topic = excluded.topic
    returning id into session_id;

    insert into public.attendance_entries (session_id, student_id, status, marked_by)
    select session_id, entry.student::uuid, entry.mark, actor
    from jsonb_each_text(p_marks) as entry(student, mark)
    on conflict on constraint attendance_entries_pkey do update
    set status = excluded.status, marked_by = excluded.marked_by, marked_at = now();

    return session_id;
end;
$$;

revoke execute on function public.save_calendar_attendance(uuid, date, time, text, jsonb)
from public, anon;
grant execute on function public.save_calendar_attendance(uuid, date, time, text, jsonb)
to authenticated;

commit;
