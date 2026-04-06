// js/heatmap.js
import { TIER_COLORS, TIER_SCORE } from './data.js';

const REGIONS = ['brazil', 'eu', 'uk'];

function totalScore(platform, type) {
  return REGIONS.reduce((sum, r) => sum + (TIER_SCORE[platform[type][r]] ?? 0), 0);
}

function maxScore(platform, type) {
  return Math.max(...REGIONS.map(r => TIER_SCORE[platform[type][r]] ?? 0));
}

function sortAll(platforms, type) {
  return [...platforms].sort((a, b) => {
    const maxDiff = maxScore(b, type) - maxScore(a, type);
    return maxDiff !== 0 ? maxDiff : totalScore(b, type) - totalScore(a, type);
  });
}

export class Heatmap {
  /**
   * @param {HTMLElement} container - The section element to render into
   * @param {Object} opts
   * @param {Array}  opts.platforms - Array of platform objects from data.js
   * @param {'ugc'|'ads'} opts.type - Which data type to display
   * @param {string} opts.eyebrow
   * @param {string} opts.title
   * @param {string} opts.lead
   */
  constructor(container, { platforms, type, eyebrow, title, lead, sectionClass = '' }) {
    this.container = container;
    this.platforms = platforms;
    this.type = type;
    this.eyebrow = eyebrow;
    this.title = title;
    this.lead = lead;
    this.sectionClass = sectionClass;
    this.activeRegion = 'all';
    this.sorted = true;

    this.assessedPlatforms = platforms.filter(p => p[type] !== null);
    this.displayPlatforms = sortAll(this.assessedPlatforms, type);
  }

  render() {
    this.container.innerHTML = `
      <div class="container section ${this.sectionClass}">
        <div class="section__header">
          <p class="section__eyebrow">${this.eyebrow}</p>
          <h2 class="section__title">${this.title}</h2>
          <p class="section__lead">${this.lead}</p>
        </div>
        <div class="heatmap-controls">
          <div class="heatmap-filter-tabs">
            <button class="heatmap-tab active" data-region="all">All</button>
            <button class="heatmap-tab" data-region="brazil">Brazil</button>
            <button class="heatmap-tab" data-region="eu">EU</button>
            <button class="heatmap-tab" data-region="uk">UK</button>
          </div>
          <button class="heatmap-sort" aria-label="Sort by score">↕ Sort by score</button>
        </div>
        <div class="heatmap-section">
          <table class="heatmap-table">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Brazil</th>
                <th>EU</th>
                <th>UK</th>
              </tr>
            </thead>
            <tbody id="${this.container.id}-tbody"></tbody>
          </table>
        </div>
      </div>
    `;

    this._bindControls();
    this._renderRows();
  }

  _renderRows() {
    const tbody = document.getElementById(`${this.container.id}-tbody`);
    tbody.innerHTML = this.displayPlatforms.map(p => this._rowHTML(p)).join('');
  }

  _rowHTML(platform) {
    const data = platform[this.type];
    const cells = REGIONS.map(region => {
      const tier = data[region];
      const { bg, text } = TIER_COLORS[tier];
      const dimmed = this.activeRegion !== 'all' && this.activeRegion !== region ? 'dimmed' : '';
      const notAssessed = tier === 'Not Available' ? 'not-assessed' : '';
      const bgStyle = tier === 'Not Available' ? '' : `background:${bg};`;
      return `
        <td>
          <div class="tier-cell ${dimmed} ${notAssessed}" style="${bgStyle}color:${text};">
            <span class="tier-label">${tier}</span>
          </div>
        </td>
      `;
    }).join('');

    const vlopBadge = platform.isVlop ? `<span class="vlop-badge">VLOP</span>` : '';

    return `
      <tr>
        <td>
          <div class="platform-name">
            ${platform.name}
            ${vlopBadge}
          </div>
        </td>
        ${cells}
      </tr>
    `;
  }

  _bindControls() {
    this.container.querySelectorAll('.heatmap-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.container.querySelectorAll('.heatmap-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeRegion = tab.dataset.region;
        // Reset sort when switching regions
        if (this.sorted) {
          this.displayPlatforms = this.activeRegion === 'all'
            ? sortAll(this.assessedPlatforms, this.type)
            : [...this.assessedPlatforms].sort((a, b) => TIER_SCORE[b[this.type][this.activeRegion]] - TIER_SCORE[a[this.type][this.activeRegion]]);
        }
        this._renderRows();
      });
    });

    const sortBtn = this.container.querySelector('.heatmap-sort');
    sortBtn.addEventListener('click', () => {
      this.sorted = !this.sorted;
      sortBtn.classList.toggle('active', this.sorted);
      if (this.sorted) {
        this.displayPlatforms = this.activeRegion === 'all'
          ? sortAll(this.assessedPlatforms, this.type)
          : [...this.assessedPlatforms].sort((a, b) => TIER_SCORE[b[this.type][this.activeRegion]] - TIER_SCORE[a[this.type][this.activeRegion]]);
      } else {
        this.displayPlatforms = [...this.assessedPlatforms];
      }
      this._renderRows();
    });
  }
}
