import { resetBtn } from "./filter-menu";

const formEl = document.querySelector('.ratting-form');
const rattingBtn = document.querySelector('.ratting');

document.addEventListener('homePageLoader', () => {
  rattingBtn.addEventListener('click', addClassOpen);
  resetBtn.addEventListener('click', () => {
    console.log('ok');
    resetBtn.setAttribute('disabled', 'disabled');
    formEl.classList.toggle('is-open-ratting');
  });

  function addClassOpen() {
    resetBtn.removeAttribute('disabled');
    formEl.classList.toggle('is-open-ratting');
  }
});
