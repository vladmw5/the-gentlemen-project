import axios from 'axios';

export async function makeMarkupGallery(array) {
  const genres = await axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=83315ca553e38676f05e28ed10d08b23&language=en-US`
    )
    .then(r => r.data.genres);

  return array
    .map(
      ({ original_title, poster_path, release_date, genre_ids }) =>
        `
        <li class="card">
          <a href="">
            <img class="card__img" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="" />
            <p class="card__name">${original_title}</p>
            <p class="card__description">${genres
              .filter(el => genre_ids.includes(el.id))
              .map(el => el.name)
              .join(', ')} | ${release_date}</p>
          </a>
        </li>`
    )
    .join('');
}
