import { Spinner } from 'spin.js';
import debounce from 'lodash.debounce';

import Swiper from 'swiper/swiper-bundle.min.js';

import { swiperOptions } from '../service/swiper-options';
import { optsForSpinner } from '../service/spinner-options';
import { renderPaginationBar } from './pagination-bar';
import {
  makeMarkupGallery,
  makeMarkupMovie,
  makeMarkupMovie2,
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
let sortMovieDescendingByRatingStatus = false;
let weAreOnLibPage = false;

// refs
const gallery = document.querySelector('.gallery__list');
const movieCase = document.querySelector('.filmcard__case');
const modalBackdrop = document.querySelector('.filmcard-modal-backdrop');
const inputSearchMovie = document.querySelector('.hero-form__input');
const modalCloseBtn = document.querySelector('.filmcard-modal__close-btn');
const slideImages = document.querySelector('.swiper-wrapper');
const swiperContainer = document.querySelector('.swiper-container');
const swiper = document.querySelector('.swiper');
const moviesFilter = document.querySelector('.hero-btn-list');

// event Listener
document.addEventListener('homePageLoaded', () => {
  firstRenderPopularMovies(1);
  weAreOnLibPage = false;
});

document.addEventListener('libPageLoaded', () => {
  swiper.innerHTML = '';
  weAreOnLibPage = true;
});

inputSearchMovie?.addEventListener('input', debounce(onFormInput, 350));
gallery.addEventListener('click', onMovieClick);
modalCloseBtn.addEventListener('click', toggleModal);

// init
const spinner = new Spinner(optsForSpinner).spin(gallery);

// functions
export function firstRenderPopularMovies(page, genreId, sortByRating) {
  getPopularMovies(page, selectedIdGenre, sortByRating).then(r => {
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
      if (weAreOnLibPage) {
        movieCase.innerHTML = makeMarkupMovie2(r);
      } else {
        movieCase.innerHTML = makeMarkupMovie(r);
      }

      document.querySelector('.spinner').remove();
      toggleModal();
    })
    .catch(console.log);
}

function onFormInput(e) {
  slideImages.innerHTML = '';
  swiper.style.display = 'none';
  moviesFilter.style.display = 'none';
  const ref = document.querySelector('.menu-filter-list');
  ref?.classList.remove('is-open-filter');

  const keyword = e.target.value.trim();
  if (!keyword) {
    firstRenderPopularMovies(1);
    swiper.style.display = 'block';
    moviesFilter.style.display = 'flex';
    firstTime = true;
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

  document.querySelector('.filter').classList.add('filter-active');
  document
    .querySelector('.menu-filter-list')
    .classList.remove('is-open-filter');

  selectedIdGenre = Number(e.target.dataset.id);
  firstRenderPopularMovies(
    1,
    selectedIdGenre,
    document.querySelector('.rating').dataset.rating === 'false' ? false : true
  );
}

export function onSortClick(e) {
  firstRenderPopularMovies(
    1,
    selectedIdGenre,
    e.target.dataset.rating === 'false' ? false : true
  );
}

export function onResetSortAndFilterClick(e) {
  selectedIdGenre = '';
  firstRenderPopularMovies(1, selectedIdGenre);
  document.querySelector('.filter').classList.remove('filter-active');
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

export { toggleModal };
