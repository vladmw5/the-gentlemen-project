import { refs } from './refs';
import { getMoviesByVideo } from '../service/gallery-requests';

const { movieCase } = refs;
const modalVideo = document.querySelector('.modal-video');
const closeVideo = document.querySelector('[data-close-video]');
export const renderVideo = document.querySelector('.modal-render-video');

movieCase.addEventListener('click', getMovie);

closeVideo.addEventListener('click', closeMovieModal);

function getMovie(e) {
  if (e.target.nodeName !== 'BUTTON' && e.target.nodeName !== 'SPAN') {
    return;
  }
  if (
    !e.target.classList.contains('card-open-film') &&
    !e.target.classList.contains('card-span-unicode')
  ) {
    return;
  }
  const posterRef = movieCase.querySelector('.filmcard__poster');

  const idMovie = posterRef.dataset.id;
  
  getMoviesByVideo(idMovie)
    .then(openMovieModal)
    .then(renderMovieToMovieModal)
    .catch(console.log);
}

function openMovieModal(response) {
  modalVideo.classList.add('is-open-video');
  return response.data.results;
}

export function closeMovieModal() {
  modalVideo.classList.remove('is-open-video');
}

function renderMovieToMovieModal(result) {
  const data = result[0];
  const { key, name } = data;
  const markup = `<iframe
  class="youtube"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/${key}"
  title="${name}"
  frameborder="0"
  data-value="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>`;
  renderVideo.innerHTML = markup;
}
