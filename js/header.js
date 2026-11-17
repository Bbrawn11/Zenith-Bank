(() => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    links.classList.toggle('is-open', open);
  });

  const current = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
  links.querySelectorAll(':scope > li > a').forEach(link => {
    const target = decodeURIComponent((link.getAttribute('href') || '').split('#')[0]);
    if (target && target.toLowerCase() === current.toLowerCase()) {
      link.classList.add('active-nav');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
