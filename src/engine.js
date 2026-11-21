/* Reusable presentation controls, independent of the visual theme. */
(()=>{'use strict';
const slides=[...document.querySelectorAll('#slides > section.slide')];if(!slides.length)return;
let active=Math.max(0,Math.min(slides.length-1,(Number(location.hash.replace('#slide-',''))||1)-1)),overview=false;
const el=id=>document.getElementById(id);
el('total-slides').textContent=slides.length;
function show(i,hash=true){
active=Math.max(0,Math.min(slides.length-1,i));
slides.forEach((s,n)=>{s.classList.toggle('active',n===active);s.setAttribute('aria-hidden',String(n!==active))});
el('current-slide').textContent=active+1;
el('progress-fill').style.width=((active+1)/slides.length*100)+'%';
el('notes-text').textContent=slides[active].querySelector('.speaker-notes')?.textContent.trim()||'이 슬라이드에는 발표자 노트가 없습니다.';
if(hash)history.replaceState(null,'','#slide-'+(active+1));
}
function overviewMode(force){overview=typeof force==='boolean'?force:!overview;el('stage').classList.toggle('overview',overview);if(!overview)show(active,false)}
function notesMode(){el('note-panel').hidden=!el('note-panel').hidden}
const actions={
prev:()=>show(active-1),next:()=>show(active+1),overview:()=>overviewMode(),notes:notesMode,
fullscreen:()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{}),
print:()=>window.print()};
document.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',()=>actions[b.dataset.action]?.()));
document.addEventListener('keydown',e=>{
if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;
if(e.key==='Escape'){if(overview)overviewMode(false);else el('note-panel').hidden=true;return}
const k=e.key.toLowerCase();
if(k==='o'){overviewMode();return}if(k==='n'){notesMode();return}if(k==='f'){actions.fullscreen();return}
if(overview)return;
if(['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)){e.preventDefault();show(active+1)}
else if(['ArrowLeft','ArrowUp','PageUp','Backspace'].includes(e.key)){e.preventDefault();show(active-1)}
else if(e.key==='Home')show(0);else if(e.key==='End')show(slides.length-1);
});
slides.forEach((s,i)=>s.addEventListener('click',()=>{if(overview){overviewMode(false);show(i)}}));
window.addEventListener('hashchange',()=>{const n=Number(location.hash.replace('#slide-',''));if(n>0)show(n-1,false)});
window.addEventListener('beforeprint',()=>{if(overview)overviewMode(false);el('note-panel').hidden=true});
show(active,false);
})();