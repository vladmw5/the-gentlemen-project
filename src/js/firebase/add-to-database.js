import { getMoviesByID } from '../service/gallery-requests';
import { Notify } from 'notiflix';
import {
  sendDataToFirebase,
  removeMovieFromFirebase,
  getDataFromFirebase,
  parseDataBaseResponse,
  watchedWay,
  queueWay,
} from '../firebase/service/index';
import { toggleModal } from '../components/gallery';
import { makeMarkupGallery } from '../service/gallery-markup';
import { renderRetrievedMarkup } from '../components/my-library-btn';

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
  if (event.target.hasAttribute('data-remove-btn')) {
    const watchedBtn = document.querySelector('[data-btn-watched]');
    const targetWay = watchedBtn.classList.contains('is-header-lib-active')
      ? watchedWay
      : queueWay;
    removeMovieFromFirebase(targetWay, currentFilmId)
      .then(() => {
        getDataFromFirebase(watchedWay)
          .then(parseDataBaseResponse)
          .then(makeMarkupGallery)
          .then(renderRetrievedMarkup)
          .catch(() => {
            Notify.info(
              'Your Watched List is empty. You can add films on Home page'
            );
          });
      })
      .catch(() => {
        Notify.failure('Failed to remove from Database');
      });

    toggleModal();
    return;
  }
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
