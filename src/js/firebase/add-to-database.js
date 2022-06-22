import { getMoviesByID } from '../service/gallery-requests';
import { Notify } from 'notiflix';
import throttle from 'lodash.throttle';
import {
  sendDataToFirebase,
  removeMovieFromFirebase,
  getDataFromFirebase,
  parseDataBaseResponse,
  watchedWay,
  queueWay,
} from '../firebase/service/index';
import { toggleModal } from '../components/gallery';
import { makeMarkupGallery } from '../utils/gallery-markup';
import { renderRetrievedMarkup } from '../components/my-library-btn';
import { refs } from '../utils/refs';
import { notifyOptions } from '../service/notify-options';

const wathcedList = 'Watched List';
const queue = 'Queue';

let userId = null;

const { filmcardModal, gallery } = refs;

filmcardModal.addEventListener('click', throttle(onFilmcardModalClick, 550));

async function onFilmcardModalClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  if (event.target.classList.contains('filmcard-modal__close-btn')) return;

  if (
    event.target.classList.contains('card-open-film') ||
    event.target.classList.contains('card-span-unicode')
  ) {
    return;
  }

  if (userId === null) {
    return Notify.failure(
      'You are not authorized to perform this action. Please, Sign Up or Log In',
      notifyOptions
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
        getDataFromFirebase(targetWay)
          .then(parseDataBaseResponse)
          .then(makeMarkupGallery)
          .then(renderRetrievedMarkup)
          .catch(() => {
            Notify.info(
              infoEmptyMessage(
                targetWay === watchedWay ? 'Watched List' : 'Queue'
              ),
              notifyOptions
            );
            gallery.innerHTML = infoEmptyParagraph(
              targetWay === watchedWay ? 'Watched List' : 'Queue'
            );
          });
      })
      .catch(() => {
        Notify.failure('Failed to remove from Database', notifyOptions);
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
        Notify.success(successAddMessage(wathcedList), notifyOptions);
      })
      .catch(e => {
        Notify.failure('Whoops, something went wrong', notifyOptions);
      });
  } else if (event.target.hasAttribute('data-add-to-queue-btn')) {
    sendDataToFirebase(dataToSend, queueWay)
      .then(() => {
        Notify.success(successAddMessage(queue), notifyOptions);
      })
      .catch(e => {
        Notify.failure('Whoops, something went wrong', notifyOptions);
      });
  } else return;
}

export function getUserId(id) {
  userId = id;
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

function successAddMessage(target) {
  return `Your film has been successfully added to your ${target}!`;
}

function infoEmptyMessage(target) {
  return `Your ${target} is now empty. You can add films on Home page`;
}

function infoEmptyParagraph(target) {
  return `<p class="notifycation__text notifycation__text--library">Your ${target} is empty. You can add films on Home page</p>`;
}
