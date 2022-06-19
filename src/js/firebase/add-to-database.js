import { getMoviesByID } from '../service/gallery-requests';

import {
  sendDataToFirebase,
  watchedWay,
  queueWay,
} from '../firebase/service/index';

let userId = null;

const filmcardModal = document.querySelector('.filmcard-modal');

filmcardModal.addEventListener('click', onFilmcardModalClick);

async function onFilmcardModalClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;

  if (userId === null) {
    alert('you are not authorized to perform this action');
  }

  const posterRef = filmcardModal.querySelector('.filmcard__poster');

  const currentFilmId = posterRef?.dataset.id;
  const genre_ids = posterRef?.dataset.genreIds.split('-');

  const data = await getMoviesByID(currentFilmId);

  const dataToSend = createData(data, genre_ids);

  if (event.target.hasAttribute('data-add-to-watched-btn')) {
    sendDataToFirebase(dataToSend, watchedWay);
  } else if (event.target.hasAttribute('data-add-to-queue-btn')) {
    sendDataToFirebase(dataToSend, queueWay);
  } else return;
}

export function getUserId(id) {
  userId = id;
  // console.log(userId);
}

function createData(
  {
    id,
    title,
    original_title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    popularity,
  },
  genre_ids,
  type = 'id'
) {
  return {
    movieData: {
      id,
      title,
      original_title,
      poster_path,
      overview,
      vote_average,
      vote_count,
      popularity,
      genre_ids,
    },
    id: userId,
    type,
  };
}
