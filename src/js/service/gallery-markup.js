import axios from 'axios';

const IMG_URL = 'https://image.tmdb.org/t/p/w400';

async function makeMarkupGallery(array) {
  const genres = await axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=83315ca553e38676f05e28ed10d08b23&language=en-US`
    )
    .then(r => r.data.genres);

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
                ? IMG_URL + poster_path
                : './images/template-poster-movie.jpg'
            }" alt="${overview !== '' ? overview : 'No info!'}" />
            <p class="card__name">${title ?? 'No info about title!'}</p>
            <p class="card__description">${
              genre_ids != false
                ? genres
                    .filter(el => genre_ids.includes(el.id))
                    .map(el => el.name)
                    .join(', ')
                : 'No info about genres!'
            } | ${release_date?.slice(0, 4) ?? 'No info about year!'}
            </p>
            <span class="card__vote">${
              vote_average !== 0 ? vote_average : 'No votes'
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
  return `
        <svg class="filmcard-modal__close-icon">
          <use href="./symbol-defs.a8b2e413.svg#icon-cross"></use>
        </svg>
        <img
          data-id="${id}"
          class="filmcard__poster"
          src="https://image.tmdb.org/t/p/w400${
            poster_path !== null
              ? IMG_URL + poster_path
              : './images/template-poster-movie.jpg'
          }"
          alt="${overview !== '' ? overview : 'No info!'}"
        />
        <div class="filmcard__wrapper">
          <p class="filmcard__title">${title ?? 'No info about title!'}</p>
          <table class="filmcard__stats">
            <tr class="stats__row">
              <td class="stats__stat-name">Vote / Votes</td>
              <td class="stats__stat-value">
                <span class="votes stats__stat-value--highlighted">${
                  vote_average === '0' ? vote_average : 'No votes!'
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

export { makeMarkupGallery, makeMarkupMovie };
