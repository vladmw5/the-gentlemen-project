import { refs } from '../utils/refs';

const {
  backdropSign,
  backdropLog,
  closeModalBtnSign,
  closeModalBtnLog,
  libraryItemMobile,
  logOutItemMobile,
  logInBtnMobile,
  signUpBtnMobile,
  backdrop,
  mobileModal,
} = refs;

export { signUpBtnMobile, logInBtnMobile, logOutItemMobile, libraryItemMobile };

//Клік по кнопці SIGN UP і відкриття модального вікна з формою реєстрації

signUpBtnMobile.addEventListener('click', onSignUpClick);

function onSignUpClick() {
  removeBackdropMobile();
  removeMobileModal();
  backdropSign.classList.remove('is-bck-hidden');
}

//Клік по кнопці LOG IN відкриття модального вікна з формою авторизації

logInBtnMobile.addEventListener('click', onLogInClick);

function onLogInClick() {
  removeBackdropMobile();
  removeMobileModal();
  backdropLog.classList.remove('is-bck-hidden');
}

//Закриття модального вікна

closeModalBtnSign.addEventListener('click', onCloseModalBtnSign);

function onCloseModalBtnSign() {
  backdropSign.classList.add('is-bck-hidden');
}

closeModalBtnLog.addEventListener('click', onCloseModalBtnLog);

function onCloseModalBtnLog() {
  backdropLog.classList.add('is-bck-hidden');
}

// Функції дублюючого коду

function removeBackdropMobile() {
  backdrop.classList.remove('backdrop-mobile');
}

function removeMobileModal() {
  mobileModal.classList.remove('is-open');
  document.body.classList.remove('body-mobile-window');
}
