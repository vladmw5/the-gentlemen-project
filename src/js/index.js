//-- Реєстрація та авторизація

import { createUser, signInUser } from '../service/index.js'

export const registration = document.querySelector('#registration');
export const authorization = document.querySelector('#authorization');

registration.addEventListener('submit', onSubmitRegistration);
authorization.addEventListener('submit', onSubmitAuthorization);

function onSubmitRegistration(e) {
    e.preventDefault();

    const { email, password } = e.currentTarget.elements;

    createUser(email.value, password.value);

    registration.reset();
};

function onSubmitAuthorization(e) {
    e.preventDefault();

    const { email, password } = e.currentTarget.elements;

    signInUser(email.value, password.value);

    authorization.reset();
};