// import { markup } from '../service/pagination-bar-markup';
import {
  firstTime,
  firstRenderPopularMovies,
  renderMoviesByKeyword,
  SESSION_STORAGE_USER_KEYWORD_KEY,
} from './gallery';
import debounce from 'lodash.debounce';

const markup = {
  leftArrow() {
    return /*html*/ `<div
      class="pagination-bar__element pagination-bar__control pagination-bar__left"
      data-type="left"
    >
      <svg class="arrow-icon arrow-left-icon">
        <use href="./images/symbol-defs.svg#icon-arrow-left2"></use>
      </svg>
    </div>`;
  },
  number(n, isActive = false, hideOnMobile = false) {
    return /*html*/ `<li
      class="pagination-bar__element pagination-bar__number ${
        isActive ? 'pagination-bar__element--active' : ''
      } ${hideOnMobile ? 'pagination-bar__element--mobile-hidden' : ''}"
      data-page="${n}"
      data-type="number"
    >
      <span class='no-click'>${n}</span>
    </li>`;
  },
  dots(hideOnMobile = false) {
    return /*html*/ `<li class="pagination-bar__element pagination-bar__dots ${
      hideOnMobile ? 'pagination-bar__element--mobile-hidden' : ''
    }" data-type="dots"> 
      <span>...</span>
    </li>`;
  },
  rightArrow() {
    return /*html*/ `<div
      class="pagination-bar__element pagination-bar__control pagination-bar__right"
      data-type="right"
    >
      <svg class="arrow-icon arrow-right-icon">
        <use href="./images/symbol-defs.svg#icon-arrow-right2"></use>
      </svg>
    </div>`;
  },
};
const BAR_HIDDEN_CLASS = 'pagination-bar__element--hidden';

import { refs } from '../utils/refs';

const {
  leftArrowRef,
  rightArrowRef,
  inputFormRef,
  sortBtnRef,
  filterListRef,
  paginationBarRef,
} = refs;

inputFormRef?.addEventListener('input', debounce(resetCounter, 350));
sortBtnRef?.addEventListener('click', resetCounter);
filterListRef?.addEventListener('click', onFilterListClickResetCounter);

let currentPage = 1;

document.addEventListener('DOMContentLoaded', () => {
  currentPage = 1;
});
paginationBarRef.addEventListener('click', onPaginationBarClick);
leftArrowRef.addEventListener('click', onLeftArrowClick);
rightArrowRef.addEventListener('click', onRightArrowClick);

function onLeftArrowClick(event) {
  document.querySelector('.swiper-wrapper').innerHTML = '';
  if (firstTime) {
    firstRenderPopularMovies(
      --currentPage,
      0,
      document.querySelector('button.rating').dataset.rating === 'false'
        ? false
        : true
    );
  } else {
    renderMoviesByKeyword(
      sessionStorage.getItem(SESSION_STORAGE_USER_KEYWORD_KEY),
      --currentPage
    );
  }
  scrollToTop(275);
}

function onRightArrowClick(event) {
  document.querySelector('.swiper-wrapper').innerHTML = '';
  if (firstTime) {
    firstRenderPopularMovies(
      ++currentPage,
      0,
      document.querySelector('button.rating').dataset.rating === 'false'
        ? false
        : true
    );
  } else {
    renderMoviesByKeyword(
      sessionStorage.getItem(SESSION_STORAGE_USER_KEYWORD_KEY),
      ++currentPage
    );
  }
  scrollToTop(275);
}

function onPaginationBarClick(event) {
  if (event.target.nodeName !== 'LI') return;
  document.querySelector('.swiper-wrapper').innerHTML = '';
  if (firstTime) {
    currentPage = Number(event.target.dataset.page);
    firstRenderPopularMovies(
      currentPage,
      0,
      document.querySelector('button.rating').dataset.rating === 'false'
        ? false
        : true
    );
  } else {
    currentPage = Number(event.target.dataset.page);
    renderMoviesByKeyword(
      sessionStorage.getItem(SESSION_STORAGE_USER_KEYWORD_KEY),
      currentPage
    );
  }
  scrollToTop(275);
}

export function renderPaginationBar(totalPages, cPage) {
  let toInsert = '';
  let pageBefore = cPage - 2;
  let pageAfter = cPage + 2;

  if (totalPages >= 500) totalPages = 500;

  leftArrowRef.classList.add(BAR_HIDDEN_CLASS);
  rightArrowRef.classList.add(BAR_HIDDEN_CLASS);

  //Если текущая страница больше первой, то должна быть отрисована кнопка назад
  if (cPage > 1) {
    leftArrowRef.classList.remove(BAR_HIDDEN_CLASS);
  }

  //Отрисовка числа 1 и ... после неё, если надо
  if (cPage > 2) {
    toInsert += markup.number(1, false, true);
    if (cPage > 4) {
      toInsert += markup.dots(true);
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
      if (cPage === 3) {
        i++;
      }
    }
    //Insane hardcoding
    if (i === totalPages) {
      if (cPage === totalPages - 2) {
        continue;
      }
    }

    if (i != cPage) {
      toInsert += markup.number(i);
    } else {
      toInsert += markup.number(i, true);
    }
  }

  //Отрисовка числа последней страницы и ... до, если надо
  if (cPage < totalPages - 1) {
    if (cPage < totalPages - 3) {
      toInsert += markup.dots(true);
    }
    toInsert += markup.number(totalPages, false, true);
  }

  //Если текущая страница меньше первой, то должна быть отрисована кнопка вперёд
  if (cPage < totalPages) {
    rightArrowRef.classList.remove(BAR_HIDDEN_CLASS);
  }

  paginationBarRef.innerHTML = toInsert;
}

function resetCounter() {
  currentPage = 1;
}

function onFilterListClickResetCounter(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  resetCounter();
}

export { currentPage };
function scrollToTop(val = 0) {
  document.body.scrollTop = val; // For Safari
  document.documentElement.scrollTop = val; // For Chrome, Firefox, IE and Opera
}
