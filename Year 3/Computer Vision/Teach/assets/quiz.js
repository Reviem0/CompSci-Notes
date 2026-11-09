/* Reusable quiz + recall components.
   Multiple choice:  <div class="quiz" data-quiz='[{"q":"..","options":["..",".."],"answer":1,"why":".."}]'></div>
   Recall cards:     <details class="recall"><summary>Prompt</summary><div>Model answer</div></details>
                     (add data-attempt to show a textarea the learner must use before revealing) */
(function(){
  const css = `
  .quiz{margin:1.5rem 0;counter-reset:q}
  .quiz .q{border:1px solid var(--rule);background:var(--card);border-radius:6px;padding:1rem 1.1rem;margin:0 0 1rem}
  .quiz .q p{margin:0 0 .6rem;font-size:1rem}
  .quiz .q p::before{counter-increment:q;content:counter(q) ". ";font-family:var(--sans);color:var(--muted)}
  .quiz .opts{display:grid;gap:.4rem}
  .quiz .opts button{text-align:left;font-size:.9rem;padding:.55rem .75rem}
  .quiz .opts button.right{border-color:var(--ok);background:var(--ok-soft);color:var(--ok)}
  .quiz .opts button.wrong{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}
  .quiz .opts button:disabled{cursor:default}
  .quiz .feedback{font-size:.85rem;margin-top:.6rem;color:var(--muted)}
  .quiz .score{font-family:var(--sans);font-size:.85rem;color:var(--muted)}
  details.recall{border:1px solid var(--rule);border-radius:6px;padding:.7rem 1rem;margin:.8rem 0;background:var(--card)}
  details.recall summary{cursor:pointer;font-weight:600}
  details.recall > div{margin-top:.6rem;padding-top:.6rem;border-top:1px dashed var(--rule)}
  .attempt textarea{width:100%;min-height:4.5rem;margin:.6rem 0 .3rem;font:inherit;font-size:.9rem;background:var(--bg);color:var(--fg);border:1px solid var(--rule);border-radius:4px;padding:.5rem}
  .attempt .hint{font-size:.75rem;color:var(--muted);font-family:var(--sans)}`;
  const st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

  document.querySelectorAll('.quiz').forEach(root=>{
    const qs=JSON.parse(root.dataset.quiz); let answered=0, right=0;
    const score=document.createElement('div'); score.className='score';
    const upd=()=>score.textContent=`Score: ${right} / ${answered} answered (of ${qs.length})`;
    qs.forEach(item=>{
      const box=document.createElement('div'); box.className='q';
      const p=document.createElement('p'); p.innerHTML=item.q; box.appendChild(p);
      const opts=document.createElement('div'); opts.className='opts';
      const fb=document.createElement('div'); fb.className='feedback';
      item.options.forEach((o,i)=>{
        const b=document.createElement('button'); b.type='button'; b.innerHTML=o;
        b.onclick=()=>{
          const btns=[...opts.children]; btns.forEach(x=>x.disabled=true);
          btns[item.answer].classList.add('right');
          answered++;
          if(i===item.answer){right++; fb.innerHTML='Correct. '+(item.why||'');}
          else{b.classList.add('wrong'); fb.innerHTML='Not quite. '+(item.why||'');}
          upd();
        };
        opts.appendChild(b);
      });
      box.append(opts,fb); root.appendChild(box);
    });
    upd(); root.appendChild(score);
  });

  document.querySelectorAll('details.recall[data-attempt]').forEach(d=>{
    const sum=d.querySelector('summary'); const wrap=document.createElement('div'); wrap.className='attempt';
    wrap.innerHTML='<textarea placeholder="Write your answer from memory first…"></textarea><span class="hint">The model answer unlocks once you have written something.</span>';
    d.parentNode.insertBefore(wrap,d); wrap.appendChild(d);
    const ta=wrap.querySelector('textarea');
    sum.addEventListener('click',e=>{ if(!d.open && ta.value.trim().length<10){e.preventDefault(); ta.focus();} });
  });
})();
