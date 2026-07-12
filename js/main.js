/* ============================================
   Personal Academic Homepage — Main JS
   ============================================ */

// ── Mobile hamburger ─────────────────────────
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── Publication filter ───────────────────────
function initPubFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.pub-item');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        // data-type can be a space-separated list, e.g. "first journal"
        const types = (item.dataset.type || '').split(' ');
        const match = filter === 'all'
          || types.includes(filter)
          || item.dataset.venue === filter;
        item.style.display = match ? '' : 'none';
      });
    });
  });
}

// ── Show more / collapse news ────────────────
function initShowMore(listId, btnId, visibleCount = 3) {
  const list = document.getElementById(listId);
  const btn  = document.getElementById(btnId);
  if (!list || !btn) return;

  const items = Array.from(list.children);
  let expanded = false;

  function render() {
    items.forEach((item, i) => {
      item.style.display = (expanded || i < visibleCount) ? '' : 'none';
    });
    if (expanded) {
      list.classList.add('expanded');
      btn.textContent = I18N.t('common.showLess');
    } else {
      list.classList.remove('expanded');
      btn.textContent = I18N.t('common.showMore', { count: items.length - visibleCount });
    }
    if (items.length <= visibleCount) btn.style.display = 'none';
  }

  btn.addEventListener('click', () => { expanded = !expanded; render(); });
  document.addEventListener('languagechange', render);
  render();
}

// ── Lightbox for gallery ─────────────────────
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightbox-img');
  const lbClose  = document.getElementById('lightbox-close');
  if (!lightbox) return;

  document.querySelectorAll('.gallery-item[data-src]').forEach(item => {
    item.addEventListener('click', () => {
      lbImg.src = item.dataset.src;
      lightbox.classList.add('open');
    });
  });

  lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
}

// ── Init on DOM ready ────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initPubFilter();
  initShowMore('news-list', 'news-show-more', 3);
  initLightbox();
});
