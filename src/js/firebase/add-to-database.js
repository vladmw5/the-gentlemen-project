import { getMoviesByID } from '../service/gallery-requests';
import { Notify } from 'notiflix';
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
    return Notify.failure(
      'You are not authorized to perform this action. Please, Sign Up or Log In'
    );
  }

  const posterRef = filmcardModal.querySelector('.filmcard__poster');

  const currentFilmId = posterRef?.dataset.id;
  const genre_ids = posterRef?.dataset.genreIds
    .split('-')
    .map(id => Number(id));

  const data = await getMoviesByID(currentFilmId);

  const dataToSend = createData(data, genre_ids);

  if (event.target.hasAttribute('data-add-to-watched-btn')) {
    sendDataToFirebase(dataToSend, watchedWay)
      .then(() => {
        Notify.success(
          'Your film has been successfully added to your Watched List!'
        );
      })
      .catch(e => {
        Notify.failure('Whoops, something went wrong');
      });
  } else if (event.target.hasAttribute('data-add-to-queue-btn')) {
    sendDataToFirebase(dataToSend, queueWay)
      .then(() => {
        Notify.success('Your film has been successfully added to your Queue!');
      })
      .catch(e => {
        Notify.failure('Whoops, something went wrong');
      });
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
    release_date,
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
      release_date,
    },
    id: userId,
    type,
  };
}
