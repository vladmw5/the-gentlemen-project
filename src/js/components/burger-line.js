const ulNavEl = document.querySelector('.modal-nav-list');
const homeEl = document.querySelector('.link-home-js');
const libraryEl = document.querySelector('.link-library-js');

document.addEventListener('DOMContentLoaded', onCLickListNav);

function onCLickListNav() {
  homeEl.classList.add('nav__link--before');
  if (window.location.pathname === '/the-gentlemen-project/my-library.html') {
    return addLineToListLibrary();
  }
}

function addLineToListLibrary() {
  const liEl = ulNavEl.children;
  for (const i of liEl) {
    if (i.classList.contains('modal-library-js')) {
      libraryEl.classList.add('nav__link--before');
      homeEl.classList.remove('nav__link--before');
    }
  }
}
