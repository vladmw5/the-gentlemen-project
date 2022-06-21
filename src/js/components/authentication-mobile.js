import { backdrop, mobileModal } from './mobile-menu'

const backdropSign = document.querySelector('.backdrop-sign');
const backdropLog = document.querySelector('.backdrop-log');

const closeModalBtnSign = document.querySelector('.modal-button-sign');
const closeModalBtnLog = document.querySelector('.modal-button-log');

const libraryItemMobile = document.querySelector('.library-mobile');
const logOutItemMobile = document.querySelector('.log-out-mobile');
const logInBtnMobile = document.querySelector('.log-in-mobile');
const signUpBtnMobile = document.querySelector('.sign-up-mobile');

export { signUpBtnMobile, logInBtnMobile, logOutItemMobile, libraryItemMobile};


//Клік по кнопці SIGN UP і відкриття модального вікна з формою реєстрації

signUpBtnMobile.addEventListener('click', onSignUpClick);

function onSignUpClick() {
    removeBackdropMobile();
    removeMobileModal();
    backdropSign.classList.remove('is-bck-hidden');
};

//Клік по кнопці LOG IN відкриття модального вікна з формою авторизації

logInBtnMobile.addEventListener('click', onLogInClick);

function onLogInClick() {
    removeBackdropMobile();
    removeMobileModal();
    backdropLog.classList.remove('is-bck-hidden')
}

//Закриття модального вікна

closeModalBtnSign.addEventListener('click', onCloseModalBtnSign);

function onCloseModalBtnSign() {
    backdropSign.classList.add('is-bck-hidden');  
};

closeModalBtnLog.addEventListener('click', onCloseModalBtnLog);

function onCloseModalBtnLog() {
    backdropLog.classList.add('is-bck-hidden')
};

// Функції дублюючого коду

function removeBackdropMobile() {
    backdrop.classList.remove('backdrop-mobile');
};

function removeMobileModal() {
    mobileModal.classList.remove('is-open');
};