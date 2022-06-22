import { refs } from '../utils/refs';

const { filterBtn, genreBtns, resetBtn } = refs;

document.addEventListener('homePageLoaded', () => {
  filterBtn.addEventListener('click', addClassOpen);
  resetBtn.addEventListener('click', () => {
    genreBtns.classList.remove('is-open-filter');
    resetBtn.setAttribute('disabled', 'disabled');
  });

  function addClassOpen() {
    resetBtn.removeAttribute('disabled');
    genreBtns.classList.toggle('is-open-filter');
  }
});
