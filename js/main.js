const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (header) {
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));
}
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

const service = document.getElementById('service');
const width = document.getElementById('width');
const length = document.getElementById('length');
const area = document.getElementById('area');

function calcArea() {
  if (!width || !length || !area) return;
  const value = (parseFloat(width.value) || 0) * (parseFloat(length.value) || 0);
  area.textContent = value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' m²';
}
if (width) width.addEventListener('input', calcArea);
if (length) length.addEventListener('input', calcArea);

document.querySelectorAll('[data-service]').forEach(a => a.addEventListener('click', () => {
  if (service) service.value = a.dataset.service;
}));

const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', e => {
    e.preventDefault();
    const room = document.getElementById('room')?.value || 'Não informado';
    const city = document.getElementById('city')?.value || 'Não informado';
    const notes = document.getElementById('notes')?.value || 'Sem observações';
    const w = width?.value || '0';
    const l = length?.value || '0';
    const sqm = (parseFloat(w) || 0) * (parseFloat(l) || 0);
    const lines = [
      'Olá Rogério! Vim pelo site da RPG e gostaria de solicitar um orçamento.',
      '',
      `*Serviço:* ${service?.value || 'Não informado'}`,
      `*Ambiente:* ${room}`,
      `*Medidas:* ${w} m x ${l} m`,
      `*Área aproximada:* ${sqm.toFixed(2).replace('.', ',')} m²`,
      `*Cidade:* ${city}`,
      `*Observações:* ${notes}`
    ];
    window.open(`https://wa.me/5511930248160?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
if (lightbox && lightboxImage) {
  document.querySelectorAll('[data-lightbox]').forEach(card => card.addEventListener('click', () => {
    const img = card.querySelector('img');
    const caption = card.querySelector('figcaption strong')?.textContent || '';
    if (!img) return;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    if (lightboxCaption) lightboxCaption.textContent = caption;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }));
  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  };
  lightbox.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}
