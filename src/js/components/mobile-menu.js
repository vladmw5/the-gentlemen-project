const btnOpen = document.querySelector('[data-open]');
const mobileModal = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[data-close]');

closeBtn.addEventListener('click', toggleMobileMenu);
btnOpen.addEventListener('click', toggleMobileMenu);


function toggleMobileMenu() {
  mobileModal.classList.toggle('is-open');
}
