const more = document.querySelector('.more');
const text = document.querySelector('.text');

more.addEventListener('click', () => {
  text.classList.toggle('clamp');
});
