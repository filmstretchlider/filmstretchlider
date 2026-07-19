(() => {
  const header = document.querySelector('[data-site-header]');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav');
  const modal = document.querySelector('.whatsapp-modal');
  const dialog = modal?.querySelector('[role="dialog"]');
  const productText = modal?.querySelector('[data-modal-product]');
  let activeProduct = 'consulta general';
  let previousFocus = null;

  function closeMenu() {
    if (!menuButton || !menu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  }

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menu?.classList.toggle('is-open', !open);
  });
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  function focusables() {
    return [...(dialog?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') || [])];
  }

  function openModal(product) {
    if (!modal || !dialog) return;
    activeProduct = product || 'consulta general';
    previousFocus = document.activeElement;
    if (productText) productText.textContent = `Consulta: ${activeProduct}`;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    [header, document.querySelector('main'), document.querySelector('.site-footer')].forEach((node) => {
      if (node) node.inert = true;
    });
    requestAnimationFrame(() => focusables()[0]?.focus());
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    [header, document.querySelector('main'), document.querySelector('.site-footer')].forEach((node) => {
      if (node) node.inert = false;
    });
    previousFocus?.focus();
  }

  document.querySelectorAll('.js-open-whatsapp').forEach((button) => button.addEventListener('click', (event) => {
    event.preventDefault();
    openModal(button.dataset.product);
  }));
  modal?.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal));
  modal?.querySelectorAll('[data-whatsapp]').forEach((link) => link.addEventListener('click', () => {
    const message = `Hola, quiero consultar por ${activeProduct}. Sucursal ${link.dataset.branch}.`;
    link.href = `https://wa.me/${link.dataset.phone}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      closeModal();
      return;
    }
    if (event.key !== 'Tab' || !modal || modal.hidden) return;
    const items = focusables();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
