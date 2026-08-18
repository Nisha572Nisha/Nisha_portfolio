const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}));

// active nav link on scroll
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(n => n.classList.toggle('active', n.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });
sections.forEach(s => navObserver.observe(s));

// reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in-view'); revealObserver.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// typed rotator
const roles = ['CSE Student', 'Aspiring Developer', 'ML Enthusiast', 'Problem Solver'];
const typedEl = document.getElementById('typedLine');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let ri = 0, ci = 0, deleting = false;
function typeLoop(){
  const word = roles[ri];
  if (reduceMotion){ typedEl.textContent = word; return; }
  ci += deleting ? -1 : 1;
  typedEl.textContent = word.slice(0, ci);
  let delay = deleting ? 45 : 90;
  if (!deleting && ci === word.length){ delay = 1400; deleting = true; }
  else if (deleting && ci === 0){ deleting = false; ri = (ri + 1) % roles.length; delay = 300; }
  setTimeout(typeLoop, delay);
}
typeLoop();

// back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => backToTop.classList.toggle('visible', window.scrollY > 500));
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

// profile lightbox
const lightbox = document.getElementById('lightbox');
document.getElementById('profileOpen').addEventListener('click', () => lightbox.hidden = false);
document.getElementById('lightboxClose').addEventListener('click', () => lightbox.hidden = true);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.hidden = true; });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.hidden = true; });

// contact form (client-side only demo — connect a real backend like Formspree/EmailJS to send for real)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  const fields = [
    ['cf-name', 'err-name', 'Please enter your name.'],
    ['cf-email', 'err-email', 'Please enter a valid email.'],
    ['cf-subject', 'err-subject', 'Please add a subject.'],
    ['cf-message', 'err-message', 'Please write a message.'],
  ];
  fields.forEach(([inputId, errId, msg]) => {
    const input = document.getElementById(inputId);
    const err = document.getElementById(errId);
    let ok = input.value.trim().length > 0;
    if (inputId === 'cf-email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    err.textContent = ok ? '' : msg;
    if (!ok) valid = false;
  });
  if (valid) {
    status.textContent = 'Message ready to send — connect a form backend (e.g. Formspree) to make this live.';
    form.reset();
  } else {
    status.textContent = '';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
