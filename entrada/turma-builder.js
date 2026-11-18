function setupTurmaBuilder(client) {
  const host = document.querySelector('#turma-builder');
  const configuration = document.querySelector('#module-configuration');
  host.innerHTML = `
    <h2>Montar turma</h2>
    <form id="builder-context">
      <label>Curso <select name="course" required></select></label>
      <label>Ano <input name="year" type="number" min="2000" max="2100" required></label>
      <label>Semestre <select name="semester"><option value="1">1º semestre</option><option value="2">2º semestre</option></select></label>
      <label>Módulo <select name="module" required></select></label>
      <button>Avançar para a turma</button>
    </form>
    <form id="builder-class" hidden>
      <p id="builder-path"></p>
      <label>Turma <select name="existing"><option value="">Criar turma</option></select></label>
      <label>Nome da turma <input name="title" maxlength="100" required></label>
      <button>Abrir grade semanal</button>
    </form>
    <div id="builder-week" hidden>
      <h3>Grade semanal da turma</h3>
      <p>Escolha uma disciplina e clique nos horários para incluir ou retirar aulas. O professor pode ser definido depois.</p>
      <div id="builder-subjects" class="setup-cards"></div>
      <label>Professor dos horários que você marcar <select id="builder-teacher"></select></label>
      <button type="button" id="builder-assign">Aplicar professor à disciplina selecionada</button>
      <div id="builder-count" role="status"></div>
      <div class="setup-matrix"><table id="builder-grid"></table></div>
      <div class="access-actions">
        <button type="button" id="builder-save">Salvar rascunho</button>
        <button type="button" id="builder-close">Concluir grade de 25 horários</button>
      </div>
    </div>
    <p id="builder-status" role="status"></p>`;
  configuration.innerHTML = `
    <h3>Disciplinas por módulo</h3>
    <form id="module-discipline">
      <label>Curso <select name="course" required></select></label>
      <label>Módulo <select name="module" required></select></label>
      <label>Disciplina <select name="subject"></select></label>
      <label>Nome <input name="title" maxlength="100" required></label>
      <label>Aulas semanais neste módulo <input name="lessons" type="number" min="1" max="25" required></label>
      <label><input name="prerequisite" type="checkbox"> Pré-requisito para avançar ao próximo módulo</label>
      <button>Salvar disciplina no módulo</button>
    </form>
    <div id="module-discipline-list"></div>
    <p id="module-discipline-status" role="status"></p>`;
  const contextForm = host.querySelector('#builder-context');
  const classForm = host.querySelector('#builder-class');
  const week = host.querySelector('#builder-week');
  const configForm = configuration.querySelector('form');
  const status = host.querySelector('#builder-status');
  const configStatus = configuration.querySelector('[role=status]');
  const teacher = host.querySelector('#builder-teacher');
  const fields = contextForm.elements;
  let courses = [];
  let modules = [];
  let components = [];
  let offering = null;
  let activeSubject = null;
  let slots = new Map();
  let closed = false;
  let current = null;
  let saving = false;
  async function query(request) {
    const response = await request;
    if (response.error) throw response.error;
    return response.data;
  }
  function options(select, rows, title, placeholder = 'Selecione') {
    select.replaceChildren(new Option(placeholder, ''), ...rows.map(row => new Option(title(row), row.id)));
  }
  async function moduleOptions(form) {
    const course = form.elements.course.value;
    options(form.elements.module, modules.filter(row => row.course_id === course), row => row.title);
  }
  async function readComponents(module) {
    return query(client.from('module_subjects')
      .select('subject_id,weekly_lessons,blocks_next_module,curriculum_subjects(title)')
      .eq('module_id', module));
  }
  function totalComponents(rows) {
    return rows.reduce((sum, row) => sum + row.weekly_lessons, 0);
  }
  async function loadConfig() {
    const module = configForm.elements.module.value;
    const rows = module ? await readComponents(module) : [];
    if (configForm.elements.module.value !== module) return;
    options(configForm.elements.subject, rows.map(row => ({
      id: row.subject_id, title: row.curriculum_subjects.title,
    })), row => row.title, 'Nova disciplina');
    const list = configuration.querySelector('#module-discipline-list');
    list.replaceChildren();
    const total = document.createElement('p');
    total.textContent = totalComponents(rows) + ' de 25 aulas semanais configuradas.';
    list.append(total);
    for (const row of rows) {
      const line = document.createElement('p');
      line.textContent = row.curriculum_subjects.title + ' · ' + row.weekly_lessons +
        ' aulas/semana' + (row.blocks_next_module ? ' · pré-requisito' : '');
      list.append(line);
    }
    configForm.elements.subject.onchange = () => {
      const row = rows.find(item => item.subject_id === configForm.elements.subject.value);
      configForm.elements.title.value = row?.curriculum_subjects.title || '';
      configForm.elements.lessons.value = row?.weekly_lessons || '';
      configForm.elements.prerequisite.checked = row?.blocks_next_module || false;
    };
    configForm.elements.subject.onchange();
  }
  configForm.elements.course.onchange = async () => { await moduleOptions(configForm); await loadConfig(); };
  configForm.elements.module.onchange = () => loadConfig().catch(error => { configStatus.textContent = error.message; });
  configForm.onsubmit = async event => {
    event.preventDefault();
    const button = configForm.querySelector('button');
    button.disabled = true;
    try {
      const f = configForm.elements;
      await query(client.rpc('configure_module_subject', {
        p_module: f.module.value, p_subject: f.subject.value || null,
        p_title: f.title.value.trim(), p_lessons: Number(f.lessons.value),
        p_prerequisite: f.prerequisite.checked,
      }));
      await loadConfig();
      configStatus.textContent = 'Disciplina salva no módulo.';
    } catch (error) { configStatus.textContent = error.message; }
    finally { button.disabled = false; }
  };
  function invalidate() {
    current = null;
    classForm.hidden = week.hidden = true;
    offering = null;
  }
  fields.course.onchange = () => { invalidate(); moduleOptions(contextForm); };
  contextForm.addEventListener('change', invalidate);
  contextForm.onsubmit = async event => {
    event.preventDefault();
    const button = contextForm.querySelector('button');
    button.disabled = true;
    invalidate();
    const selection = {
      course: fields.course.value, module: fields.module.value,
      year: Number(fields.year.value), semester: Number(fields.semester.value),
    };
    try {
      const [rows, disciplines] = await Promise.all([
        query(client.from('semester_offerings').select('id,class_id,closed_at,classes(name)')
          .eq('module_id', selection.module).eq('semester', selection.semester)),
        readComponents(selection.module),
      ]);
      if (JSON.stringify(selection) !== JSON.stringify({
        course: fields.course.value, module: fields.module.value,
        year: Number(fields.year.value), semester: Number(fields.semester.value),
      })) return;
      const classes = await query(client.from('classes').select('id').eq('school_year', selection.year)
        .eq('course_id', selection.course).eq('active', true));
      current = selection;
      components = disciplines;
      current.offerings = rows.filter(row => classes.some(group => group.id === row.class_id));
      options(classForm.elements.existing, current.offerings,
        row => row.classes.name, 'Criar turma');
      const course = courses.find(row => row.id === selection.course);
      const module = modules.find(row => row.id === selection.module);
      current.name = module.module_number + '° mód ' + (course.code === 'INF' ? 'TI' : course.code) +
        ' ' + selection.year + '/' + selection.semester;
      classForm.elements.title.value = current.name;
      host.querySelector('#builder-path').textContent = course.title + ' › ' + module.title +
        ' › ' + selection.year + '/' + selection.semester;
      classForm.hidden = false;
      status.textContent = totalComponents(components) === 25 ? '' :
        'Configure 25 aulas semanais nas disciplinas deste módulo antes de montar a turma.';
    } catch (error) { status.textContent = error.message; }
    finally { button.disabled = false; }
  };
  classForm.elements.existing.onchange = () => {
    const row = current.offerings.find(item => item.id === classForm.elements.existing.value);
    classForm.elements.title.value = row?.classes.name || current.name;
    classForm.elements.title.readOnly = Boolean(row);
    week.hidden = true;
  };
  classForm.onsubmit = async event => {
    event.preventDefault();
    const button = classForm.querySelector('button');
    button.disabled = true;
    try {
      if (!current || totalComponents(components) !== 25) throw new Error('O módulo precisa de 25 aulas semanais configuradas.');
      let row = current.offerings.find(item => item.id === classForm.elements.existing.value);
      if (!row) {
        const classId = await query(client.rpc('create_semester_class', {
          p_course_id: current.course, p_module: current.module, p_year: current.year,
          p_semester: current.semester, p_name: classForm.elements.title.value.trim(), p_modality: 'presencial',
        }));
        row = await query(client.from('semester_offerings').select('id,class_id,closed_at,classes(name)')
          .eq('class_id', classId).eq('semester', current.semester).single());
        current.offerings.push(row);
        options(classForm.elements.existing, current.offerings, item => item.classes.name, 'Criar turma');
        classForm.elements.existing.value = row.id;
        classForm.elements.title.readOnly = true;
      }
      offering = row.id;
      closed = Boolean(row.closed_at);
      const saved = await query(client.from('offering_slots').select('slot,subject_id,teacher_id').eq('offering_id', offering));
      slots = new Map(saved.map(slot => [slot.slot, slot]));
      activeSubject = null;
      week.hidden = false;
      renderWeek();
      status.textContent = closed ? 'Grade concluída.' : 'Selecione uma disciplina para marcar seus horários.';
    } catch (error) { status.textContent = error.message; }
    finally { button.disabled = false; }
  };
  function renderWeek() {
    const choices = host.querySelector('#builder-subjects');
    choices.replaceChildren();
    for (const row of components) {
      const count = [...slots.values()].filter(slot => slot.subject_id === row.subject_id).length;
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = row.curriculum_subjects.title + ' · ' + count + '/' + row.weekly_lessons;
      button.setAttribute('aria-pressed', String(activeSubject === row.subject_id));
      button.disabled = saving;
      button.onclick = () => { activeSubject = activeSubject === row.subject_id ? null : row.subject_id; renderWeek(); };
      choices.append(button);
    }
    const table = host.querySelector('#builder-grid');
    table.replaceChildren();
    const head = table.createTHead().insertRow();
    for (const name of ['Aula', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']) {
      const cell = document.createElement('th');
      cell.scope = 'col';
      cell.textContent = name;
      head.append(cell);
    }
    const times = ['18h30', '19h10', '19h50', '20h40', '21h20'];
    const body = table.createTBody();
    times.forEach((time, period) => {
      const row = body.insertRow();
      row.insertCell().textContent = time;
      for (let day = 0; day < 5; day++) {
        const key = day * 5 + period + 1;
        const saved = slots.get(key);
        const subject = components.find(item => item.subject_id === saved?.subject_id);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'weekday-' + (day + 1);
        button.textContent = subject?.curriculum_subjects.title || 'Livre';
        button.setAttribute('aria-pressed', String(Boolean(saved) && saved.subject_id === activeSubject));
        button.disabled = closed || saving || !activeSubject;
        button.onclick = () => {
          if (saved?.subject_id === activeSubject) slots.delete(key);
          else if (saved) {
            status.textContent = 'Retire primeiro o horário da disciplina que o ocupa.';
            return;
          } else {
            const selected = components.find(item => item.subject_id === activeSubject);
            const count = [...slots.values()].filter(slot => slot.subject_id === activeSubject).length;
            if (count >= selected.weekly_lessons) {
              status.textContent = 'Retire uma aula desta disciplina antes de marcar outra.';
              return;
            }
            slots.set(key, { slot: key, subject_id: activeSubject, teacher_id: teacher.value || null });
          }
          status.textContent = '';
          renderWeek();
        };
        row.insertCell().append(button);
      }
    });
    host.querySelector('#builder-count').textContent = slots.size + ' de 25 horários preenchidos.';
    host.querySelector('#builder-save').disabled = closed || saving;
    host.querySelector('#builder-close').disabled = closed || saving || slots.size !== 25;
    teacher.disabled = saving;
    host.querySelector('#builder-assign').disabled = saving || !activeSubject;
  }
  async function saveGrid(close) {
    saving = true;
    contextForm.querySelector('button').disabled = true;
    classForm.querySelector('button').disabled = true;
    renderWeek();
    try {
      await query(client.rpc('save_turma_grid', { p_offering: offering, p_grid: [...slots.values()], p_close: close }));
      closed = close;
      status.textContent = close ? 'Grade concluída com 25 horários.' : 'Rascunho salvo.';
    } catch (error) { status.textContent = error.message; }
    finally {
      saving = false;
      contextForm.querySelector('button').disabled = false;
      classForm.querySelector('button').disabled = false;
      renderWeek();
    }
  }
  host.querySelector('#builder-assign').onclick = async () => {
    const selected = activeSubject;
    const professor = teacher.value || null;
    saving = true;
    contextForm.querySelector('button').disabled = true;
    classForm.querySelector('button').disabled = true;
    renderWeek();
    try {
      // Salva antes os horários em edição para atribuir o professor ao conjunto correto.
      if (!closed) await query(client.rpc('save_turma_grid', {
        p_offering: offering, p_grid: [...slots.values()], p_close: false,
      }));
      await query(client.rpc('assign_offering_teacher', {
        p_offering: offering, p_subject: selected, p_teacher: professor,
      }));
      for (const slot of slots.values()) {
        if (slot.subject_id === selected) slot.teacher_id = professor;
      }
      status.textContent = 'Professor atualizado para a disciplina.';
    } catch (error) { status.textContent = error.message; }
    finally {
      saving = false;
      contextForm.querySelector('button').disabled = false;
      classForm.querySelector('button').disabled = false;
      renderWeek();
    }
  };
  host.querySelector('#builder-save').onclick = () => saveGrid(false);
  host.querySelector('#builder-close').onclick = () => saveGrid(true);
  async function initialize() {
    const teachers = await query(client.from('user_profiles').select('user_id,display_name')
      .in('app_role', ['docente','coordenacao']).order('display_name'));
    options(teacher, teachers.map(row => ({ id: row.user_id, title: row.display_name })), row => row.title, 'Definir depois');
    [courses, modules] = await Promise.all([
      query(client.from('courses').select('id,code,title').eq('active', true).order('title')),
      query(client.from('course_modules').select('id,course_id,module_number,title').order('module_number')),
    ]);
    for (const form of [contextForm, configForm]) options(form.elements.course, courses, row => row.title);
    fields.year.value = new Date().getFullYear();
    fields.semester.value = new Date().getMonth() < 6 ? '1' : '2';
  }
  initialize().catch(error => { status.textContent = error.message; configStatus.textContent = error.message; });
}
