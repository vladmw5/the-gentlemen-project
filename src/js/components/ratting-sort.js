import { onSortClick, onResetSortAndFilterClick } from './gallery';
import { refs } from '../utils/refs';

const { sortBtn, resetBtn } = refs;

document.addEventListener('homePageLoaded', () => {
  sortBtn.addEventListener('click', addClassOpen);

  resetBtn.addEventListener('click', () => {
    resetBtn.setAttribute('disabled', 'disabled');
    sortBtn.classList.remove('rating-active');
    onResetSortAndFilterClick();
  });

  function addClassOpen(e) {
    resetBtn.removeAttribute('disabled');

    sortBtn.classList.toggle('rating-active');

    if (sortBtn.dataset.rating === 'false') {
      sortBtn.dataset.rating = 'true';
    } else {
      sortBtn.dataset.rating = 'false';
    }

    onSortClick(e);
  }
});
