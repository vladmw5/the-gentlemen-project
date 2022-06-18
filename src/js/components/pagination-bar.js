import markupGenerator from '../service/pagination-bar-markup';

const BAR_HIDDEN_CLASS = 'pagination-bar__element--hidden';

const paginationWrapperRef = document.querySelector('.pagination-bar');
const paginationBarRef = document.querySelector('.pagination-bar__list');
const leftArrowRef = document.querySelector('.pagination-bar__left');
const rightArrowRef = document.querySelector('.pagination-bar__right');
let currentPage = 1;

paginationWrapperRef.addEventListener('click', onPaginationBarClick);

function onPaginationBarClick(event) {
  console.log(event.target);
}

export function renderPaginationBar(totalPages, currentPage) {
  let toInsert = '';
  let pageBefore = currentPage - 2;
  let pageAfter = currentPage + 2;

  //Если текущая страница больше первой, то должна быть отрисована кнопка назад
  if (currentPage > 1) {
    console.log('here');
    leftArrowRef.classList.remove(BAR_HIDDEN_CLASS);
  }

  //Отрисовка числа 1 и ... после неё, если надо
  if (currentPage > 2) {
    toInsert += markupGenerator.number(1);
    if (currentPage > 4) {
      toInsert += markupGenerator.dots();
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
      toInsert += markupGenerator.dots();
    }
    toInsert += markupGenerator.number(totalPages);
  }

  //Если текущая страница меньше первой, то должна быть отрисована кнопка вперёд
  if (currentPage < totalPages) {
    console.log('there');
    rightArrowRef.classList.remove(BAR_HIDDEN_CLASS);
  }

  paginationBarRef.innerHTML = toInsert;
}
