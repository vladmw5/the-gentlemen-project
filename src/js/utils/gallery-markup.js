import axios from 'axios';

import { getMoviesByGenres } from '../service/gallery-requests';

const IMG_URL = 'https://image.tmdb.org/t/p';

async function makeMarkupGallery(array) {
  const genres = await getMoviesByGenres();

  return array
    .map(
      ({
        id,
        title,
        poster_path,
        release_date,
        genre_ids,
        overview,
        vote_average,
      }) =>
        `
        <li class="card">
          <a class="card__link" href="" data-id="${id}">
            <img class="card__img" src="${
              poster_path !== null
                ? IMG_URL + '/w500' + poster_path
                : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
            }" alt="${overview !== '' ? overview : 'No info!'}" />
            <p class="card__name">${title ?? 'No info about title!'}</p>
            <p class="card__description">${
              genre_ids != false
                ? genres
                    .filter(el => genre_ids.includes(el.id))
                    .map(el => el.name)
                    .join(', ')
                : 'No info about genres!'
            } | ${release_date?.slice(0, 4) || 'No info about year!'}
            </p>
            <span class="card__vote">${
              vote_average === 10
                ? vote_average
                : vote_average !== 0
                ? vote_average.toString().padEnd(3, '.0')
                : 'No votes'
            }</span>
          </a>
        </li>`
    )
    .join('');
}

function makeMarkupMovie(array) {
  const {
    id,
    title,
    original_title,
    poster_path,
    genres,
    overview,
    vote_average,
    vote_count,
    popularity,
  } = array;
  return /*html*/ `
        <div class='modal-film-centrelizer'>
        <img
          data-id="${id}"
          data-genre-ids="${genres.map(el => el.id).join('-')}"
          class="filmcard__poster"
          src="${
            poster_path !== null
              ? IMG_URL + '/w400' + poster_path
              : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
          }"
          alt="${overview !== '' ? overview : 'No info!'}"
        />
        <button type="button" class="card-open-film" data-open-video><span class="card-span-unicode">&#10095;</span></button>
        </div>
        <div class="filmcard__wrapper">
          <p class="filmcard__title">${title ?? 'No info about title!'}</p>
          <table class="filmcard__stats">
            <tr class="stats__row">
              <td class="stats__stat-name">Vote / Votes</td>
              <td class="stats__stat-value">
                <span class="votes stats__stat-value--highlighted">${
                  vote_average === 10
                    ? vote_average
                    : vote_average !== 0
                    ? vote_average.toString().padEnd(3, '.0')
                    : 'No votes'
                }</span> /
                <span class="total-votes">${vote_count}</span>
              </td>
            </tr>
            <tr class="stats__row">
              <td class="stats__stat-name">Popularity</td>
              <td class="stats__stat-value">${popularity}</td>
            </tr>
            <tr class="stats__row">
              <td class="stats__stat-name">Original Title</td>
              <td class="original-title stats__stat-value">${original_title}</td>
            </tr>
            <tr class="stats__row">
              <td class="stats__stat-name">Genre</td>
              <td class="stats__stat-value">${
                genres != false
                  ? genres.map(el => el.name).join(', ')
                  : 'No info about genres!'
              }</td>
            </tr>
          </table>
          <p class="filmcard__header">About</p>
          <p class="filmcard__about">
            ${overview ?? 'No info about movie!'}
          </p>
          <div class="button-wrapper">
            <button type="button" class="filmcard__btn" data-add-to-watched-btn>
              Add to<br />
              Watched
            </button>
            <button type="button" class="filmcard__btn" data-add-to-queue-btn>
              Add to Queue
            </button>
          </div>
        </div>`;
}

function makeMarkupMovie2(array) {
  const {
    id,
    title,
    original_title,
    poster_path,
    genres,
    overview,
    vote_average,
    vote_count,
    popularity,
  } = array;
  return `
        <div class='modal-film-centrelizer'>
        <img
          data-id="${id}"
          data-genre-ids="${genres.map(el => el.id).join('-')}"
          class="filmcard__poster"
          src="${
            poster_path !== null
              ? IMG_URL + '/w400' + poster_path
              : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
          }"
          alt="${overview !== '' ? overview : 'No info!'}"
        />
        <button type="button" class="card-open-film" data-open-video><span class="card-span-unicode">&#10095;</span></button>
        </div>
        <div class="filmcard__wrapper">
          <p class="filmcard__title">${title ?? 'No info about title!'}</p>
          <table class="filmcard__stats">
            <tr class="stats__row">
              <td class="stats__stat-name">Vote / Votes</td>
              <td class="stats__stat-value">
                <span class="votes stats__stat-value--highlighted">${
                  vote_average !== 0
                    ? vote_average.toString().padEnd(3, '.0')
                    : 'No votes!'
                }</span> /
                <span class="total-votes">${vote_count}</span>
              </td>
            </tr>
            <tr class="stats__row">
              <td class="stats__stat-name">Popularity</td>
              <td class="stats__stat-value">${popularity}</td>
            </tr>
            <tr class="stats__row">
              <td class="stats__stat-name">Original Title</td>
              <td class="original-title stats__stat-value">${original_title}</td>
            </tr>
            <tr class="stats__row">
              <td class="stats__stat-name">Genre</td>
              <td class="stats__stat-value">${
                genres != false
                  ? genres.map(el => el.name).join(', ')
                  : 'No info about genres!'
              }</td>
            </tr>
          </table>
          <p class="filmcard__header">About</p>
          <p class="filmcard__about">
            ${overview ?? 'No info about movie!'}
          </p>
          <div class="button-wrapper">
            <button type="button" class="filmcard__btn" data-remove-btn>
              Remove from <br />
              My Library
            </button>
          </div>
        </div>`;
}

function makeMarkupMovieForSlider(array) {
  let markup = '';

  for (let i = 0; i < 15; i += 1) {
    const { id, overview, backdrop_path } = array[i];
    markup += `
        <div class="swiper-slide">
            <img class="swiper-img" data-id="${id}" src="${
      IMG_URL + '/w500' + backdrop_path
    }" alt="${overview}" style="width: 100%" />
        </div>`;
  }

  return markup;
}

export {
  makeMarkupGallery,
  makeMarkupMovie,
  makeMarkupMovieForSlider,
  makeMarkupMovie2,
};
