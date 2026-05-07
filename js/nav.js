// js/nav.js
export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('#nav-links');
  const sections = document.querySelectorAll('section[id]');

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('open', !expanded);
  });

  // Event delegation: handles clicks on current and future nav link elements
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

export function initLangSwitcher(currentLang) {
  if (document.querySelector('.lang-switcher')) {
    updateLangPill(currentLang);
    return;
  }
  const navInner = document.querySelector('.nav-inner');
  const pill = document.createElement('div');
  pill.className = 'lang-switcher';
  pill.setAttribute('role', 'group');
  pill.setAttribute('aria-label', 'Language');
  pill.innerHTML = `
    <button class="lang-switcher__btn" data-lang="en" aria-pressed="${currentLang === 'en'}">EN</button>
    <button class="lang-switcher__btn" data-lang="pt" aria-pressed="${currentLang === 'pt'}">PT</button>
  `;
  navInner.appendChild(pill);

  pill.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-switcher__btn');
    if (!btn || btn.getAttribute('aria-pressed') === 'true') return;
    if (typeof window.__setLang === 'function') {
      window.__setLang(btn.dataset.lang);
    }
  });
}

export function updateLangPill(lang) {
  document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
}
