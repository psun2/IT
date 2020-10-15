const body = document.querySelector('body'),
  h1 = document.querySelector('h1'),
  span = document.querySelector('span'),
  add = document.querySelector('.js-add'),
  minus = document.querySelector('.js-minus'),
  init = document.querySelector('.js-init');

const count = [
  {
    num: 0,
  },
];

function handleInit() {
  console.log('handleInit 실행');
  count.forEach((current) => paintCount((current.num = 0)));
}

function handleMinus() {
  console.log('handleMinus 실행');
  count.forEach((current) => paintCount((current.num = current.num - 1)));
}

function handleAdd() {
  console.log('handleAdd 실행');
  // console.log(
  //   count.forEach((current) => console.log((current.num = current.num + 1))),
  // );
  // console.log(
  //   count.map((current) => console.log((current.num = current.num + 1))),
  // );
  count.forEach((current) => paintCount((current.num = current.num + 1)));
  // const newContent = count.map((current) => (current.num = current.num + 1));
  // paintCount(newContent);
  // console.log(newContent);
}

function removeSpan() {
  span.nextSibling.remove(span);
}

function paintCount(number) {
  removeSpan();
  const span = document.createElement('span');
  span.innerText = Number(number);
  h1.appendChild(span);
}

function initFunction() {
  console.log('init 함수 실행');
  const initValue = count.map((current) => current.num);
  paintCount(initValue);
  add.addEventListener('click', handleAdd);
  minus.addEventListener('click', handleMinus);
  init.addEventListener('click', handleInit);
}

initFunction();
