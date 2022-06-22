import { getMoviesByGenres } from './gallery-requests';
import { onGenreClick } from '../components/gallery';
import { refs } from '../utils/refs';

const { filterBtn, listBtnMenu } = refs;

document.addEventListener('homePageLoaded', () => {
  filterBtn.addEventListener('click', getMarkupGenres);
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
