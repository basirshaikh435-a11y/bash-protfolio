// ====== EDIT THIS: put your GitHub profile URL here (used for every GitHub link) ======
const CONFIG = { github: "https://github.com/" };
// =====================================================================================

document.querySelectorAll('[data-link="github"]').forEach(a => a.href = CONFIG.github);
document.getElementById('yr').textContent = new Date().getFullYear();

// Mobile menu
const burger = document.getElementById('burger'), menu = document.getElementById('menu');
const setMenu = open => { menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Nav border + scroll spy
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('stuck', scrollY > 10), { passive: true });
const links = [...menu.querySelectorAll('a')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section').forEach(s => spy.observe(s));

// Skill filter
const tabs = document.querySelectorAll('.tab');
tabs.forEach(t => t.addEventListener('click', () => {
  tabs.forEach(x => { x.classList.toggle('active', x === t); x.setAttribute('aria-selected', x === t); });
  document.querySelectorAll('.group').forEach(g => g.classList.toggle('hide', t.dataset.f !== 'all' && g.dataset.c !== t.dataset.f));
}));

// Project details
document.querySelectorAll('.more').forEach(b => b.addEventListener('click', () => {
  const card = b.closest('.card'), open = card.classList.toggle('open');
  b.setAttribute('aria-expanded', open);
  b.textContent = open ? 'Hide details' : 'Show details';
}));

// Contact form: opens the visitor's email app (no backend needed)
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, s = document.getElementById('status');
  const name = f.name.value.trim(), email = f.email.value.trim(), msg = f.message.value.trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !msg) {
    s.className = 'status err'; s.textContent = 'Enter your name, a valid email and a message.'; return;
  }
  const body = encodeURIComponent(`${msg}\n\nFrom: ${name} (${email})`);
  location.href = `mailto:shaikhbasir469@gmail.com?subject=${encodeURIComponent('Portfolio message from ' + name)}&body=${body}`;
  s.className = 'status ok'; s.textContent = 'Opening your email app to send the message.';
});

// ===== Polish pass =====
// Theme toggle (remembers choice, falls back to system setting)
const root = document.documentElement;
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
document.getElementById('theme').addEventListener('click', () => {
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
});

// Scroll progress + back-to-top
const bar = document.getElementById('progress'), toTop = document.getElementById('totop');
addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
  toTop.classList.toggle('show', scrollY > 600);
}, { passive: true });

// Turn "A, B, C" tech stacks into chips
document.querySelectorAll('.stack').forEach(p => {
  const d = document.createElement('div'); d.className = 'stackchips';
  p.textContent.split(',').forEach(t => { const s = document.createElement('span'); s.textContent = t.trim(); d.appendChild(s); });
  p.replaceWith(d);
});

// Reveal on scroll
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.sec h2, .about, .group, .card, .edu, .certs li, .contact > *').forEach((el, i) => {
  el.classList.add('rv'); el.style.transitionDelay = (i % 4) * 70 + 'ms'; rv.observe(el);
});

// Count-up stats
const cu = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cu.unobserve(e.target);
  const n = +e.target.dataset.n; let c = 0;
  const t = setInterval(() => { e.target.textContent = ++c; if (c >= n) clearInterval(t); }, 220);
}));
document.querySelectorAll('[data-n]').forEach(el => cu.observe(el));
