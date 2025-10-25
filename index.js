const btn = document.querySelector('.btn');
const trailerContainer = document.querySelector('.trailer-container');
const closeIcon = document.querySelector('.close-icon');

btn.addEventListener('click', () => {
  trailerContainer.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  trailerContainer.classList.remove('active');
});
