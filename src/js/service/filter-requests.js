import { getMoviesByGenres } from './gallery-requests';
import { onGenreClick } from '../components/gallery';

const filterEl = document.querySelector('.filter');
const listBtnMenu = document.querySelector('[data-list-filter]');

document.addEventListener('homePageLoaded', () => {
  filterEl.addEventListener('click', getMarkupGenres);
});

async function getMarkupGenres() {
  const add = await getMoviesByGenres();

  const array = add
    .map(
      ({ name, id }) => /*html*/ `
      <li class="menu-filter-list_item">
        <button type="button" class="menu-filter-list__btn" data-id="${id}">${name}</button>
      </li>`
    )
    .join('');

  listBtnMenu.innerHTML = array;

  listBtnMenu.addEventListener('click', onGenreClick);
}
