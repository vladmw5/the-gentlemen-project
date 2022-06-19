import { getMoviesByID } from '../service/gallery-requests';

const filmcardModal = document.querySelector('.filmcard-modal');

filmcardModal.addEventListener('click', onFilmcardModalClick);

function onFilmcardModalClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;

  const currentFilmId =
    filmcardModal.querySelector('.filmcard__poster')?.dataset.id;

  const data = getMoviesByID(currentFilmId).then(console.log);

  if (event.target.hasAttribute('data-add-to-watched-btn')) {
    sendDataToFirebaseWatched(data);
  } else if (event.target.hasAttribute('data-add-to-queue-btn')) {
    sendDataToFirebaseQueue(data);
  } else return;
}

function sendDataToFirebaseWatched(data) {}

function sendDataToFirebaseQueue(data) {}
