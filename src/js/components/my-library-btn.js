import { getDataFromFirebase, watchedWay, queueWay } from '../firebase/service';
import { makeMarkupGallery } from '../service/gallery-markup';
import { renderPaginationBar } from './pagination-bar';

const refs = {
  watched: document.querySelector('[data-btn-watched]'),
  queue: document.querySelector('[data-btn-queue]'),
  gallery: document.querySelector('.gallery__list'),
};

const toAdd = 'is-header-lib-active';

document.addEventListener('libPageLoaded', whenLibraryPageIsLoaded);
refs.watched?.addEventListener('click', onWatchedBtnClick);
refs.queue?.addEventListener('click', onQueueBtnClick);

function whenLibraryPageIsLoaded() {
  getDataFromFirebase(watchedWay)
    .then(parseDataBaseResponse)
    .then(makeMarkupGallery)
    .then(renderRetrievedMarkup)
    .catch(console.error);
}

function onWatchedBtnClick() {
  refs.watched.classList.add(toAdd);
  refs.queue.classList.remove(toAdd);
  getDataFromFirebase(watchedWay)
    .then(parseDataBaseResponse)
    .then(makeMarkupGallery)
    .then(renderRetrievedMarkup)
    .catch(console.error);
}

function onQueueBtnClick() {
  refs.queue.classList.add(toAdd);
  refs.watched.classList.remove(toAdd);
  getDataFromFirebase(queueWay)
    .then(parseDataBaseResponse)
    .then(makeMarkupGallery)
    .then(renderRetrievedMarkup)
    .catch(console.error);
}

function parseDataBaseResponse(snapshot) {
  if (!snapshot.exists()) {
    throw new Error('Data base snapshot is empty');
  }

  return Promise.resolve(
    Object.values(snapshot.val()).map(val => val.movieData)
  );
}

function renderRetrievedMarkup(markup) {
  refs.gallery.innerHTML = markup;
  renderPaginationBar(1, 1);
}
