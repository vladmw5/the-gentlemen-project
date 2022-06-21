const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modalFooter: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', openFooterModal);
refs.closeModalBtn.addEventListener('click', closeFooterModal);

function closeFooterModal() {
  window.removeEventListener('keydown', closeFooterModalEscape);
  refs.modalFooter.removeEventListener('click', closeFooterModalClickBackdrop);
  toggleModal();
}

function openFooterModal() {
  window.addEventListener('keydown', closeFooterModalEscape, { once: true });
  toggleModal();
  refs.modalFooter.addEventListener('click', closeFooterModalClickBackdrop, {
    once: true,
  });
}

function toggleModal() {
  document.body.classList.toggle('modal-open');
  refs.modalFooter.classList.toggle('backdrop__is-hidden');
}

function closeFooterModalEscape(event) {
  if (event.code === 'Escape') {
    toggleModal();
    window.removeEventListener('keydown', closeFooterModalEscape);
    refs.modalFooter.removeEventListener(
      'click',
      closeFooterModalClickBackdrop
    );
  }
}

function closeFooterModalClickBackdrop(event) {
  if (event.target === event.currentTarget) {
    window.removeEventListener('keydown', closeFooterModalEscape);
    refs.modalFooter.removeEventListener(
      'click',
      closeFooterModalClickBackdrop
    );
    toggleModal();
  }
}

// window.addEventListener('keydown', closeMovieModalByEsc, { once: true });
// modalBackdrop.addEventListener('click', closeMovieModalByClickBackdrop);

// function closeMovieModalByEsc(e) {
//   if (e.code === 'Escape') {
//     toggleModal();
//   }
// }

// function closeMovieModalByClickBackdrop(e) {
//   if (e.target === e.currentTarget) {
//     toggleModal();
//     modalBackdrop.removeEventListener('click', closeMovieModalByClickBackdrop);
//   }
// }
