import { getMoviesByGenres } from './gallery-requests';

const filterEl = document.querySelector('.filter');
const listBtnMenu = document.querySelector('[data-list-filter]');

document.addEventListener('homePageLoaded', () => {
  filterEl.addEventListener('click', getMarkupGenres);
});

async function getMarkupGenres() {
  const add = await getMoviesByGenres();

  const array = add.data.genres
    .map(
      ({ name, id }) => /*html*/ `
      <li class="menu-filter-list_item">
        <button type="button" class="menu-filter-list__btn" data-id="${id}">${name}</button>
      </li>`
    )
    .join('');

  listBtnMenu.innerHTML = array;

  document.querySelector('[data-list-filter]',renderMoviesByGenre);

}
