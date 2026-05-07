// js/main.js
import { initNav, initLangSwitcher, updateLangPill } from './nav.js';
import { TIERS, TIER_COLORS, TIER_RANGE, platforms } from './data.js';
import { Heatmap } from './heatmap.js';
import { initRecommendations } from './recommendations.js';

async function loadContent(lang) {
  try {
    const mod = await import(lang === 'pt' ? './content.pt.js' : './content.en.js');
    return mod.content;
  } catch {
    const mod = await import('./content.en.js');
    return mod.content;
  }
}

function resolveLang() {
  const stored = localStorage.getItem('lang');
  if (stored === 'en' || stored === 'pt') return stored;
  return navigator.language.startsWith('pt') ? 'pt' : 'en';
}

function renderNav(content) {
  document.querySelector('.nav-logo').textContent = content.nav.logo;
  const navLinks = document.getElementById('nav-links');
  navLinks.innerHTML = content.nav.links
    .map(link => `<li><a href="${link.href}">${link.label}</a></li>`)
    .join('');
}

function renderHero(content) {
  const section = document.getElementById('hero');
  const { subtitle, institution, cta } = content.hero;
  const { button, pdfUrl, onlineEdition, onlineEditionLabel } = content.download;

  section.innerHTML = `
    <p class="hero__eyebrow">${institution}</p>
    <img src="Logos/data-not-foun_vertictal_branco.svg" alt="Data Not Found" class="hero__logo">
    <div class="hero__divider"></div>
    <p class="hero__subtitle">${subtitle}</p>
    <div class="hero__actions">
      ${pdfUrl
        ? `<a href="${pdfUrl}" target="_blank" rel="noopener" class="hero__btn">↓ ${button}</a>`
        : `<span class="hero__btn hero__btn--disabled">↓ ${button}</span>`
      }
      <a href="${onlineEdition}" target="_blank" rel="noopener" class="hero__btn hero__btn--outline">${onlineEditionLabel} ↗</a>
    </div>
    <span class="hero__cta">${cta} ↓</span>
  `;
}

function renderProblem(content) {
  const section = document.getElementById('problem');
  const { eyebrow, title, body } = content.problem;
  section.innerHTML = `
    <div class="container container--narrow section">
      <div class="section__header">
        <p class="section__eyebrow">${eyebrow}</p>
        <h2 class="section__title">${title}</h2>
      </div>
      <div class="prose">
        ${body.map(p => `<p>${p}</p>`).join('')}
      </div>
    </div>
  `;
}

function renderAboutIndex(content) {
  const section = document.getElementById('about-index');
  const { eyebrow, title, body, legendLabel } = content.aboutIndex;
  const pills = TIERS.map(tier => {
    const { bg } = TIER_COLORS[tier];
    const isNA = tier === 'Not Available';
    const swatchStyle = isNA ? '' : `background:${bg};`;
    const swatchClass = isNA ? 'tier-pill__swatch tier-pill__swatch--na' : 'tier-pill__swatch';
    const range = TIER_RANGE[tier];
    return `
      <div class="tier-pill">
        <div class="${swatchClass}" style="${swatchStyle}"></div>
        <span class="tier-pill__label">${tier}${range ? `<span class="tier-pill__range">(${range})</span>` : ''}</span>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="container section section--flush-bottom">
      <div class="section__header">
        <p class="section__eyebrow">${eyebrow}</p>
        <h2 class="section__title">${title}</h2>
        ${(Array.isArray(body) ? body : [body]).map(p => `<p class="section__lead">${p}</p>`).join('')}
      </div>
      <div class="tier-legend">
        <span class="tier-legend__label">${legendLabel}</span>
        ${pills}
      </div>
    </div>
  `;
}

function renderUgcIndex(content) {
  const { eyebrow, title, lead } = content.ugc;
  const heatmap = new Heatmap(document.getElementById('ugc'), {
    platforms,
    type: 'ugc',
    eyebrow,
    title,
    lead,
    sectionClass: 'section--flush-top',
  });
  heatmap.render();
}

function renderAdsIndex(content) {
  const { eyebrow, title, lead } = content.ads;
  const heatmap = new Heatmap(document.getElementById('ads'), {
    platforms,
    type: 'ads',
    eyebrow,
    title,
    lead,
  });
  heatmap.render();
}

function renderFindings(content) {
  const section = document.getElementById('findings');
  const { eyebrow, title, items } = content.findings;
  const findingsHTML = items.map(item => `
    <div class="finding">
      <p class="finding__statement">${item.statement}</p>
      <p class="finding__body">${item.body}</p>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container section">
      <div class="section__header">
        <p class="section__eyebrow">${eyebrow}</p>
        <h2 class="section__title">${title}</h2>
      </div>
      <div class="findings-list">${findingsHTML}</div>
    </div>
  `;
}

function renderRecommendations(content) {
  const section = document.getElementById('recommendations');
  const { eyebrow, title, groups } = content.recommendations;

  const groupsHTML = groups.map(group => {
    const cardsHTML = group.items.map(item => `
      <div class="rec-card" id="rec-${item.id}">
        <button class="rec-card__header" aria-expanded="false">
          <span class="rec-badge">${item.id}</span>
          <span class="rec-card__title">${item.title}</span>
          <span class="rec-card__toggle" aria-hidden="true">↓</span>
        </button>
        <p class="rec-card__full">${item.full}</p>
      </div>
    `).join('');

    return `
      <div class="rec-group">
        <p class="rec-group__heading">${group.stakeholder}</p>
        ${cardsHTML}
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="container section">
      <div class="section__header">
        <p class="section__eyebrow">${eyebrow}</p>
        <h2 class="section__title">${title}</h2>
      </div>
      ${groupsHTML}
    </div>
  `;

  initRecommendations();
}

function renderDownload(content) {
  const section = document.getElementById('download');
  const { eyebrow, title, button, pdfUrl, onlineEdition, onlineEditionLabel, citation, doi } = content.download;

  section.innerHTML = `
    <div class="container container--narrow section">
      <div class="section__header">
        <p class="section__eyebrow">${eyebrow}</p>
        <h2 class="section__title">${title}</h2>
      </div>
      <div class="download-actions">
        ${pdfUrl
          ? `<a href="${pdfUrl}" target="_blank" rel="noopener" class="btn-primary">↓ ${button}</a>`
          : `<span class="btn-primary btn-primary--disabled">↓ ${button}</span>`
        }
        <a href="${onlineEdition}" target="_blank" rel="noopener" class="btn-secondary">
          ${onlineEditionLabel} ↗
        </a>
      </div>
      <div class="citation-block">
        <p class="citation-block__label">How to cite</p>
        <p class="citation-block__text">${citation}</p>
        <a href="${doi}" target="_blank" rel="noopener" class="doi-link">${doi}</a>
      </div>
      <div class="logos-row">
        <a href="https://netlab.eco.ufrj.br/en" target="_blank" rel="noopener" class="logo-link">
          <img src="Logos/Logo_Principal_Branco.png" alt="NetLab UFRJ" class="logo-img">
        </a>
        <a href="https://www.mctd.ac.uk/" target="_blank" rel="noopener" class="logo-link">
          <img src="Logos/MINDEROO_logotipo_pb_branco.png" alt="Minderoo Centre" class="logo-img">
        </a>
        <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener" class="logo-link">
          <img src="Logos/CAMBRIDGE_logotipo_pb_branco.png" alt="University of Cambridge" class="logo-img">
        </a>
        <a href="https://ufrj.br" target="_blank" rel="noopener" class="logo-link">
          <img src="Logos/ufrj-horizontal-negativa-completa-telas (1).png" alt="UFRJ" class="logo-img">
        </a>
      </div>
    </div>
  `;
}

function renderAll(content) {
  renderNav(content);
  renderHero(content);
  renderProblem(content);
  renderAboutIndex(content);
  renderUgcIndex(content);
  renderAdsIndex(content);
  renderFindings(content);
  renderRecommendations(content);
  renderDownload(content);
}

window.__setLang = async (lang) => {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const content = await loadContent(lang);
  renderAll(content);
  updateLangPill(lang);
};

document.addEventListener('DOMContentLoaded', async () => {
  const lang = resolveLang();
  document.documentElement.lang = lang;
  const content = await loadContent(lang);
  renderAll(content);
  initNav();
  initLangSwitcher(lang);
});
