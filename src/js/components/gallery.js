import { Spinner } from 'spin.js';

import { renderPaginationBar } from './pagination-bar';
import { makeMarkupGallery, makeMarkupMovie } from '../service/gallery-markup';
import {
  getPopularMovies,
  getMoviesByKeyword,
  getMoviesByID,
} from '../service/gallery-requests';

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

// vars
export let firstTime = true;
const ERR_CLASS = 'hidden-err';
export const SESSION_STORAGE_USER_KEYWORD_KEY = 'user-search-keyword';

// refs
const form = document.querySelector('.hero-form');
const gallery = document.querySelector('.gallery__list');
const movieModal = document.querySelector('.filmcard-modal');
const modalBackdrop = document.querySelector('.filmcard-modal-backdrop');
const errorBlockRef = document.querySelector('.hero-form__text');
const inputSearchMovie = document.querySelector('.hero-form__input');

// event Listener
document.addEventListener('DOMContentLoaded', firstRenderPopularMovies(1));

inputSearchMovie?.addEventListener('input', onFormInput);
gallery.addEventListener('click', onMovieClick);



// init
const spinner = new Spinner(optsForSpinner).spin(gallery);

// functions
export function firstRenderPopularMovies(page) {
  getPopularMovies(page).then(r => {
    makeMarkupGallery(r.results).then(r => {
      gallery.innerHTML = r;
    });
    renderPaginationBar(r.total_pages, page);
  });
}

export function renderMoviesByKeyword(keyword, page) {
  sessionStorage.setItem(SESSION_STORAGE_USER_KEYWORD_KEY, keyword);
  getMoviesByKeyword(keyword, page).then(r => {
    makeMarkupGallery(r.results).then(r => (gallery.innerHTML = r));
    renderPaginationBar(r.total_pages, page);
  });
}

function onFormInput(e) {
  const keyword = e.target.value.trim();
  errorBlockRef.classList.add(ERR_CLASS);

  if (!keyword) {
    firstRenderPopularMovies(1);
    // errorBlockRef.classList.remove(ERR_CLASS);
    return;
  }

  const spinner = new Spinner(optsForSpinner).spin(gallery);

  renderMoviesByKeyword(keyword, 1);

  firstTime = false;
}

function onMovieClick(e) {
  e.preventDefault();

  if (!e.target.parentElement.classList.contains('card__link')) {
    return;
  }

  const movieId = e.target.parentElement.dataset.id;

  getMoviesByID(movieId).then(r => {
    movieModal.innerHTML = makeMarkupMovie(r);
    modalBackdrop.classList.remove('is-hidden');
  });
}
