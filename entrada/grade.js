function setupAcademicPlanning(client, role, courses) {
  const $ = (id) => document.getElementById(id);
  const coordinator = role === 'coordenacao';
  const tabs = ['cadastro', 'gestao', 'calendario', 'curriculo', 'distribuicao', 'chamada'];
  if (coordinator) {
    const curriculum = document.querySelector('#menu-gestao a[href="#curriculo"]');
    curriculum.hidden = true;
  }
  const tabLinks = [...document.querySelectorAll('#menu-gestao a')];
  function showTab(id, updateHash = true) {
    if (id === 'curriculo' && coordinator) id = 'cadastro';
    if (!tabs.includes(id) || (!coordinator && ['curriculo', 'distribuicao'].includes(id))) id = 'gestao';
    for (const tab of tabs) { const section = $(tab); if (section) section.hidden = tab !== id; }
    tabLinks.forEach(link => { const active = link.hash === '#' + id; link.classList.toggle('is-active', active); if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current'); });
    if (updateHash && location.hash !== '#' + id) history.replaceState(null, '', '#' + id);
  }
  tabLinks.forEach(link => link.addEventListener('click', event => { event.preventDefault(); showTab(link.hash.slice(1)); }));
  const requested = location.hash.slice(1);
  showTab(tabs.includes(requested) ? requested : coordinator ? 'calendario' : 'gestao', false);
  if (!coordinator) {
    tabLinks.filter(link => ['#curriculo', '#distribuicao'].includes(link.hash)).forEach(link => link.hidden = true);
    return;
  }
  $('materia-form').hidden = false; $('grade-form').hidden = false;
  $('materia-curso').replaceChildren(...courses.map(c => new Option(c.code + ' · ' + c.title, c.id)));
  let subjects = [], classes = [], teachers = [], schedules = [];
  const weekNames = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const status = $('materia-estado'), scheduleStatus = $('grade-estado');
  function expect(result) { if (result.error) throw result.error; return result.data; }
  async function loadSubjects() {
    subjects = expect(await client.from('curriculum_subjects').select('id, course_id, title, weekly_lessons').order('title')) || [];
    const list = $('materias-lista'); list.replaceChildren();
    for (const subject of subjects) {
      const course = courses.find(item => item.id === subject.course_id);
      const row = document.createElement('article'); row.className = 'subject-card';
      const info = document.createElement('div'), heading = document.createElement('h3'), detail = document.createElement('p');
      heading.textContent = subject.title; detail.textContent = (course?.code || 'Curso') + ' · ' + subject.weekly_lessons + (subject.weekly_lessons === 1 ? ' aula semanal' : ' aulas semanais'); info.append(heading, detail);
      const edit = document.createElement('button'); edit.type = 'button'; edit.textContent = 'Editar configuração';
      edit.onclick = () => { $('materia-curso').value = subject.course_id; $('materia-curso').disabled = true; $('materia-nome').value = subject.title; $('materia-aulas').value = subject.weekly_lessons; $('materia-form').dataset.subject = subject.id; $('materia-form').querySelector('button').textContent = 'Salvar alterações'; $('materia-form').scrollIntoView({ behavior: 'smooth', block: 'center' }); };
      row.append(info, edit); list.append(row);
    }
    populateSubjects();
  }
  function populateSubjects() {
    const selectedClass = classes.find(item => item.id === $('grade-turma').value), previous = $('grade-materia').value;
    const forCourse = subjects.filter(item => item.course_id === selectedClass?.course_id);
    $('grade-materia').replaceChildren(new Option('Selecione uma matéria', ''), ...forCourse.map(s => new Option(s.title + ' · ' + s.weekly_lessons + ' aulas/semana', s.id)));
    if (forCourse.some(s => s.id === previous)) $('grade-materia').value = previous;
    renderScheduleGrid();
  }
  $('materia-form').onsubmit = async event => {
    event.preventDefault(); const button = $('materia-form').querySelector('button'); button.disabled = true;
    try {
      expect(await client.rpc('save_curriculum_subject', { p_subject: $('materia-form').dataset.subject || null, p_course: $('materia-curso').value, p_title: $('materia-nome').value.trim(), p_weekly_lessons: Number($('materia-aulas').value) }));
      const wasEditing = Boolean($('materia-form').dataset.subject);
      $('materia-form').reset(); $('materia-form').dataset.subject = ''; $('materia-curso').disabled = false; $('materia-aulas').value = '1'; button.textContent = 'Adicionar matéria';
      await loadSubjects(); status.textContent = wasEditing ? 'Matéria atualizada. Revise a distribuição semanal de cada turma que a utiliza.' : 'Matéria salva. Agora distribua as aulas semanais na guia Distribuição semanal.';
    } catch (error) { status.textContent = error.message || 'Não foi possível salvar a matéria.'; } finally { button.disabled = false; }
  };
  async function loadPlanningOptions() {
    try {
      classes = expect(await client.from('classes').select('id, name, school_year, course_id, courses(code)').eq('active', true).order('name')) || [];
      teachers = expect(await client.from('user_profiles').select('user_id, display_name').eq('app_role', 'docente').order('display_name')) || [];
      $('grade-turma').replaceChildren(new Option('Selecione uma turma', ''), ...classes.map(c => new Option(c.name + ' · ' + c.school_year + ' · ' + (c.courses?.code || ''), c.id)));
      $('grade-professor').replaceChildren(new Option('Selecione um professor', ''), ...teachers.map(t => new Option(t.display_name || 'Professor', t.user_id)));
      await loadSubjects(); scheduleStatus.textContent = classes.length ? 'Escolha a turma, matéria e professor para montar a distribuição semanal.' : 'Cadastre uma turma antes de distribuir os horários.';
    } catch { scheduleStatus.textContent = 'Não foi possível carregar a grade. Instale primeiro a migração de grade curricular no Supabase.'; $('grade-form').hidden = true; }
  }
  function selectedSlots() { return [...$('grade-semana').querySelectorAll('input:checked')].map(input => ({ weekday: Number(input.dataset.day), lesson_period: Number(input.dataset.period) })); }
  function renderScheduleGrid() {
    if (!$('grade-semana')) return;
    const subject = subjects.find(s => s.id === $('grade-materia').value), classId = $('grade-turma').value, teacherId = $('grade-professor').value;
    const current = schedules.filter(s => s.class_id === classId && s.subject_id === subject?.id), assigned = new Set(current.map(s => `${s.weekday}:${s.lesson_period}`));
    const occupied = new Map(schedules.filter(s => s.teacher_id === teacherId && !(s.class_id === classId && s.subject_id === subject?.id)).map(s => [`${s.weekday}:${s.lesson_period}`, s]));
    $('grade-semana').replaceChildren(); const grid = document.createElement('div'); grid.className = 'weekly-grid';
    const empty = document.createElement('span'); empty.className = 'week-corner'; grid.append(empty);
    for (let period = 1; period <= 5; period++) { const head = document.createElement('strong'); head.textContent = period + 'ª aula'; grid.append(head); }
    weekNames.forEach((day, dayIndex) => {
      const label = document.createElement('strong'); label.textContent = day; grid.append(label);
      for (let period = 1; period <= 5; period++) {
        const key = `${dayIndex + 1}:${period}`, conflict = occupied.get(key), cell = document.createElement('label'); cell.className = 'week-cell';
        const input = document.createElement('input'); input.type = 'checkbox'; input.dataset.day = String(dayIndex + 1); input.dataset.period = String(period); input.checked = assigned.has(key) && !conflict; input.disabled = Boolean(conflict) || !subject || !teacherId;
        if (conflict) { cell.classList.add('week-busy'); cell.title = 'Professor já alocado em outra aula deste horário.'; } else if (input.checked) cell.classList.add('week-selected');
        const text = document.createElement('span'); text.textContent = conflict ? 'Ocupado' : input.checked ? 'Selecionado' : 'Livre';
        input.onchange = () => { cell.classList.toggle('week-selected', input.checked); text.textContent = input.checked ? 'Selecionado' : 'Livre'; updateSummary(); };
        cell.append(input, text); grid.append(cell);
      }
    }); $('grade-semana').append(grid); updateSummary();
  }
  function updateSummary() {
    const subject = subjects.find(s => s.id === $('grade-materia').value), count = selectedSlots().length;
    $('grade-resumo').textContent = subject ? `${count} de ${subject.weekly_lessons} aulas semanais selecionadas. Horários ocupados do professor ficam bloqueados.` : 'Selecione uma turma e uma matéria para ver a quantidade de aulas a distribuir.';
    $('grade-salvar').disabled = !subject || count !== subject.weekly_lessons || !$('grade-professor').value;
  }
  async function loadTeacherSchedules() {
    if (!$('grade-turma').value || !$('grade-materia').value || !$('grade-professor').value) { schedules = []; renderScheduleGrid(); return; }
    try {
      schedules = expect(await client.from('class_timetable_slots').select('class_id, subject_id, teacher_id, weekday, lesson_period')) || [];
      const current = schedules.find(s => s.class_id === $('grade-turma').value && s.subject_id === $('grade-materia').value);
      if (current) $('grade-professor').value = current.teacher_id;
      renderScheduleGrid();
      const count = schedules.filter(s => s.class_id === $('grade-turma').value && s.subject_id === $('grade-materia').value).length;
      if (count) scheduleStatus.textContent = `Distribuição atual carregada: ${count} aula(s) por semana. Você pode ajustar e salvar em lote.`;
    } catch { scheduleStatus.textContent = 'Não foi possível consultar os horários ocupados.'; }
  }
  $('grade-turma').onchange = () => { populateSubjects(); loadTeacherSchedules(); };
  $('grade-materia').onchange = loadTeacherSchedules; $('grade-professor').onchange = renderScheduleGrid;
  $('grade-form').onsubmit = async event => {
    event.preventDefault(); const subject = subjects.find(s => s.id === $('grade-materia').value), button = $('grade-salvar'); button.disabled = true;
    try {
      expect(await client.rpc('save_subject_weekly_schedule', { p_class: $('grade-turma').value, p_subject: subject.id, p_teacher: $('grade-professor').value, p_slots: selectedSlots() }));
      await loadTeacherSchedules(); scheduleStatus.textContent = `Distribuição salva: ${subject.title}, ${subject.weekly_lessons} aula(s) por semana.`;
    } catch (error) { scheduleStatus.textContent = error.message || 'Não foi possível salvar a distribuição. Confira se nenhum horário do professor foi ocupado.'; } finally { updateSummary(); }
  };
  loadPlanningOptions();
  setupSemesterOfferings(client, courses);
  setupTurmaBuilder(client);
}
