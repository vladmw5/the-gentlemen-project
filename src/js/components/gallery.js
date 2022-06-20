import { Spinner } from 'spin.js';

import Swiper from 'swiper/swiper-bundle.min.js';
// import 'swiper/swiper-bundle.min.css';

import { swiperOptions } from '../service/swiper-options';
import { optsForSpinner } from '../service/spinner-options';
import { renderPaginationBar } from './pagination-bar';
import {
  makeMarkupGallery,
  makeMarkupMovie,
  makeMarkupMovieForSlider,
} from '../service/gallery-markup';
import {
  getPopularMovies,
  getMoviesByKeyword,
  getMoviesByID,
  getPopularMoviesOfDay,
} from '../service/gallery-requests';

// vars
export let firstTime = true;
export const SESSION_STORAGE_USER_KEYWORD_KEY = 'user-search-keyword';
let selectedIdGenre = '';

// refs
const gallery = document.querySelector('.gallery__list');
const movieCase = document.querySelector('.filmcard__case');
const modalBackdrop = document.querySelector('.filmcard-modal-backdrop');
const inputSearchMovie = document.querySelector('.hero-form__input');
const modalCloseBtn = document.querySelector('.filmcard-modal__close-btn');
const slideImages = document.querySelector('.swiper-wrapper');
const swiperContainer = document.querySelector('.swiper-container');
const swiperTitle = document.querySelector('.swiper-title');
const swiper = document.querySelector('.swiper');

// event Listener
document.addEventListener('homePageLoaded', () => {
  firstRenderPopularMovies(1);
});

document.addEventListener('libPageLoaded', () => {
  swiper.innerHTML = '';
});

inputSearchMovie?.addEventListener('input', onFormInput);
gallery.addEventListener('click', onMovieClick);
modalCloseBtn.addEventListener('click', toggleModal);

// init
const spinner = new Spinner(optsForSpinner).spin(gallery);

// functions
export function firstRenderPopularMovies(page, genreId) {
  getPopularMovies(page, selectedIdGenre).then(r => {
    makeMarkupGallery(r.results)
      .then(r => {
        gallery.innerHTML = r;
      })
      .catch(console.log);
    renderPaginationBar(r.total_pages, page);
  });

  getPopularMoviesOfDay().then(r => {
    slideImages.innerHTML = makeMarkupMovieForSlider(r.results);
    const swiper = new Swiper(swiperContainer, swiperOptions);
    slideImages.addEventListener('click', onSlidesMovieClick);
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
  const spinner = new Spinner(optsForSpinner).spin(gallery);
  getMoviesByID(movieId)
    .then(r => {
      movieCase.innerHTML = makeMarkupMovie(r);
      document.querySelector('.spinner').remove();
      toggleModal();
    })
    .catch(console.log);
}

function onFormInput(e) {
  slideImages.innerHTML = '';
  swiper.style.display = 'none';

  const keyword = e.target.value.trim();

  if (!keyword) {
    firstRenderPopularMovies(1);
    swiper.style.display = 'block';
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

function onSlidesMovieClick(e) {
  e.preventDefault();

  if (!e.target.nodeName === 'IMG') {
    return;
  }

  const movieId = e.target.dataset.id;

  renderMoviesByID(movieId);

  window.addEventListener('keydown', closeMovieModalByEsc, { once: true });
  modalBackdrop.addEventListener('click', closeMovieModalByClickBackdrop);
}

export function onGenreClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  selectedIdGenre = Number(e.target.dataset.id);
  firstRenderPopularMovies(1, selectedIdGenre);
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
}
