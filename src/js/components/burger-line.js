import { refs } from '../utils/refs';

const { homeElMenu, libraryElMenu } = refs;
document.addEventListener('homePageLoaded', () => {
  classListBurger(homeElMenu, libraryElMenu);
});
document.addEventListener('libPageLoaded', () => {
  classListBurger(libraryElMenu, homeElMenu);
});

function classListBurger(add, remove) {
  add.classList.add('nav__link--before');
  remove.classList.remove('nav__link--before');
}
