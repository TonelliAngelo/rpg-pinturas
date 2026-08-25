const header=document.querySelector('.site-header');const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'))});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const service=document.getElementById('service'),width=document.getElementById('width'),length=document.getElementById('length'),area=document.getElementById('area');function calcArea(){const a=(parseFloat(width.value)||0)*(parseFloat(length.value)||0);area.textContent=a.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})+' m²'}width.addEventListener('input',calcArea);length.addEventListener('input',calcArea);document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{service.value=a.dataset.service}));
document.getElementById('quoteForm').addEventListener('submit',e=>{e.preventDefault();const room=document.getElementById('room').value,city=document.getElementById('city').value||'Não informado',notes=document.getElementById('notes').value||'Sem observações',w=width.value,l=length.value;const sqm=(parseFloat(w)||0)*(parseFloat(l)||0);const text=`Olá Rogério! Vim pelo site da RPG e gostaria de solicitar um orçamento.%0A%0A*Serviço:* ${encodeURIComponent(service.value)}%0A*Ambiente:* ${encodeURIComponent(room)}%0A*Medidas:* ${encodeURIComponent(w)} m x ${encodeURIComponent(l)} m%0A*Área aproximada:* ${encodeURIComponent(sqm.toFixed(2).replace('.',','))} m²%0A*Cidade:* ${encodeURIComponent(city)}%0A*Observações:* ${encodeURIComponent(notes)}`;window.open(`https://wa.me/5511930248160?text=${text}`,'_blank')});

// Galeria ampliável do portfólio
const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightboxImage');
const lightboxCaption=document.getElementById('lightboxCaption');
if(lightbox){
  document.querySelectorAll('[data-lightbox]').forEach(card=>card.addEventListener('click',()=>{
    const img=card.querySelector('.portfolio-image');
    const title=card.querySelector('figcaption strong');
    lightboxImage.src=img.src;
    lightboxImage.alt=img.alt;
    lightboxCaption.textContent=title?title.textContent:'';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }));
  const closeLightbox=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';};
  lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
}
