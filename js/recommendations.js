// js/recommendations.js
export function initRecommendations() {
  document.querySelectorAll('.rec-card__header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.rec-card');
      card.classList.toggle('open');
      const expanded = card.classList.contains('open');
      header.setAttribute('aria-expanded', String(expanded));
    });
  });
}
