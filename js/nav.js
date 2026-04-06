// js/nav.js
export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('#nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  // Mobile toggle
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('open', !expanded);
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
    });
  });

  // Scroll spy
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}
