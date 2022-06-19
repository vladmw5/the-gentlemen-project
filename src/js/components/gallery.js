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
export const SESSION_STORAGE_USER_KEYWORD_KEY = 'user-search-keyword';

// refs
const gallery = document.querySelector('.gallery__list');
const movieCase = document.querySelector('.filmcard__case');
const modalBackdrop = document.querySelector('.filmcard-modal-backdrop');
const inputSearchMovie = document.querySelector('.hero-form__input');
const modalCloseBtn = document.querySelector('.filmcard-modal__close-btn');

// event Listener
document.addEventListener('DOMContentLoaded', firstRenderPopularMovies(1));

form.addEventListener('submit', onFormSubmit);
gallery.addEventListener('click', onMovieClick);
modalCloseBtn.addEventListener('click', toggleModal);

// init
const spinner = new Spinner(optsForSpinner).spin(gallery);

// functions
export function firstRenderPopularMovies(page) {
  getPopularMovies(page).then(r => {
    makeMarkupGallery(r.results)
      .then(r => {
        gallery.innerHTML = r;
      })
      .catch(console.log);
    renderPaginationBar(r.total_pages, page);
  });
}

export function renderMoviesByKeyword(keyword, page) {
  sessionStorage.setItem(SESSION_STORAGE_USER_KEYWORD_KEY, keyword);
  getMoviesByKeyword(keyword, page).then(r => {
    makeMarkupGallery(r.results)
      .then(r => {
        if (r.length === 0) {
          document.querySelector('.pagination-bar__list').innerHTML = '';
          gallery.innerHTML =
            '<p class="notifycation__text">No results! Sorry =(</p>';
          return;
        }

        gallery.innerHTML = r;
      })
      .catch(console.log);
    renderPaginationBar(r.total_pages, page);
  });
}

function renderMoviesByID(movieId) {
  getMoviesByID(movieId)
    .then(r => {
      movieCase.innerHTML = makeMarkupMovie(r);
      toggleModal();
    })
    .catch(console.log);
}

function onFormInput(e) {
  const keyword = e.target.value.trim();

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
  window.addEventListener('keydown', closeMovieModalByEsc, { once: true });
  modalBackdrop.addEventListener('click', closeMovieModalByClickBackdrop);
}

function closeMovieModalByEsc(e) {
  if (e.code === 'Escape') {
    toggleModal();
  }
}

function closeMovieModalByClickBackdrop(e) {
  if (e.target === e.currentTarget) {
    toggleModal();
    modalBackdrop.removeEventListener('click', closeMovieModalByClickBackdrop);
  }
}

function toggleModal() {
  document.body.classList.toggle('modal-open');
  modalBackdrop.classList.toggle('is-hidden');
  console.log('ddd');
}
