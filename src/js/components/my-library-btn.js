import {
  getDataFromFirebase,
  watchedWay,
  queueWay,
  parseDataBaseResponse,
} from '../firebase/service';
import { makeMarkupGallery } from '../utils/gallery-markup';
import { renderPaginationBar } from './pagination-bar';
import { Notify } from 'notiflix';
import { auth, onAuthStateChanged } from '../firebase/service/index';
import { refs } from '../utils/refs';

const { watched, queue, gallery, note } = refs;

const toAdd = 'is-header-lib-active';

document.addEventListener('libPageLoaded', () => {
  onAuthStateChanged(auth, whenLibraryPageIsLoaded);
});
watched?.addEventListener('click', onWatchedBtnClick);
queue?.addEventListener('click', onQueueBtnClick);

function whenLibraryPageIsLoaded() {
  getDataFromFirebase(watchedWay)
    .then(parseDataBaseResponse)
    .then(makeMarkupGallery)
    .then(renderRetrievedMarkup)
    .catch(() => {
      // Notify.info('Your Watched List is empty. You can add films on Home page');
      gallery.innerHTML =
        '<p class="notifycation__text notifycation__text--library">Your Watched List is empty. You can add films on Home page</p>';
      document.querySelector('.spinner')?.remove();
    });
}

function onWatchedBtnClick() {
  watched.classList.add(toAdd);
  queue.classList.remove(toAdd);
  getDataFromFirebase(watchedWay)
    .then(parseDataBaseResponse)
    .then(makeMarkupGallery)
    .then(renderRetrievedMarkup)
    .catch(() => {
      gallery.innerHTML =
        '<p class="notifycation__text notifycation__text--library">Your Watched List is empty. You can add films on Home page</p>';
      // Notify.info('Your Watched List is empty. You can add films on Home page');
    });
}

function onQueueBtnClick() {
  queue.classList.add(toAdd);
  watched.classList.remove(toAdd);
  getDataFromFirebase(queueWay)
    .then(parseDataBaseResponse)
    .then(makeMarkupGallery)
    .then(renderRetrievedMarkup)
    .catch(() => {
      gallery.innerHTML =
        '<p class="notifycation__text notifycation__text--library">Your Queue is empty. You can add films on Home page</p>';
      // Notify.info('Your Watched List is empty. You can add films on Home page');
    });
}

function renderRetrievedMarkup(markup) {
  gallery.innerHTML = markup;
}

export { renderRetrievedMarkup };
