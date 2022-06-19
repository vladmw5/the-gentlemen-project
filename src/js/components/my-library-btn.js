const refs = {
  watched: document.querySelector('[data-btn-watched]'),
  queue: document.querySelector('[data-btn-queue]'),
};

const toAdd = 'is-header-lib-active';

refs.watched.addEventListener('click', () => {
  refs.watched.classList.add(toAdd);
  refs.queue.classList.remove(toAdd);
  // забирають данні з бази watched
  //
  // перемалювати галерею
});

refs.queue.addEventListener('click', () => {
  refs.queue.classList.add(toAdd);
  refs.watched.classList.remove(toAdd);
  // забирають данні з бази queue
  //
  // перемалювати галерею
});
