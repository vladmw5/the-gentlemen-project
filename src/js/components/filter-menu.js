const filterBtn = document.querySelector('.filter');
const listFilter = document.querySelector('.menu-filter-list');
export const resetBtn = document.querySelector('.reset');

document.addEventListener('homePageLoaded', () => {
  filterBtn.addEventListener('click', addClassOpen);
  resetBtn.addEventListener('click', () => {
    listFilter.classList.remove('is-open-filter');
    resetBtn.setAttribute('disabled', 'disabled');
    console.log('ok');
  });

  function addClassOpen() {
    resetBtn.removeAttribute('disabled');
    listFilter.classList.toggle('is-open-filter');
  }
});

