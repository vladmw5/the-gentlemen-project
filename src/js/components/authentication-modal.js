const backdrop = document.querySelector('.backdrop');
const closeModalBtn = document.querySelector('.modal-button');
const signUpBtn = document.querySelector('.sign-up-js');
const logInBtn = document.querySelector('.log-in-js');
const registrationForm = document.querySelector('.registration-js');
const authorizationForm = document.querySelector('.authorization-js');
const logOutItem = document.querySelector('.nav-list__item--exit');
const libraryItem = document.querySelector('.nav-list__item--library');

export { backdrop, signUpBtn, logInBtn, logOutItem, libraryItem};


//Клік по кнопці SIGN UP і відкриття модального вікна з формою реєстрації

signUpBtn.addEventListener('click', onSignUpClick);

function onSignUpClick() {
    removeBackdropHidden();
    authorizationForm.classList.add('is-hidden-form');
};

//Клік по кнопці LOG IN відкриття модального вікна з формою авторизації

logInBtn.addEventListener('click', onLogInClick);

function onLogInClick() {
    removeBackdropHidden();
    registrationForm.classList.add('is-hidden-form');
}

//Закриття модального вікна

closeModalBtn.addEventListener('click', onCloseModalBtn);

function onCloseModalBtn() {
    backdrop.classList.add('is-bck-hidden');
    authorizationForm.classList.remove('is-hidden-form');
    registrationForm.classList.remove('is-hidden-form');
};

function removeBackdropHidden() {
     backdrop.classList.remove('is-bck-hidden');
};
