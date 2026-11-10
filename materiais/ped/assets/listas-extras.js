(() => {
  'use strict';
  document.querySelectorAll('[data-extra]').forEach(lab=>{
    const get=s=>lab.querySelector(s), say=s=>get('[role="status"]').textContent=s;
    if(lab.dataset.extra==='copias'){
      const reset=()=>{get('[data-model]').textContent=get('[data-mode]').value==='alias'?'a ──→ mesma lista ←── b':'a → uma lista; b → outra lista (cópia).';get('[data-code]').textContent='a = ["Shampoo", "Batom"]\nb = ["Shampoo", "Batom"]';say('Preveja o efeito de b[0] = "Creme" usando um dos botões.');};
      lab.querySelectorAll('[data-predict]').forEach(b=>b.onclick=()=>{const shared=get('[data-mode]').value==='alias';get('[data-code]').textContent=`Após b[0] = "Creme": a = ["${shared?'Creme':'Shampoo'}", "Batom"]; b = ["Creme", "Batom"]`;say((shared===(b.dataset.predict==='yes')?'Correto! ':'Compare o resultado. ')+(shared?'As duas variáveis apontam para a mesma lista.':'copy() criou outra lista: substituir um elemento de b não altera a.'));});
      get('[data-mode]').onchange=reset;get('[data-reset]').onclick=reset;reset();
    }
    if(lab.dataset.extra==='matriz'){
      const rows=[['Shampoo','Batom','Creme'],['Sabonete','Protetor','Máscara']], targets=[[1,2],[0,1],[1,0],[0,2],[1,1],[0,0]];let round=0;
      const ask=()=>{const [r,c]=targets[round];get('[data-prompt]').textContent=`Desafio ${round+1}/6: prateleiras[${r}][${c}]`;get('[data-next]').disabled=true;get('[data-grid]').replaceChildren();rows.forEach((row,i)=>{const line=document.createElement('div');line.className='lr-cards';const label=document.createElement('span');label.textContent=`Linha ${i}:`;line.append(label);row.forEach((v,j)=>{const b=document.createElement('button');b.className='lr-card';b.textContent=`Coluna ${j}: ${v}`;b.onclick=()=>{say(i===r&&j===c?`Correto! Linha ${i}, coluna ${j}: ${v}.`:`Você escolheu [${i}][${j}]. Escolha primeiro a linha ${r}, depois a coluna ${c}.`);get('[data-next]').disabled=!(i===r&&j===c);};line.append(b);});get('[data-grid]').append(line);});};get('[data-next]').onclick=()=>{round=(round+1)%targets.length;say('');ask();};ask();
    }
    if(lab.dataset.extra==='filtro'){
      const values=[12,35,18,42,20,9], selected=new Set();
      const draw=()=>{get('[data-board]').replaceChildren();values.forEach((v,i)=>{const b=document.createElement('button');b.className='lr-card';b.textContent=`R$ ${v}`;b.setAttribute('aria-pressed',String(selected.has(i)));b.toggleAttribute('data-active',selected.has(i));b.onclick=()=>{selected.has(i)?selected.delete(i):selected.add(i);draw();get('[data-board]').children[i].focus();};get('[data-board]').append(b);});get('[data-code]').textContent='Sua seleção, na ordem original: '+JSON.stringify(values.filter((_,i)=>selected.has(i)));};
      get('[data-check]').onclick=()=>{const rule=get('[data-rule]').value, fn=rule==='low'?v=>v<20:rule==='high'?v=>v>=30:v=>v%2===0;const correct=values.every((v,i)=>fn(v)===selected.has(i));say(correct?'Correto! O filtro conserva a ordem dos elementos que atendem à condição.':'Ainda não. Teste a condição em cada ficha, inclusive nas que você não selecionou.');};
      const reset=()=>{selected.clear();say('');draw();};get('[data-reset]').onclick=reset;get('[data-rule]').onchange=reset;reset();
    }
    get('.lr-interactive').hidden=false;
  });
})();
