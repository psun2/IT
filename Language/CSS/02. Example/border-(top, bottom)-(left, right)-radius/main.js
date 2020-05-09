const click1 = document.querySelector('.box1__click');
const click2 = document.querySelector('.box2__click');
const click3 = document.querySelector('.box3__click');
const click4 = document.querySelector('.box4__click');

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

click1.addEventListener('click', () => {
  box1.classList.toggle('active');
});
click2.addEventListener('click', () => {
  box2.classList.toggle('active');
});
click3.addEventListener('click', () => {
  box3.classList.toggle('active');
});
click4.addEventListener('click', () => {
  box4.classList.toggle('active');
});
