import { Spinner } from 'spin.js';

import { makeMarkupGallery } from '../service/markup';
import { getPopularMovies, getMoviesByKeyword } from '../service/requests';

const optsForSpinner = {
  lines: 8, // The number of lines to draw
  length: 50, // The length of each line
  width: 26, // The line thickness
  radius: 63, // The radius of the inner circle
  scale: 1.05, // Scales overall size of the spinner
  corners: 0.5, // Corner roundness (0..1)
  speed: 1.9, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-default', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000000', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

const gallery = document.querySelector('.gallery__list');
const form = document.querySelector('.hero-form');

form / addEventListener('submit', onFormSubmit);

const spinner = new Spinner(optsForSpinner).spin(gallery);

getPopularMovies(1).then(r => {
  makeMarkupGallery(r).then(r => (gallery.innerHTML = r));
});

function onFormSubmit(e) {
  e.preventDefault();

  const keyword = e.target.elements.text.value.trim();

  if (!keyword) {
    return;
  }

  const spinner = new Spinner(opts).spin(gallery);

  getMoviesByKeyword(keyword, 1).then(r => {
    makeMarkupGallery(r).then(r => (gallery.innerHTML = r));
  });

  e.target.reset();
}
