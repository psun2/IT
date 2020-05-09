const mobile = document.querySelector('.mobile');
const nav = document.querySelector('.header .header__nav');
const icons = document.querySelector('.header .header__icons');

mobile.addEventListener('click', () => {
  nav.classList.toggle('active');
  icons.classList.toggle('active');
});

// const block = document.querySelector('.imges__block');
// const none = document.querySelector('.imges__none');
// const none__block = document.querySelector('.imges__none.block');

// block.addEventListener('mouseover', () => {
//   none.classList.toggle('block');
// });

// none__block.addEventListener('mouseout', () => {
//   none__block.classList.toggle('end');
// });
