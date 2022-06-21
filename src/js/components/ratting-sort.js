import { onSortClick, onResetSortAndFilterClick } from './gallery';
import { resetBtn } from './filter-menu';
const ratingBtn = document.querySelector('.rating');

document.addEventListener('homePageLoaded', () => {
  ratingBtn.addEventListener('click', addClassOpen);

  resetBtn.addEventListener('click', () => {
    resetBtn.setAttribute('disabled', 'disabled');
    ratingBtn.classList.remove('rating-active');
    onResetSortAndFilterClick();
  });

  function addClassOpen(e) {
    resetBtn.removeAttribute('disabled');

    ratingBtn.classList.toggle('rating-active');

    if (ratingBtn.dataset.rating === 'false') {
      ratingBtn.dataset.rating = 'true';
    } else {
      ratingBtn.dataset.rating = 'false';
    }

    onSortClick(e);
  }
});
