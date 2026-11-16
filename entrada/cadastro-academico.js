function setupAcademicRegistry(client, refreshClasses) {
  const panel = document.querySelector('#cadastro-academico');
  panel.hidden = false;
  panel.innerHTML = `
    <form id="cadastro-curso">
      <h3>Cursos</h3>
      <label>Curso a editar <select name="entry"></select></label>
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
  let classes = [];
  async function result(request) {
    const response = await request;
    if (response.error) throw response.error;
    return response.data;
  }
  async function load() {
    [courses, classes] = await Promise.all([
      result(client.from('courses').select('id,code,title,syllabus').eq('active', true).order('code')),
      result(client.from('classes').select('id,name,school_year').eq('active', true).order('name')),
    ]);
    courseForm.elements.entry.replaceChildren(new Option('Novo curso', ''),
      ...courses.map(row => new Option(row.code + ' · ' + row.title, row.id)));
    classForm.elements.entry.replaceChildren(new Option('Selecione uma turma', ''),
      ...classes.map(row => new Option(row.name + ' · ' + row.school_year, row.id)));
  }
  courseForm.elements.entry.onchange = () => {
    const fields = courseForm.elements;
    const row = courses.find(course => course.id === fields.entry.value);
    fields.code.value = row?.code || '';
    fields.title.value = row?.title || '';
    fields.syllabus.value = row?.syllabus || '';
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
    };
    if (!values.code || !values.title) throw new Error('Informe a sigla e o nome do curso.');
    const request = client.from('courses');
    await result((fields.entry.value ? request.update(values).eq('id', fields.entry.value) :
      request.insert(values)).select('id').single());
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
  load().catch(error => { status.textContent = error.message; });
}
