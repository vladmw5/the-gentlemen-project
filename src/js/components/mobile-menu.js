import { refs } from '../utils/refs';

const { btnOpen, mobileModal, closeBtn, bodyEl, backdrop } = refs;

closeBtn.addEventListener('click', toggleMobileMenu);
btnOpen.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  mobileModal.classList.toggle('is-open');
  backdrop.classList.toggle('backdrop-mobile');
  bodyEl.classList.toggle('body-mobile-window');
}
