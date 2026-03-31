// ─────────────────────────────────────────────────────────────────────────────
// pub-render.js  —  Renders PUBLICATIONS data into the page.
//
// Depends on publications-data.js (must be loaded first).
// Works on two pages:
//   publications.html  →  renders year-grouped list into #pub-container
//                         and auto-updates filter button counts
//   index.html         →  renders selected entries into #selected-pub-container
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  function buildPubItem(pub) {
    const li = document.createElement('li');
    li.className = 'pub-item';
    li.dataset.type  = pub.type.join(' ');
    li.dataset.venue = pub.venue;

    const authorsHtml = pub.authors
      .map(a => a.isMe ? `<span class="author-me">${a.name}</span>` : a.name)
      .join(', ');

    const tagsHtml = pub.tags
      .map(t => `<span class="pub-tag ${t.cls}">${t.text}</span>`)
      .join('');

    const linksHtml = pub.links.map(l => {
      const ext = l.href !== '#' ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${l.href}"${ext} class="pub-link">${l.text}</a>`;
    }).join('');

    li.innerHTML =
      `<div class="pub-thumb">📄</div>` +
      `<div class="pub-content">` +
        `<div class="pub-title">${pub.title}</div>` +
        `<div class="pub-authors">${authorsHtml}</div>` +
        `<div class="pub-tags">${tagsHtml}</div>` +
        `<div class="pub-links">${linksHtml}</div>` +
      `</div>`;

    return li;
  }

  // ── Full publications page (#pub-container) ──────────────────────────────
  const pubContainer = document.getElementById('pub-container');
  if (pubContainer) {
    // Group by year
    const byYear = PUBLICATIONS.reduce((acc, pub) => {
      (acc[pub.year] = acc[pub.year] || []).push(pub);
      return acc;
    }, {});

    // Render each year section, newest first
    Object.keys(byYear)
      .sort((a, b) => b - a)
      .forEach(year => {
        const h2 = document.createElement('h2');
        h2.className = 'section-title';
        h2.textContent = year;
        pubContainer.appendChild(h2);

        const ul = document.createElement('ul');
        ul.className = 'pub-list';
        byYear[year].forEach(pub => ul.appendChild(buildPubItem(pub)));
        pubContainer.appendChild(ul);
      });

    // Auto-update filter button counts
    const total      = PUBLICATIONS.length;
    const firstCount = PUBLICATIONS.filter(p => p.type.includes('first')).length;
    const allBtn   = document.querySelector('[data-filter="all"]');
    const firstBtn = document.querySelector('[data-filter="first"]');
    if (allBtn)   allBtn.textContent   = `All (${total})`;
    if (firstBtn) firstBtn.textContent = `First Author (${firstCount})`;
  }

  // ── Selected publications page (index.html #selected-pub-container) ──────
  const selContainer = document.getElementById('selected-pub-container');
  if (selContainer) {
    const ul = document.createElement('ul');
    ul.className = 'pub-list';
    PUBLICATIONS
      .filter(p => p.selected)
      .forEach(pub => ul.appendChild(buildPubItem(pub)));
    selContainer.appendChild(ul);
  }
})();
