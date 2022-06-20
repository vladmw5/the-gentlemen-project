const ulNavEl = document.querySelector('.modal-nav-list');
const homeEl = document.querySelector('.link-home-js');
const libraryEl = document.querySelector('.link-library-js');


document.addEventListener('homePageLoaded', () => {
  classListBurger(homeEl, libraryEl);
});
document.addEventListener('libPageLoaded', () => {
  classListBurger(libraryEl, homeEl);
});

function classListBurger(add, remove) {
  add.classList.add('nav__link--before');
  remove.classList.remove('nav__link--before');
}
