/* ============================================
   Shared Navigation — edit here to update all pages
   ============================================ */
(function () {
  // ── Link list ─────────────────────────────
  // To restore a hidden link, uncomment the corresponding line.
  const LINKS = [
    { href: 'index.html',        label: 'Home' },
    { href: 'publications.html', label: 'Publications' },
    // { href: 'projects.html',  label: 'Projects' },  // uncomment when ready
    // { href: 'cv.html',        label: 'CV' },         // uncomment when ready
    // { href: 'gallery.html',   label: 'Gallery' },    // uncomment when ready
  ];

  const linksHTML = LINKS.map(l =>
    `<a href="${l.href}" class="nav-link">${l.label}</a>`
  ).join('\n      ');

  const navHTML = `<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-brand">Kexiang Huang</a>
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
    <div class="nav-links" id="nav-links">
      ${linksHTML}
    </div>
  </div>
</nav>`;

  // Insert nav right where this <script> tag sits in the document.
  // document.currentScript is the <script src="js/nav.js"> element itself.
  document.currentScript.insertAdjacentHTML('afterend', navHTML);

  // ── Highlight the current page's link ─────
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a.nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
