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
} from '../utils/gallery-markup';
import {
  getPopularMovies,
  getMoviesByKeyword,
  getMoviesByID,
  getPopularMoviesOfDay,
} from '../service/gallery-requests';
import { closeMovieModal, renderVideo } from './../utils/video-modal-markup';
// refs
import { refs } from '../utils/refs';

const {
  gallery,
  movieCase,
  modalBackdrop,
  inputSearchMovie,
  modalCloseBtn,
  slideImages,
  swiperContainer,
  swiper,
  moviesFilter,
  filterBtn,
  sortBtn,
  genreBtns,
  paginationBarRef,
} = refs;

// vars
export let firstTime = true;
export const SESSION_STORAGE_USER_KEYWORD_KEY = 'user-search-keyword';
let selectedIdGenre = '';
let weAreOnLibPage = false;

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
          paginationBarRef.innerHTML = '';
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
  genreBtns?.classList.remove('is-open-filter');

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
  slideImages.innerHTML = '';

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  filterBtn.classList.add('filter-active');
  document
    .querySelector('.menu-filter-list')
    .classList.remove('is-open-filter');

  selectedIdGenre = Number(e.target.dataset.id);
  firstRenderPopularMovies(
    1,
    selectedIdGenre,
    sortBtn.dataset.rating === 'false' ? false : true
  );
}

export function onSortClick(e) {
  slideImages.innerHTML = '';

  firstRenderPopularMovies(
    1,
    selectedIdGenre,
    e.target.dataset.rating === 'false' ? false : true
  );
}

export function onResetSortAndFilterClick(e) {
  slideImages.innerHTML = '';

  selectedIdGenre = '';
  firstRenderPopularMovies(1, selectedIdGenre);
  filterBtn.classList.remove('filter-active');
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

export function toggleModal() {
  document.body.classList.toggle('modal-open');
  modalBackdrop.classList.toggle('is-hidden');
   renderVideo.innerHTML = '';
   closeMovieModal();
}
