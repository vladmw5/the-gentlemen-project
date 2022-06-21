//-- Реєстрація та авторизація
import { createUser, signInUser, exitUser } from './service';
import { Notify } from 'notiflix';
import { refs } from '../utils/refs';

const { registration, authorization, exitBtn, exitBtnMobile } = refs;

registration.addEventListener('submit', onSubmitRegistration);
authorization.addEventListener('submit', onSubmitAuthorization);
exitBtn.addEventListener('click', exitUser);
exitBtnMobile.addEventListener('click', exitUser);

function onSubmitRegistration(e) {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;
  if (email.value.trim() === '' || password.value === '') {
    return Notify.failure('Всі поля повинні бути заповнені!');
  }
  try {
    createUser(email.value, password.value);
  } catch {}
  registration.reset();
}
function onSubmitAuthorization(e) {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;
  if (email.value.trim() === '' || password.value === '') {
    return Notify.failure('Всі поля повинні бути заповнені!');
  }
  try {
    signInUser(email.value, password.value);
  } catch {}
  authorization.reset();
}
