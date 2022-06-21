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

export { markup };
