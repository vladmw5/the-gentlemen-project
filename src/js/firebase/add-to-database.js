import { getMoviesByID } from '../service/gallery-requests';

import {sendDataToFirebaseWatched, sendDataToFirebaseQueue} from '../firebase/service/index'


let userId = null;

const filmcardModal = document.querySelector('.filmcard-modal');

filmcardModal.addEventListener('click', onFilmcardModalClick);

function onFilmcardModalClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;

  const currentFilmId =
    filmcardModal.querySelector('.filmcard__poster')?.dataset.id;
  
  // const data = getMoviesByID(currentFilmId).then(console.log);
  const dataId = createData(currentFilmId);
  // console.log(dataId);

  if (event.target.hasAttribute('data-add-to-watched-btn')) {
    sendDataToFirebaseWatched(dataId);
  } else if (event.target.hasAttribute('data-add-to-queue-btn')) {
    sendDataToFirebaseQueue(dataId);
  } else return;
}

export function getUserId(id) {
    userId = id;
    // console.log(userId);
};

function createData(dataId, type='id') {
  return {
    dataId,
    id: userId,
    type,
  };
};





