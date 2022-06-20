const navUlEl = document.querySelector('.nav-list-js');
const homeEl = document.querySelector('.header-home-js');
const libraryEl = document.querySelector('.header-library-js');


document.addEventListener('homePageLoaded', () => {
  classListBurger(homeEl, libraryEl);
});
document.addEventListener('libPageLoaded', () => {
  classListBurger(libraryEl, homeEl);
});

function classListBurger(add, remove) {
  add.classList.add('nav__link--after');
  remove.classList.remove('nav__link--after');
}