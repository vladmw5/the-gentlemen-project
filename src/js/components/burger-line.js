import { refs } from '../utils/refs';

const { homeEl, libraryEl } = refs;

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
