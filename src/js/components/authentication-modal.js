//Закриття модалки авторизації-реєстрації

const refs = {
    backdrop: document.querySelector('.backdrop'),
    closeModalBtn: document.querySelector('.modal-button'),
}



refs.closeModalBtn.addEventListener('click', onCloseModalBtn);

function onCloseModalBtn() {
    refs.backdrop.classList.add('is-bck-hidden');
};