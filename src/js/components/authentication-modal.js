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
    keydownWindow();
    backdropSign.classList.remove('is-bck-hidden');
};

//Клік по кнопці LOG IN відкриття модального вікна з формою авторизації

logInBtn.addEventListener('click', onLogInClick);

function onLogInClick() {
   keydownWindow();
   backdropLog.classList.remove('is-bck-hidden')
}

//Закриття модального вікна по кнопці

closeModalBtnSign.addEventListener('click', onCloseModalBtnSign);

function onCloseModalBtnSign() {
    removeKeydownWindowListener();
    backdropSign.classList.add('is-bck-hidden');  
};


closeModalBtnLog.addEventListener('click', onCloseModalBtnLog);

function onCloseModalBtnLog() {
    removeKeydownWindowListener();
    backdropLog.classList.add('is-bck-hidden');
};


//Закриття модального вікна кліком по бекдропу 

backdropSign.addEventListener('click', onBackdropClick);


backdropLog.addEventListener('click', onBackdropClick);

function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
        onCloseModalBtnSign() || onCloseModalBtnLog();
    };
};


//Закриття модального вікна натиском по кнопці Escape

function onEskKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';
    if (e.code === ESC_KEY_CODE) {
        onCloseModalBtnSign();
        onCloseModalBtnLog();
    };
};

//Функції дублюючого коду

function keydownWindow() {
    window.addEventListener('keydown', onEskKeyPress);
};

function removeKeydownWindowListener() {
    window.removeEventListener('keydown', onEskKeyPress);
};

