document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const title = document.createElement('h1');

  title.innerHTML = 'HELLO PALOMA';

  body.appendChild(title);
});
