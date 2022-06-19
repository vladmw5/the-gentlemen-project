const backdropSign = document.querySelector('.backdrop-sign');
const backdropLog = document.querySelector('.backdrop-log');
const closeModalBtnSign = document.querySelector('.modal-button-sign');
const closeModalBtnLog = document.querySelector('.modal-button-log');
const signUpBtn = document.querySelector('.sign-up-js');
const logInBtn = document.querySelector('.log-in-js');
const registrationForm = document.querySelector('.registration-js');
const authorizationForm = document.querySelector('.authorization-js');
const logOutItem = document.querySelector('.nav-list__item--exit');
const libraryItem = document.querySelector('.nav-list__item--library');

export { backdropLog, backdropSign, signUpBtn, logInBtn, logOutItem, libraryItem};


//Клік по кнопці SIGN UP і відкриття модального вікна з формою реєстрації

signUpBtn.addEventListener('click', onSignUpClick);

function onSignUpClick() {
    backdropSign.classList.remove('is-bck-hidden');
};

//Клік по кнопці LOG IN відкриття модального вікна з формою авторизації

logInBtn.addEventListener('click', onLogInClick);

function onLogInClick() {
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


