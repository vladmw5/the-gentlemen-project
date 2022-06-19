//-- Реєстрація та авторизація
import { createUser, signInUser, exitUser } from './service'

export const registration = document.querySelector('#registration');
export const authorization = document.querySelector('#authorization');
const exitBtn = document.querySelector('#exit-btn');
const exitBtnMobile = document.querySelector('#exit-btn-mobile');


registration.addEventListener('submit', onSubmitRegistration);
authorization.addEventListener('submit', onSubmitAuthorization);
exitBtn.addEventListener('click', exitUser);
exitBtnMobile.addEventListener('click', exitUser);

function onSubmitRegistration(e) {
    e.preventDefault();

    const { email, password } = e.currentTarget.elements;
    if (email.value === '' || password.value === '') {
       return alert('Всі поля повинні бути заповнені!')
    }
    createUser(email.value, password.value);
    registration.reset();
};
function onSubmitAuthorization(e) {
    e.preventDefault();
     
    const { email, password } = e.currentTarget.elements;
    if (email.value === '' || password.value === '') {
       return alert('Всі поля повинні бути заповнені!')
    }
    signInUser(email.value, password.value);
    authorization.reset();
};