const axios = require('axios');

const URL = 'https://api.themoviedb.org/3';
const KEY = '83315ca553e38676f05e28ed10d08b23';

async function getPopularMovies(page) {
  const response = await axios.get(
    `${URL}/trending/movie/week?api_key=${KEY}&page=${page}`
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

export { getPopularMovies, getMoviesByKeyword, getMoviesByID };
