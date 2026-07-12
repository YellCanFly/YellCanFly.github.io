/* ============================================
   Shared Navigation — edit here to update all pages
   ============================================ */
(function () {
  // ── Link list ─────────────────────────────
  // To restore a hidden link, uncomment the corresponding line.
  const LINKS = [
    { href: 'index.html',        key: 'nav.home' },
    { href: 'publications.html', key: 'nav.publications' },
    // { href: 'projects.html',  key: 'nav.projects' },  // uncomment when ready
    // { href: 'cv.html',        key: 'nav.cv' },         // uncomment when ready
    // { href: 'gallery.html',   key: 'nav.gallery' },    // uncomment when ready
  ];

  const linksHTML = LINKS.map(l =>
    `<a href="${l.href}" class="nav-link" data-i18n="${l.key}">${I18N.t(l.key)}</a>`
  ).join('\n      ');

  const navHTML = `<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-brand">Kexiang Huang</a>
    <div class="nav-links" id="nav-links">
      ${linksHTML}
    </div>
    <button class="language-toggle" id="language-toggle" type="button" data-i18n-aria-label="language.switchTo" aria-label="${I18N.t('language.switchTo')}">
      <span class="language-option" data-language-option="en">EN</span>
      <span class="language-divider">/</span>
      <span class="language-option" data-language-option="zh">中</span>
    </button>
    <button class="nav-toggle" id="nav-toggle" data-i18n-aria-label="nav.toggleMenu" aria-label="${I18N.t('nav.toggleMenu')}">
      <span></span><span></span><span></span>
    </button>
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

  const languageToggle = document.getElementById('language-toggle');

  function updateLanguageToggle() {
    const language = I18N.getLanguage();
    languageToggle.querySelectorAll('[data-language-option]').forEach(function (option) {
      option.classList.toggle('active', option.dataset.languageOption === language);
    });
  }

  languageToggle.addEventListener('click', function () {
    I18N.setLanguage(I18N.getLanguage() === 'en' ? 'zh' : 'en');
  });
  document.addEventListener('languagechange', updateLanguageToggle);
  updateLanguageToggle();
})();
