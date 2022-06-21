import { resetBtn } from './filter-menu';
const ratingBtn = document.querySelector('.rating');

console.log(ratingBtn);

document.addEventListener('homePageLoaded', () => {
  ratingBtn.addEventListener('click', addClassOpen);
  resetBtn.addEventListener('click', () => {
    resetBtn.setAttribute('disabled', 'disabled');
    ratingBtn.classList.remove('rating-active');
  });

  function addClassOpen() {
    resetBtn.removeAttribute('disabled');
    ratingBtn.classList.toggle('rating-active');
  }
});
