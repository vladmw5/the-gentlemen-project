const refs = {
  watched: document.querySelector('[data-btn-watched]'),
  queue: document.querySelector('[data-btn-queue]'),
};

refs.watched.addEventListener('click', () => {
  refs.watched.classList.add('is-active');
  refs.queue.classList.remove('is-active');
});

refs.queue.addEventListener('click', () => {
  refs.queue.classList.add('is-active');
  refs.watched.classList.remove('is-active');
});
