import { makeMarkupGallery } from '../service/markup';
import { getPopularMovies } from '../service/requests';

const gallery = document.querySelector('.gallery__list');

getPopularMovies(1).then(r => {
  makeMarkupGallery(r).then(r => (gallery.innerHTML = r));
});
