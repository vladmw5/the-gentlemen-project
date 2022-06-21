import { refs } from '../utils/refs';

const {
  backdropSign,
  backdropLog,
  closeModalBtnSign,
  closeModalBtnLog,
  signUpBtn,
  logInBtn,
  logOutItem,
  libraryItem,
} = refs;

export {
  backdropLog,
  backdropSign,
  signUpBtn,
  logInBtn,
  logOutItem,
  libraryItem,
};

//Клік по кнопці SIGN UP і відкриття модального вікна з формою реєстрації

signUpBtn.addEventListener('click', onSignUpClick);

function onSignUpClick() {
  window.addEventListener('keydown', onEskKeyPress);
  backdropSign.classList.remove('is-bck-hidden');
}

//Клік по кнопці LOG IN відкриття модального вікна з формою авторизації

logInBtn.addEventListener('click', onLogInClick);

function onLogInClick() {
  window.addEventListener('keydown', onEskKeyPress);
  backdropLog.classList.remove('is-bck-hidden');
}

//Закриття модального вікна по кнопці

closeModalBtnSign.addEventListener('click', onCloseModalBtnSign);

function onCloseModalBtnSign() {
  window.removeEventListener('keydown', onEskKeyPress);
  backdropSign.classList.add('is-bck-hidden');
}

closeModalBtnLog.addEventListener('click', onCloseModalBtnLog);

function onCloseModalBtnLog() {
  window.removeEventListener('keydown', onEskKeyPress);
  backdropLog.classList.add('is-bck-hidden');
}

//Закриття модального вікна кліком по бекдропу та натиском по кнопці ескейп

backdropSign.addEventListener('click', onBackdropSignClick);

function onBackdropSignClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModalBtnSign();
  }
}

backdropLog.addEventListener('click', onBackdropLogClick);

function onBackdropLogClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModalBtnLog();
  }
}

function onEskKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';

  if (e.code === ESC_KEY_CODE) {
    onCloseModalBtnSign();
    onCloseModalBtnLog();
  }
}
