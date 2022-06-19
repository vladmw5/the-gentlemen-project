const btnOpen = document.querySelector('[data-open]');
const mobileModal = document.querySelector('[data-modal-burger]');
const closeBtn = document.querySelector('[data-close]');
const bodyEl = document.querySelector('body');
const backdrop = document.querySelector('.mobile-menu-window');

closeBtn.addEventListener('click', toggleMobileMenu);
btnOpen.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  mobileModal.classList.toggle('is-open');
  backdrop.classList.toggle('backdrop-mobile');
  bodyEl.classList.toggle('body-mobile-window');
}

export { backdrop, mobileModal };