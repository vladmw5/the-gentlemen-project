import { Spinner } from 'spin.js';

import { optsForSpinner } from '../service/spinner-options';
import { renderPaginationBar } from './pagination-bar';
import { makeMarkupGallery, makeMarkupMovie } from '../service/gallery-markup';
import {
  getPopularMovies,
  getMoviesByKeyword,
  getMoviesByID,
} from '../service/gallery-requests';

// vars
export let firstTime = true;
const ERR_CLASS = 'hidden-err';
export const SESSION_STORAGE_USER_KEYWORD_KEY = 'user-search-keyword';

// refs
const gallery = document.querySelector('.gallery__list');
const movieModal = document.querySelector('.filmcard-modal');
const modalBackdrop = document.querySelector('.filmcard-modal-backdrop');
const notifycation = document.querySelector('.hero-form__text');
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

function renderMoviesByID(movieId) {
  getMoviesByID(movieId).then(r => {
    movieModal.innerHTML = makeMarkupMovie(r);
  });
}

function onFormInput(e) {
  const keyword = e.target.value.trim();
  notifycation.classList.add(ERR_CLASS);

  if (!keyword) {
    firstRenderPopularMovies(1);
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

  renderMoviesByID(movieId);
  toggleModal();

  // const modalCloseBtn = document.querySelector('.filmcard-modal__close-btn');
  // modalCloseBtn.addEventListener('click', toggleModal(), { once: true });
}

function toggleModal() {
  document.body.classList.toggle('modal-open');
  modalBackdrop.classList.toggle('is-hidden');
}
