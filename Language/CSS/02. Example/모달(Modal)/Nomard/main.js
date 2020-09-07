const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal__overlay');

const openModal = () => {
  modal.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
};

const init = () => {
  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
};

init();
