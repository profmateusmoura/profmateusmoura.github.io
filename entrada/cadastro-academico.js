function setupAcademicRegistry(client, refreshClasses) {
  const panel = document.querySelector('#cadastro-academico');
  panel.hidden = false;
  panel.innerHTML = `
    <form id="cadastro-curso">
      <h3>Cursos</h3>
      <input type="hidden" name="entry">
      <label>Quantidade de módulos <input name="planned_modules" type="number" min="1" max="30" value="4" required></label>
      <label>Sigla <input name="code" required maxlength="30"></label>
      <label>Nome <input name="title" required maxlength="150"></label>
      <label>Ementa <textarea name="syllabus"></textarea></label>
      <button>Salvar curso</button>
    </form>
    <form id="edicao-turma">
      <h3>Editar turma</h3>
      <label>Turma <select name="entry" required></select></label>
      <label>Nome <input name="title" required maxlength="100"></label>
      <button>Salvar turma</button>
    </form>
    <form id="vinculo-material">
      <h3>Materiais por disciplina</h3>
      <label>Material <select name="material" required></select></label>
      <label>Disciplina <select name="subject" required></select></label>
      <button>Salvar vínculo</button>
    </form>
    <p role="status"></p>`;
  const courseForm = panel.querySelector('#cadastro-curso');
  const classForm = panel.querySelector('#edicao-turma');
  const status = panel.querySelector('[role=status]');
  let courses = [];
  let activeCourse = '';
  let activeModule = '';
  let classes = [];
  async function result(request) {
    const response = await request;
    if (response.error) throw response.error;
    return response.data;
  }
  async function load() {
    [courses, classes] = await Promise.all([
      result(client.from('courses').select('id,code,title,syllabus,planned_modules').eq('active', true).order('code')),
      result(client.from('classes').select('id,name,school_year').eq('active', true).order('name')),
    ]);
    renderCourses();
    classForm.elements.entry.replaceChildren(new Option('Selecione uma turma', ''),
      ...classes.map(row => new Option(row.name + ' · ' + row.school_year, row.id)));
  }
  courseForm.elements.entry.onchange = () => {
    const fields = courseForm.elements;
    const row = courses.find(course => course.id === fields.entry.value);
    fields.code.value = row?.code || '';
    fields.title.value = row?.title || '';
    fields.syllabus.value = row?.syllabus || '';
    fields.planned_modules.value = row?.planned_modules || 4;
  };
  classForm.elements.entry.onchange = () => {
    const fields = classForm.elements;
    fields.title.value = classes.find(row => row.id === fields.entry.value)?.name || '';
  };
  function bind(form, save, message) {
    form.onsubmit = async event => {
      event.preventDefault();
      const button = form.querySelector('button');
      button.disabled = true;
      try {
        await save(form.elements);
        form.reset();
        await load();
        status.textContent = message;
      } catch (error) {
        status.textContent = error.message || 'Não foi possível salvar.';
      } finally {
        button.disabled = false;
      }
    };
  }
  bind(courseForm, async fields => {
    const values = {
      code: fields.code.value.trim().toUpperCase(),
      title: fields.title.value.trim(),
      syllabus: fields.syllabus.value.trim(),
      planned_modules: Number(fields.planned_modules.value),
    };
    if (!values.code || !values.title) throw new Error('Informe a sigla e o nome do curso.');
    const request = client.from('courses');
    const saved = await result((fields.entry.value ? request.update(values).eq('id', fields.entry.value) :
      request.insert(values)).select('id').single());
    activeCourse = saved.id;
  }, 'Curso salvo. Atualize a página para usar o catálogo atualizado nas outras guias.');
  bind(classForm, async fields => {
    const name = fields.title.value.trim();
    if (!name) throw new Error('Informe o nome da turma.');
    await result(client.from('classes').update({ name }).eq('id', fields.entry.value).select('id').single());
    await refreshClasses();
  }, 'Turma salva.');
  const materialForm = panel.querySelector('#vinculo-material');
  const materialFields = materialForm.elements;
  let links = [];
  async function loadMaterials() {
    const [subjects, saved] = await Promise.all([
      result(client.from('curriculum_subjects').select('id,title,courses(code)').order('title')),
      result(client.from('subject_materials').select('material_path,subject_id')),
    ]);
    links = saved;
    materialFields.subject.replaceChildren(new Option('Selecione uma disciplina', ''),
      ...subjects.map(row => new Option(row.title + ' · ' + (row.courses?.code || ''), row.id)));
    materialFields.material.replaceChildren(new Option('Selecione um material', ''),
      ...(window.CATALOGO_MATERIAIS || []).filter(row => /^materiais\/[a-z0-9_-]+\/index[.]html$/.test(row.caminho))
        .map(row => new Option(row.titulo + ' · ' + row.subtitulo, row.caminho)));
  }
  materialFields.material.onchange = () => {
    materialFields.subject.value = links.find(row => row.material_path === materialFields.material.value)?.subject_id || '';
  };
  bind(materialForm, async fields => {
    await result(client.from('subject_materials').upsert({
      material_path: fields.material.value, subject_id: fields.subject.value,
    }, { onConflict: 'material_path' }));
    await loadMaterials();
  }, 'Material vinculado à disciplina.');
  loadMaterials().catch(error => {
    materialForm.querySelector('button').disabled = true;
    status.textContent = 'Não foi possível carregar os vínculos de materiais: ' + error.message;
  });
  const guide = panel.nextElementSibling;
  if (guide?.classList.contains('setup-guide')) guide.hidden = true;
  const groups = [
    ['Cursos', 'Cadastre o curso e sua ementa.', ['cadastro-curso']],
    ['Módulos', 'Agrupe as disciplinas do curso até completar 25 aulas semanais.', ['modulo-form']],
    ['Turmas', 'Crie a turma do módulo escolhido e cadastre os alunos.', ['nova-turma', 'edicao-turma', 'matriculas']],
    ['Disciplinas', 'Defina a carga semanal e vincule os materiais.', ['materia-form', 'materias-lista', 'materia-estado', 'vinculo-material']],
  ];
  const nav = document.createElement('div');
  nav.className = 'calendar-legend';
  nav.setAttribute('role', 'group');
  nav.setAttribute('aria-label', 'Cadastros acadêmicos');
  panel.prepend(nav);
  const sections = groups.map(([title, description, ids]) => {
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    heading.textContent = title;
    const help = document.createElement('p');
    help.className = 'setup-guide';
    help.textContent = description;
    section.append(heading, help);
    for (const id of ids) {
      const control = document.getElementById(id);
      if (control) section.append(control);
    }
    panel.insertBefore(section, status);
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = title;
    nav.append(button);
    return { section, button };
  });
  function selectGroup(active) {
    sections.forEach(({ section, button }, index) => {
      section.hidden = index !== active;
      button.setAttribute('aria-pressed', String(index === active));
    });
  }
  const courseCards = document.createElement('div');
  const moduleCards = document.createElement('div');
  courseCards.className = moduleCards.className = 'setup-cards';
  courseForm.before(courseCards);
  const moduleForm = document.querySelector('#modulo-form');
  moduleForm.before(moduleCards);
  function makeCard(title, detail, active, action) {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-pressed', String(active));
    const heading = document.createElement('strong');
    heading.textContent = title;
    const subtitle = document.createElement('span');
    subtitle.textContent = detail;
    button.append(heading, subtitle);
    button.onclick = action;
    return button;
  }
  function renderCourses() {
    courseCards.replaceChildren(...courses.map(course =>
      makeCard(course.title, course.planned_modules + ' módulos', course.id === activeCourse, () => {
        activeCourse = course.id;
        activeModule = '';
        renderCourses();
        renderModules().catch(error => { status.textContent = error.message; });
      })), makeCard('Novo curso', 'Cadastrar', !activeCourse, () => {
        activeCourse = activeModule = '';
        renderCourses();
        moduleCards.replaceChildren();
      }));
    courseForm.elements.entry.value = activeCourse;
    courseForm.elements.entry.onchange();
  }
  async function renderModules() {
    const course = courses.find(row => row.id === activeCourse);
    moduleCards.replaceChildren();
    if (!course) return;
    const modules = await result(client.from('course_modules').select('id,module_number,title')
      .eq('course_id', course.id).order('module_number'));
    if (course.id !== activeCourse) return;
    for (let number = 1; number <= course.planned_modules; number++) {
      const module = modules.find(row => row.module_number === number);
      moduleCards.append(makeCard(module?.title || 'Módulo ' + number,
        module ? 'Configurar disciplinas' : 'Cadastrar módulo', module?.id === activeModule, () => {
          activeModule = module?.id || '';
          const fields = moduleForm.elements;
          fields.course.value = course.id;
          fields.course.dispatchEvent(new Event('change'));
          fields.number.value = number;
          fields.number.dispatchEvent(new Event('change'));
          renderModules().catch(error => { status.textContent = error.message; });
        }));
    }
  }
  const matrix = document.createElement('div');
  matrix.className = 'setup-matrix';
  const matrixTitle = document.createElement('h4');
  matrixTitle.textContent = 'Alunos e disciplinas';
  classForm.after(matrixTitle, matrix);
  const fillClassFields = classForm.elements.entry.onchange;
  classForm.elements.entry.onchange = () => {
    fillClassFields();
    loadMatrix().catch(error => { matrix.textContent = error.message; });
  };
  async function loadMatrix() {
    const classId = classForm.elements.entry.value;
    matrix.replaceChildren();
    if (!classId) return;
    const offerings = await result(client.from('semester_offerings').select('id,semester')
      .eq('class_id', classId).order('semester'));
    if (classForm.elements.entry.value !== classId) return;
    if (!offerings.length) {
      matrix.textContent = 'Vincule a turma a uma oferta semestral antes de registrar dispensas.';
      return;
    }
    for (const offering of offerings) {
      const [components, roster, waivers] = await Promise.all([
        result(client.from('offered_subjects').select('subject_id,curriculum_subjects(title)')
          .eq('offering_id', offering.id)),
        result(client.from('class_memberships').select('user_id,user_profiles(display_name)')
          .eq('class_id', classId).eq('membership_role', 'aluno')),
        result(client.from('offering_subject_waivers').select('student_id,subject_id,reason')
          .eq('offering_id', offering.id)),
      ]);
      if (classForm.elements.entry.value !== classId) return;
      if (!components.length || !roster.length) {
        matrix.textContent = 'Prepare a oferta e vincule os alunos para exibir a matriz.';
        continue;
      }
      const table = document.createElement('table');
      const caption = table.createCaption();
      caption.textContent = offering.semester + 'º semestre';
      const header = table.createTHead().insertRow();
      for (const title of ['Aluno', ...components.map(row => row.curriculum_subjects?.title || 'Disciplina')]) {
        const cell = document.createElement('th');
        cell.scope = 'col';
        cell.textContent = title;
        header.append(cell);
      }
      const body = table.createTBody();
      for (const student of roster) {
        const row = body.insertRow();
        const name = student.user_profiles?.display_name || 'Aluno';
        row.insertCell().textContent = name;
        for (const component of components) {
          const criteria = { offering_id: offering.id, subject_id: component.subject_id, student_id: student.user_id };
          const exemption = waivers.find(entry => entry.student_id === criteria.student_id &&
            entry.subject_id === criteria.subject_id);
          const detail = document.createElement('details');
          const summary = document.createElement('summary');
          summary.textContent = exemption ? 'Dispensado' : 'Cursando';
          const reason = document.createElement(exemption ? 'p' : 'input');
          if (exemption) reason.textContent = exemption.reason;
          else {
            reason.maxLength = 500;
            reason.placeholder = 'Curso e disciplina de origem';
            reason.setAttribute('aria-label', 'Motivo da dispensa de ' + name);
          }
          const save = document.createElement('button');
          save.type = 'button';
          save.textContent = exemption ? 'Retirar dispensa' : 'Registrar dispensa';
          save.onclick = async () => {
            save.disabled = true;
            try {
              if (exemption) {
                await result(client.from('offering_subject_waivers').delete().match(criteria));
              } else {
                if (!reason.value.trim()) throw new Error('Informe o motivo da dispensa.');
                await result(client.from('offering_subject_waivers').insert({ ...criteria, reason: reason.value.trim() }));
              }
              status.textContent = 'Matriz atualizada.';
              await loadMatrix();
            } catch (error) { status.textContent = error.message; }
            finally { save.disabled = false; }
          };
          detail.append(summary, reason, save);
          row.insertCell().append(detail);
        }
      }
      matrix.append(table);
    }
  }
  sections.forEach(({ button }, index) => {
    button.onclick = async () => {
      selectGroup(index);
      try {
        if (index === 1) await renderModules();
        if (index === 2 && activeCourse) {
          const course = document.querySelector('#curso');
          if (![...course.options].some(option => option.value === activeCourse)) {
            const saved = courses.find(row => row.id === activeCourse);
            course.add(new Option(saved.title, saved.id));
          }
          course.value = activeCourse;
          document.querySelector('#turma-modulo').dataset.preferred = activeModule;
          course.dispatchEvent(new Event('change'));
        }
      } catch (error) { status.textContent = error.message; }
    };
  });
  selectGroup(0);
  load().catch(error => { status.textContent = error.message; });
}
