const menu=document.querySelector('.menu');const nav=document.querySelector('.nav');if(menu){menu.addEventListener('click',()=>nav.classList.toggle('open'))}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
function openVideo(id,start=0){const m=document.getElementById('videoModal');const f=document.getElementById('videoFrame');f.src=`https://www.youtube.com/embed/${id}?start=${start}&autoplay=1&rel=0`;m.classList.add('open');document.body.style.overflow='hidden'}
function closeVideo(){const m=document.getElementById('videoModal');const f=document.getElementById('videoFrame');f.src='';m.classList.remove('open');document.body.style.overflow=''}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeVideo()});
