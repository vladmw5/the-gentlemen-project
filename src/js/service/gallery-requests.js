const axios = require('axios');

const URL = 'https://api.themoviedb.org/3';
const KEY = '83315ca553e38676f05e28ed10d08b23';

async function getPopularMovies(page, genreId = '', descByRating = false) {
  const response = await axios.get(
    `${URL}/discover/movie?api_key=${KEY}&page=${page}&with_genres=${genreId}${
      descByRating ? '&sort_by=vote_average.desc' : ''
    }&vote_count.gte=500`
  );
  return response.data;
}

async function getMoviesByKeyword(keyword, page) {
  const response = await axios.get(
    `${URL}/search/movie?api_key=${KEY}&language=en-US&query=${keyword}&page=${page}&include_adult=false`
  );
  return response.data;
}

async function getMoviesByID(id) {
  const response = await axios.get(
    `${URL}/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response.data;
}

async function getMoviesByGenres() {
  const response = await axios.get(
    `${URL}/genre/movie/list?api_key=${KEY}&language=en-US`
  );
  return response.data.genres;
}

async function getPopularMoviesOfDay() {
  const response = await axios.get(
    `${URL}/trending/movie/day?api_key=${KEY}&page=1`
  );
  return response.data;
}

async function getMoviesByVideo(id) {
  const response = await axios.get(
    `${URL}/movie/${id}/videos?api_key=${KEY}&language=en-US`
  );
  return response;
}

export {
  getPopularMovies,
  getMoviesByKeyword,
  getMoviesByID,
  getMoviesByGenres,
  getPopularMoviesOfDay,
  getMoviesByVideo,
};
