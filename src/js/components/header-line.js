const navUlEl = document.querySelector('.nav-list-js');
const homeEl = document.querySelector('.header-home-js');
const libraryEl = document.querySelector('.header-library-js');

document.addEventListener('DOMContentLoaded', onCLickListNav);

function onCLickListNav() {
  homeEl.classList.add('nav__link--after');
  if (window.location.pathname === '/my-library.html') {
    return addLineToListLibrary();
  }
}

function addLineToListLibrary() {
  const liEl = navUlEl.children;

  for (const i of liEl) {
    if (i.classList.contains('nav-list__library'))
      libraryEl.classList.add('nav__link--after');
    homeEl.classList.remove('nav__link--after');
  }
}
