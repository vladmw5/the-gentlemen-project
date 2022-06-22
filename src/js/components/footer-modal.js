import { refs } from '../utils/refs';

const { openModalBtn, closeModalBtn, modalFooter } = refs;

openModalBtn.addEventListener('click', openFooterModal);
closeModalBtn.addEventListener('click', closeFooterModal);

function closeFooterModal() {
  window.removeEventListener('keydown', closeFooterModalEscape);
  modalFooter.removeEventListener('click', closeFooterModalClickBackdrop);
  toggleModal();
}

function openFooterModal() {
  window.addEventListener('keydown', closeFooterModalEscape, { once: true });
  toggleModal();
  modalFooter.addEventListener('click', closeFooterModalClickBackdrop, {
    once: true,
  });
}

function toggleModal() {
  document.body.classList.toggle('modal-open');
  modalFooter.classList.toggle('backdrop__is-hidden');
}

function closeFooterModalEscape(event) {
  if (event.code === 'Escape') {
    toggleModal();
    window.removeEventListener('keydown', closeFooterModalEscape);
    modalFooter.removeEventListener('click', closeFooterModalClickBackdrop);
  }
}

function closeFooterModalClickBackdrop(event) {
  if (event.target === event.currentTarget) {
    window.removeEventListener('keydown', closeFooterModalEscape);
    modalFooter.removeEventListener('click', closeFooterModalClickBackdrop);
    toggleModal();
  }
}
