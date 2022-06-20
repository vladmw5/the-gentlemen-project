import {
  getDataFromFirebase,
  watchedWay,
  queueWay,
  parseDataBaseResponse,
} from '../firebase/service';
import { makeMarkupGallery } from '../service/gallery-markup';
import { renderPaginationBar } from './pagination-bar';
import { Notify } from 'notiflix';
import { auth, onAuthStateChanged } from '../firebase/service/index';

const refs = {
  watched: document.querySelector('[data-btn-watched]'),
  queue: document.querySelector('[data-btn-queue]'),
  gallery: document.querySelector('.gallery__list'),
};

const toAdd = 'is-header-lib-active';

document.addEventListener('libPageLoaded', () => {
  onAuthStateChanged(auth, whenLibraryPageIsLoaded);
});
refs.watched?.addEventListener('click', onWatchedBtnClick);
refs.queue?.addEventListener('click', onQueueBtnClick);

function whenLibraryPageIsLoaded() {
  getDataFromFirebase(watchedWay)
    .then(parseDataBaseResponse)
    .then(makeMarkupGallery)
    .then(renderRetrievedMarkup)
    .catch(() => {
      Notify.info('Your Watched List is empty. You can add films on Home page');
    });
}

function onWatchedBtnClick() {
  refs.watched.classList.add(toAdd);
  refs.queue.classList.remove(toAdd);
  getDataFromFirebase(watchedWay)
    .then(parseDataBaseResponse)
    .then(makeMarkupGallery)
    .then(renderRetrievedMarkup)
    .catch(() => {
      Notify.info('Your Watched List is empty. You can add films on Home page');
    });
}

function onQueueBtnClick() {
  refs.queue.classList.add(toAdd);
  refs.watched.classList.remove(toAdd);
  getDataFromFirebase(queueWay)
    .then(parseDataBaseResponse)
    .then(makeMarkupGallery)
    .then(renderRetrievedMarkup)
    .catch(() => {
      Notify.info('Your Queue is empty. You can add films on Home page');
    });
}

function renderRetrievedMarkup(markup) {
  refs.gallery.innerHTML = markup;
}

export { renderRetrievedMarkup };
