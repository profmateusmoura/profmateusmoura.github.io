function setupSchoolDiary(client, role) {
  const find = (id) => document.getElementById(id);
  const weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const statuses = {
    presente: 'Presente', ausente: 'Ausente', atraso: 'Atraso', justificada: 'Falta justificada',
  };
  const zone = 'America/Sao_Paulo';
  const timeFormat = new Intl.DateTimeFormat('pt-BR', {
    timeZone: zone, hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  });
  const dateFormat = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC', dateStyle: 'full' });
  const year = find('cal-ano');
  const semester = find('cal-semestre');
  const day = find('cal-data');
  const equivalent = find('cal-dia');
  const kind = find('cal-tipo');
  const holiday = find('cal-feriado');
  const batchWeekday = find('cal-lote-dia');
  const batch = new Set();
  const coordinator = role === 'coordenacao';
  let calendarReady = false;
  let savingCalendar = false;
  const group = find('chamada-turma');
  const lessonDay = find('chamada-dia');
  const lessonTime = find('chamada-hora');
  const lessonForm = find('chamada-form');
  const calendarStatus = find('cal-estado');
  const attendanceStatus = find('chamada-estado');
  let days = [];
  let loaded = null;
  let calendarRequest = 0;
  let rosterRequest = 0;

  function expect(result) {
    if (result.error) throw result.error;
    return result.data;
  }

  function item(text) {
    const node = document.createElement('li');
    node.textContent = text;
    return node;
  }

  function dayLabel(row) {
    const label = dateFormat.format(new Date(row.school_date + 'T00:00:00Z'));
    return label + (row.holiday_name ? ' · feriado: ' + row.holiday_name
      : ' · horário de ' + weekdays[row.teaching_weekday - 1].toLowerCase());
  }

  function setDayFields() {
    const isHoliday = kind.value === 'feriado';
    equivalent.closest('label').hidden = isHoliday;
    equivalent.required = !isHoliday;
    holiday.closest('label').hidden = !isHoliday;
    holiday.required = isHoliday;
  }

  function selectDate(value) {
    const row = days.find(entry => entry.school_date === value);
    const weekday = new Date(value + 'T00:00:00Z').getUTCDay();
    day.value = value;
    kind.value = row?.holiday_name ? 'feriado' : 'letivo';
    holiday.value = row?.holiday_name || '';
    equivalent.value = row?.teaching_weekday || (weekday >= 1 && weekday <= 5 ? weekday : '');
    setDayFields();
  }

  function remaining() {
    return Math.max(0, 18 - days.filter(row => row.teaching_weekday === Number(batchWeekday.value)).length);
  }

  function gridDates() {
    const startMonth = semester.value === '1' ? 0 : 6;
    return Array.from({ length: 6 }, (_, offset) => {
      const month = startMonth + offset;
      const start = new Date(Date.UTC(Number(year.value), month, 1));
      const size = new Date(Date.UTC(Number(year.value), month + 1, 0)).getUTCDate();
      return { start, dates: Array.from({ length: size }, (_, i) =>
        new Date(Date.UTC(Number(year.value), month, i + 1))) };
    });
  }

  function updateBatch() {
    find('cal-selecao').textContent = batch.size + ' selecionado(s) · faltam ' + remaining() + ' para a meta.';
    find('cal-salvar-lote').disabled = savingCalendar || !calendarReady || batch.size === 0 || batch.size > remaining();
  }

  function renderSemester() {
    const container = find('cal-meses');
    container.replaceChildren();
    if (!calendarReady) return;
    const known = new Map(days.map(row => [row.school_date, row]));
    for (const { start, dates } of gridDates()) {
      const month = document.createElement('section');
      const title = document.createElement('h4');
      title.textContent = new Intl.DateTimeFormat('pt-BR', { month: 'long', timeZone: 'UTC' }).format(start);
      const grid = document.createElement('div');
      grid.className = 'calendar-grid';
      for (const name of ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']) {
        const header = document.createElement('span');
        header.textContent = name;
        grid.append(header);
      }
      for (let i = 0; i < (start.getUTCDay() + 6) % 7; i++) grid.append(document.createElement('span'));
      for (const date of dates) {
        const value = date.toISOString().slice(0, 10);
        const row = known.get(value);
        const tile = document.createElement(coordinator ? 'button' : 'span');
        tile.textContent = date.getUTCDate();
        tile.title = row ? dayLabel(row) : dateFormat.format(date);
        tile.setAttribute('aria-label', tile.title);
        if (row) tile.className = row.holiday_name ? 'calendar-holiday' : 'calendar-teaching';
        if (coordinator) {
          tile.type = 'button';
          if (!row) tile.setAttribute('aria-pressed', String(batch.has(value)));
          tile.onclick = () => {
            if (savingCalendar) return;
            selectDate(value);
            if (row) {
              day.focus();
              return;
            }
            if (batch.has(value)) batch.delete(value);
            else if (batch.size < remaining()) batch.add(value);
            tile.setAttribute('aria-pressed', String(batch.has(value)));
            updateBatch();
          };
        }
        grid.append(tile);
      }
      month.append(title, grid);
      container.append(month);
    }
    updateBatch();
  }

  function clearCall() {
    rosterRequest++;
    loaded = null;
    lessonForm.hidden = true;
    attendanceStatus.textContent = '';
  }

  function refreshDayOptions() {
    clearCall();
    const previous = lessonDay.value;
    const eligible = days.filter(row => !row.holiday_name &&
      String(row.school_year) === group.selectedOptions[0]?.dataset.year);
    lessonDay.replaceChildren(new Option('Selecione um dia letivo', ''),
      ...eligible.map(row => new Option(dayLabel(row), row.school_date)));
    if (eligible.some(row => row.school_date === previous)) lessonDay.value = previous;
    if (group.value && !eligible.length) {
      attendanceStatus.textContent = 'Não há dias letivos para essa turma no ano e semestre selecionados.';
    }
  }

  async function refreshCalendar() {
    const version = ++calendarRequest;
    calendarReady = false;
    batch.clear();
    renderSemester();
    days = [];
    refreshDayOptions();
    find('cal-totais').replaceChildren();
    find('cal-lista').replaceChildren();
    calendarStatus.textContent = 'Carregando calendário…';
    try {
      if (!year.checkValidity()) throw new Error('Ano inválido');
      const rows = expect(await client.from('school_days')
        .select('school_date, school_year, teaching_weekday, holiday_name')
        .eq('school_year', Number(year.value)).eq('semester', Number(semester.value))
        .order('school_date'));
      if (version !== calendarRequest) return;
      days = rows;
      calendarReady = true;
      renderSemester();
      const totals = weekdays.map((_, i) => rows.filter(row => row.teaching_weekday === i + 1).length);
      find('cal-totais').replaceChildren(...weekdays.map((name, i) => {
        const total = totals[i];
        const difference = total < 18 ? ' · faltam ' + (18 - total)
          : total > 18 ? ' · excede por ' + (total - 18) : ' · meta atingida';
        return item(name + ' · ' + total + '/18' + difference);
      }));
      calendarStatus.textContent = totals.every(total => total === 18)
        ? 'Calendário completo: 90 dias letivos.' : 'A meta é de 18 dias para cada horário pedagógico.';
      find('cal-lista').replaceChildren(...rows.map(row => {
        if (role !== 'coordenacao') return item(dayLabel(row));
        const li = item('');
        const edit = document.createElement('button');
        edit.type = 'button';
        edit.textContent = dayLabel(row);
        edit.onclick = () => {
          selectDate(row.school_date);
          day.focus();
        };
        li.append(edit);
        return li;
      }));
      refreshDayOptions();
    } catch (error) {
      if (version !== calendarRequest) return;
      calendarStatus.textContent = ['42P01', '42703', 'PGRST204', 'PGRST205'].includes(error.code)
        ? 'Calendário indisponível até a instalação da migração no Supabase.'
        : 'Não foi possível carregar o calendário.';
    }
  }

  find('calendario').hidden = false;
  find('chamada').hidden = false;
  year.value = new Intl.DateTimeFormat('pt-BR', { timeZone: zone, year: 'numeric' }).format();
  const month = new Intl.DateTimeFormat('pt-BR', { timeZone: zone, month: 'numeric' }).format();
  semester.value = Number(month) <= 6 ? '1' : '2';
  equivalent.replaceChildren(new Option('Selecione um horário', ''),
    ...weekdays.map((name, index) => new Option(name, index + 1)));
  batchWeekday.replaceChildren(...weekdays.map((name, index) => new Option(name, index + 1)));
  year.onchange = semester.onchange = () => {
    day.value = '';
    equivalent.value = '';
    find('cal-lote-inicio').value = '';
    refreshCalendar();
  };
  day.onchange = () => selectDate(day.value);
  kind.onchange = setDayFields;
  setDayFields();

  if (coordinator) {
    const calendarForm = find('cal-form');
    const remove = find('cal-remover');
    const save = calendarForm.querySelector('button[type="submit"], button:not([type])');
    calendarForm.hidden = false;
    find('cal-lote').hidden = false;
    async function writeCalendar(action, message) {
      save.disabled = remove.disabled = true;
      savingCalendar = true;
      updateBatch();
      try {
        await action();
        await refreshCalendar();
        calendarStatus.textContent += ' ' + message;
      } catch (error) {
        calendarStatus.textContent = error.code === '23503'
          ? 'O dia tem chamada registrada e não pode ser removido.'
          : error.message || 'Não foi possível salvar a alteração no calendário.';
      } finally {
        save.disabled = remove.disabled = false;
        savingCalendar = false;
        updateBatch();
      }
    }
    calendarForm.onsubmit = (event) => {
      event.preventDefault();
      if (!calendarReady || savingCalendar) return;
      if (!year.checkValidity() || day.value.slice(0, 4) !== year.value) {
        calendarStatus.textContent = 'A data real deve pertencer ao ano letivo selecionado.';
        return;
      }
      writeCalendar(async () => {
        expect(await client.from('school_days').upsert({
          school_date: day.value, school_year: Number(year.value),
          semester: Number(semester.value),
          teaching_weekday: kind.value === 'feriado' ? null : Number(equivalent.value),
          holiday_name: kind.value === 'feriado' ? holiday.value.trim() : null,
        }));
      }, 'Dia salvo.');
    };
    remove.onclick = () => {
      if (savingCalendar) return;
      if (!days.some(row => row.school_date === day.value)) {
        calendarStatus.textContent = 'Selecione um dia cadastrado no semestre.';
        return;
      }
      writeCalendar(async () => {
        expect(await client.from('school_days').delete().eq('school_date', day.value)
          .eq('school_year', Number(year.value)).eq('semester', Number(semester.value)));
        day.value = '';
        equivalent.value = '';
      }, 'Dia removido.');
    };
    function clearBatch() {
      batch.clear();
      renderSemester();
    }
    batchWeekday.onchange = clearBatch;
    find('cal-limpar').onclick = clearBatch;
    find('cal-sugerir').onclick = () => {
      if (!calendarReady || savingCalendar) return;
      const used = new Set(days.map(row => row.school_date));
      const start = find('cal-lote-inicio').value;
      const candidates = gridDates().flatMap(month => month.dates)
        .filter(date => date.getUTCDay() === Number(batchWeekday.value))
        .map(date => date.toISOString().slice(0, 10))
        .filter(value => (!start || value >= start) && !used.has(value));
      batch.clear();
      candidates.slice(0, remaining()).forEach(value => batch.add(value));
      renderSemester();
    };
    find('cal-lote').onsubmit = (event) => {
      event.preventDefault();
      if (!calendarReady || savingCalendar || !batch.size || batch.size > remaining()) return;
      writeCalendar(async () => {
        expect(await client.rpc('save_school_days_bulk', {
          p_year: Number(year.value), p_semester: Number(semester.value),
          p_weekday: Number(batchWeekday.value), p_dates: [...batch].sort(),
        }));
      }, 'Datas marcadas salvas.');
    };
  }

  group.onchange = refreshDayOptions;
  lessonDay.onchange = lessonTime.onchange = clearCall;
  find('chamada-busca').onsubmit = async (event) => {
    event.preventDefault();
    clearCall();
    const version = rosterRequest;
    const selection = { classId: group.value, date: lessonDay.value, time: lessonTime.value };
    attendanceStatus.textContent = 'Carregando chamada…';
    try {
      const [rosterResult, sessionsResult] = await Promise.all([
        client.from('class_memberships').select('user_id, user_profiles(display_name)')
          .eq('class_id', selection.classId).eq('membership_role', 'aluno'),
        client.from('attendance_sessions').select('id, held_at, topic')
          .eq('class_id', selection.classId).eq('school_date', selection.date),
      ]);
      const roster = expect(rosterResult);
      const session = expect(sessionsResult).find(row => timeFormat.format(new Date(row.held_at)) === selection.time);
      const marks = session ? expect(await client.from('attendance_entries').select('student_id, status')
        .eq('session_id', session.id)) : [];
      if (version !== rosterRequest) return;
      if (!roster.length) {
        attendanceStatus.textContent = 'Nenhum aluno matriculado nesta turma.';
        return;
      }
      const saved = new Map(marks.map(row => [row.student_id, row.status]));
      const fields = roster.sort((a, b) => (a.user_profiles?.display_name || '').localeCompare(
        b.user_profiles?.display_name || '', 'pt-BR')).map((student, index) => {
        const label = document.createElement('label');
        label.textContent = student.user_profiles?.display_name || 'Aluno ' + (index + 1);
        const input = document.createElement('select');
        input.name = student.user_id;
        input.required = true;
        input.append(new Option('Selecione a situação', ''));
        Object.entries(statuses).forEach(([value, title]) => input.append(new Option(title, value)));
        input.value = saved.get(student.user_id) || '';
        label.append(input);
        return label;
      });
      find('chamada-alunos').replaceChildren(...fields);
      find('chamada-conteudo').value = session?.topic || '';
      loaded = selection;
      lessonForm.hidden = false;
      attendanceStatus.textContent = session ? 'Chamada existente carregada.' : 'Marque a situação de cada aluno.';
    } catch {
      if (version === rosterRequest) attendanceStatus.textContent = 'Não foi possível carregar a chamada.';
    }
  };
  find('todos-presentes').onclick = () => {
    find('chamada-alunos').querySelectorAll('select').forEach(input => { input.value = 'presente'; });
  };
  lessonForm.onsubmit = async (event) => {
    event.preventDefault();
    if (!loaded) return;
    const current = loaded;
    const save = lessonForm.querySelector('button:not([type])');
    save.disabled = true;
    try {
      expect(await client.rpc('save_calendar_attendance', {
        p_class: current.classId, p_date: current.date, p_time: current.time,
        p_topic: find('chamada-conteudo').value,
        p_marks: Object.fromEntries([...find('chamada-alunos').querySelectorAll('select')]
          .map(input => [input.name, input.value])),
      }));
      if (loaded === current) attendanceStatus.textContent = 'Chamada salva.';
    } catch {
      if (loaded === current) attendanceStatus.textContent = 'Não foi possível salvar. Recarregue a chamada se a matrícula mudou.';
    } finally {
      save.disabled = false;
    }
  };
  group.addEventListener('diary-classes-updated', refreshDayOptions);
  refreshCalendar();
}
