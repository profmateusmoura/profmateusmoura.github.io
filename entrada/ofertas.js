function setupSemesterOfferings(client, courses) {
  const panel = document.querySelector('#ofertas-semestrais');
  panel.innerHTML = `
    <h3>Grade da oferta semestral</h3>
    <form id="modulo-form">
      <h4>Configurar módulo do curso</h4>
      <label>Curso <select name="course" required></select></label>
      <label>Número <input name="number" type="number" min="1" required></label>
      <label>Nome <input name="title" required></label>
      <label>Disciplinas do curso <select name="subjects" multiple size="6" required></select></label>
      <p id="modulo-carga" role="status"></p>
      <button>Salvar módulo</button>
    </form>
    <form id="oferta-form">
      <label>Turma <select name="class" required></select></label>
      <label>Semestre <select name="semester"><option value="1">1º semestre</option><option value="2">2º semestre</option></select></label>
      <label>Módulo <select name="module" required></select></label>

      <div id="oferta-responsaveis"></div>
      <button>Preparar grade</button>
    </form>
    <form id="oferta-grade" hidden>
      <div id="oferta-horarios"></div>
      <button>Fechar grade</button>
    </form>
    <p role="status"></p>`;
  const form = panel.querySelector('#oferta-form');
  const grid = panel.querySelector('#oferta-grade');
  const status = panel.querySelector('[role=status]');
  const fields = form.elements;
  const moduleForm = panel.querySelector('#modulo-form');
  const responsibleFields = panel.querySelector('#oferta-responsaveis');
  const selectedSubjects = () => subjects.filter(subject => memberships.some(link =>
    link.module_id === fields.module.value && link.subject_id === subject.id));
  const responsibleFor = id => responsibleFields.querySelector('[data-subject="' + id + '"]')?.value;
  function renderResponsibleFields() {
    const previous = new Map([...responsibleFields.querySelectorAll('select')]
      .map(field => [field.dataset.subject, field.value]));
    responsibleFields.replaceChildren();
    for (const row of selectedSubjects()) {
      const label = document.createElement('label');
      label.textContent = 'Responsável por ' + row.title;
      const field = document.createElement('select');
      field.dataset.subject = row.id;
      field.required = true;
      options(field, teachers, teacher => teacher.display_name || 'Docente', 'user_id');
      field.value = previous.get(row.id) || '';
      label.append(field);
      responsibleFields.append(label);
    }
  }
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const times = ['18h30', '19h10', '19h50', '20h40', '21h20'];
  let classes, modules, subjects, teachers, memberships;
  let currentOffering;
  const options = (field, rows, label, key = 'id') => {
    field.replaceChildren(new Option('Selecione', ''), ...rows.map(row => new Option(label(row), row[key])));
  };
  async function data(request) {
    const result = await request;
    if (result.error) throw result.error;
    return result.data;
  }
  function updateCourse() {
    grid.hidden = true;
    const group = classes.find(row => row.id === fields.class.value);
    options(fields.module, modules.filter(row => row.course_id === group?.course_id),
      row => row.module_number + ' · ' + row.title);
    renderResponsibleFields();
  }
  async function initialize() {
    [classes, modules, subjects, teachers, memberships] = await Promise.all([
      data(client.from('classes').select('id,name,school_year,course_id').eq('active', true).order('name')),
      data(client.from('course_modules').select('id,course_id,module_number,title').order('module_number')),
      data(client.from('curriculum_subjects').select('id,course_id,title,weekly_lessons').order('title')),
      data(client.from('user_profiles').select('user_id,display_name').in('app_role', ['docente', 'coordenacao']).order('display_name')),
      data(client.from('module_subjects').select('module_id,subject_id')),
    ]);
    options(fields.class, classes, row => row.name + ' · ' + row.school_year +
      ' · ' + (courses.find(course => course.id === row.course_id)?.code || ''));
    options(moduleForm.elements.course, courses, row => row.code + ' · ' + row.title);
    fields.module.onchange = renderResponsibleFields;
    const moduleFields = moduleForm.elements;
    const updateLoad = () => {
      const selected = [...moduleFields.subjects.selectedOptions];
      const total = selected.reduce((sum, option) => sum + Number(option.dataset.lessons), 0);
      panel.querySelector('#modulo-carga').textContent = total + ' de 25 aulas semanais.';
      moduleForm.querySelector('button').disabled = total !== 25;
    };
    moduleFields.course.onchange = () => {
      moduleFields.subjects.replaceChildren(...subjects.filter(row => row.course_id === moduleFields.course.value)
        .map(row => {
          const option = new Option(row.title + ' · ' + row.weekly_lessons + ' aulas', row.id);
          option.dataset.lessons = row.weekly_lessons;
          return option;
        }));
      updateLoad();
    };
    moduleFields.number.onchange = () => {
      const module = modules.find(row => row.course_id === moduleFields.course.value &&
        row.module_number === Number(moduleFields.number.value));
      moduleFields.title.value = module?.title || '';
      for (const option of moduleFields.subjects.options) {
        option.selected = memberships.some(link => link.module_id === module?.id &&
          link.subject_id === option.value);
      }
      updateLoad();
    };
    moduleFields.subjects.onchange = updateLoad;
    moduleFields.course.onchange();
    fields.class.onchange = updateCourse;
    form.onchange = () => { grid.hidden = true; currentOffering = null; };
    updateCourse();
  }
  function renderSlots(selected, locked, slots = []) {
    const container = panel.querySelector('#oferta-horarios');
    container.replaceChildren();
    for (const [dayIndex, day] of days.entries()) {
      const group = document.createElement('fieldset');
      const legend = document.createElement('legend');
      legend.textContent = day;
      group.append(legend);
      for (const [period, time] of times.entries()) {
        const label = document.createElement('label');
        label.textContent = time;
        const subject = document.createElement('select');
        options(subject, selected, row => row.title);
        subject.required = true;
        const teacher = document.createElement('select');
        options(teacher, teachers, row => row.display_name || 'Docente', 'user_id');
        teacher.required = true;
        subject.setAttribute('aria-label', day + ' ' + time + ', disciplina');
        teacher.setAttribute('aria-label', day + ' ' + time + ', professor');
        const saved = slots.find(row => row.slot === dayIndex * 5 + period + 1);
        subject.value = saved?.subject_id || '';
        teacher.value = saved?.teacher_id || '';
        subject.disabled = teacher.disabled = locked;
        label.append(subject);
        const teacherLabel = document.createElement('label');
        teacherLabel.textContent = 'Professor · ' + time;
        teacherLabel.append(teacher);
        group.append(label, teacherLabel);
      }
      container.append(group);
    }
    grid.querySelector('button').hidden = locked;
    grid.hidden = false;
  }
  form.onsubmit = async event => {
    event.preventDefault();
    const button = form.querySelector('button');
    button.disabled = true;
    grid.hidden = true;
    try {
      const group = classes.find(row => row.id === fields.class.value);
      const module = modules.find(row => row.id === fields.module.value);
      const selected = selectedSubjects();
      const semester = Number(fields.semester.value);
      if (selected.reduce((sum, row) => sum + row.weekly_lessons, 0) !== 25) {
        throw new Error('As disciplinas selecionadas precisam somar 25 aulas semanais.');
      }
      let offering = await data(client.from('semester_offerings').select('id,module_id,closed_at')
        .eq('class_id', group.id).eq('semester', semester).maybeSingle());
      if (offering && offering.module_id !== module.id) throw new Error('A turma já tem outro módulo neste semestre.');
      if (offering?.closed_at) {
        const slots = await data(client.from('offering_slots').select('slot,subject_id,teacher_id').eq('offering_id', offering.id));
        renderSlots(subjects.filter(row => slots.some(slot => slot.subject_id === row.id)), true, slots);
        status.textContent = 'Grade fechada.';
        return;
      }
      if (!offering) offering = await data(client.from('semester_offerings').insert({
        class_id: group.id, course_id: group.course_id, module_id: module.id, semester,
      }).select('id').single());
      await data(client.from('offered_subjects').upsert(selected.map(row => ({
        offering_id: offering.id, module_id: module.id, subject_id: row.id,
        responsible_teacher: responsibleFor(row.id), weekly_lessons: row.weekly_lessons,
      })), { onConflict: 'offering_id,subject_id' }));
      currentOffering = offering.id;
      renderSlots(selected, false);
      status.textContent = 'Preencha os 25 horários. Confira a disciplina e o professor antes de fechar.';
    } catch (error) { status.textContent = error.message; }
    finally { button.disabled = false; }
  };
  grid.onsubmit = async event => {
    event.preventDefault();
    const button = grid.querySelector('button');
    const selections = [...grid.querySelectorAll('select')];
    const slots = times.flatMap((_, day) => times.map((_, period) => {
      const index = (day * 5 + period) * 2;
      return { subject_id: selections[index].value, teacher_id: selections[index + 1].value };
    }));
    button.disabled = true;
    try {
      await data(client.rpc('close_offering_schedule', { p_offering: currentOffering, p_grid: slots }));
      selections.forEach(field => { field.disabled = true; });
      button.hidden = true;
      status.textContent = 'Grade fechada com 25 horários.';
    } catch (error) { status.textContent = error.message; }
    finally { button.disabled = false; }
  };
  moduleForm.onsubmit = async event => {
    event.preventDefault();
    const button = moduleForm.querySelector('button');
    const fields = moduleForm.elements;
    button.disabled = true;
    try {
      const ids = [...fields.subjects.selectedOptions].map(option => option.value);
      const module = await data(client.rpc('create_module_with_subjects', {
        p_course: fields.course.value, p_number: Number(fields.number.value),
        p_title: fields.title.value.trim(), p_subjects: ids,
      }).single());
      modules = modules.filter(row => row.id !== module.id);
      modules.push(module);
      memberships = memberships.filter(row => row.module_id !== module.id);
      memberships.push(...ids.map(id => ({ module_id: module.id, subject_id: id })));
      updateCourse();
      moduleForm.reset();
      fields.course.onchange();
      status.textContent = 'Módulo e disciplinas salvos.';
    } catch (error) { status.textContent = error.message; }
    finally { button.disabled = [...fields.subjects.selectedOptions].reduce((sum, option) =>
      sum + Number(option.dataset.lessons), 0) !== 25; }
  };
  initialize().catch(error => { form.hidden = moduleForm.hidden = true; status.textContent = error.message; });
}
