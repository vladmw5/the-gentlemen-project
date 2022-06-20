import markupGenerator from '../service/pagination-bar-markup';
import {
  firstTime,
  firstRenderPopularMovies,
  renderMoviesByKeyword,
  SESSION_STORAGE_USER_KEYWORD_KEY,
} from './gallery';

const BAR_HIDDEN_CLASS = 'pagination-bar__element--hidden';

const paginationBarRef = document.querySelector('.pagination-bar__list');
const leftArrowRef = document.querySelector('.pagination-bar__left');
const rightArrowRef = document.querySelector('.pagination-bar__right');
let currentPage = 1;

document.addEventListener('DOMContentLoaded', () => {
  currentPage = 1;
});
paginationBarRef.addEventListener('click', onPaginationBarClick);
leftArrowRef.addEventListener('click', onLeftArrowClick);
rightArrowRef.addEventListener('click', onRightArrowClick);

function onLeftArrowClick(event) {
  if (firstTime) {
    firstRenderPopularMovies(--currentPage);
  } else {
    renderMoviesByKeyword(
      sessionStorage.getItem(SESSION_STORAGE_USER_KEYWORD_KEY),
      --currentPage
    );
  }
}

function onRightArrowClick(event) {
  if (firstTime) {
    firstRenderPopularMovies(++currentPage);
  } else {
    renderMoviesByKeyword(
      sessionStorage.getItem(SESSION_STORAGE_USER_KEYWORD_KEY),
      ++currentPage
    );
  }
}

function onPaginationBarClick(event) {
  if (event.target.nodeName !== 'LI') return;

  if (firstTime) {
    currentPage = Number(event.target.dataset.page);
    firstRenderPopularMovies(currentPage);
  } else {
    currentPage = Number(event.target.dataset.page);
    renderMoviesByKeyword(
      sessionStorage.getItem(SESSION_STORAGE_USER_KEYWORD_KEY),
      currentPage
    );
  }
}

export function renderPaginationBar(totalPages, currentPage) {
  let toInsert = '';
  let pageBefore = currentPage - 2;
  let pageAfter = currentPage + 2;

  leftArrowRef.classList.add(BAR_HIDDEN_CLASS);
  rightArrowRef.classList.add(BAR_HIDDEN_CLASS);

  //Если текущая страница больше первой, то должна быть отрисована кнопка назад
  if (currentPage > 1) {
    leftArrowRef.classList.remove(BAR_HIDDEN_CLASS);
  }

  //Отрисовка числа 1 и ... после неё, если надо
  if (currentPage > 2) {
    toInsert += markupGenerator.number(1, false, true);
    if (currentPage > 4) {
      toInsert += markupGenerator.dots(true);
    }
  }

  for (let i = pageBefore; i <= pageAfter; i++) {
    if (i > totalPages) {
      continue;
    }
    if (i < 0) {
      continue;
    }
    if (i === 0) {
      i += 1;
    }
    //Insane hardcoding
    if (i === 1) {
      if (currentPage === 3) {
        i++;
      }
    }
    //Insane hardcoding
    if (i === totalPages) {
      if (currentPage === totalPages - 2) {
        continue;
      }
    }

    if (i != currentPage) {
      toInsert += markupGenerator.number(i);
    } else {
      toInsert += markupGenerator.number(i, true);
    }
  }

  //Отрисовка числа последней страницы и ... до, если надо
  if (currentPage < totalPages - 1) {
    if (currentPage < totalPages - 3) {
      toInsert += markupGenerator.dots(true);
    }
    toInsert += markupGenerator.number(totalPages, false, true);
  }

  //Если текущая страница меньше первой, то должна быть отрисована кнопка вперёд
  if (currentPage < totalPages) {
    rightArrowRef.classList.remove(BAR_HIDDEN_CLASS);
  }

  paginationBarRef.innerHTML = toInsert;
}
