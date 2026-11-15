begin;

-- A personal attendance record is visible only while the student belongs
-- to the class that owns the session.
alter policy "students read own attendance, teachers read class attendance"
on public.attendance_entries using (
    exists (
        select 1 from public.attendance_sessions s
        where s.id = attendance_entries.session_id
          and (
              app_private.teaches_class(s.class_id)
              or (attendance_entries.student_id = (select auth.uid())
                  and app_private.enrolled_in_class(s.class_id))
          )
    )
);

alter policy "students read own published grades and teachers read class grades"
on public.grades using (
    exists (
        select 1 from public.assessments a
        where a.id = grades.assessment_id
          and (
              app_private.teaches_class(a.class_id)
              or (grades.student_id = (select auth.uid())
                  and a.status = 'published'
                  and app_private.enrolled_in_class(a.class_id))
          )
    )
);

-- Progress currently identifies a course, not a class. Keep it personal
-- until the record can be attributed to a specific enrollment.
alter policy "teachers view progress of their enrolled students"
on public.learning_progress using (app_private.is_coordinator());

commit;
