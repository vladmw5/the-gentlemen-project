const filterBtn = document.querySelector('.filter');
const listFilter = document.querySelector('.menu-filter-list');
export const resetBtn = document.querySelector('.reset');

document.addEventListener('homePageLoader', () => {
  filterBtn.addEventListener('click', addClassOpen);
  resetBtn.addEventListener('click', () => {
    console.log('ok');
    resetBtn.setAttribute('disabled', 'disabled');
    listFilter.classList.toggle('is-open-filter');
  });

  function addClassOpen() {
    resetBtn.removeAttribute('disabled');
    listFilter.classList.toggle('is-open-filter');
  }
});
