// TODO: #3.1 Making a JS Clock part One (JS 시계 만들기 1 부 )

const clockCintainer = document.querySelector('.js-clock'),
  // const clockTitle = document.querySelector('.js-title');
  clockTitle = document.querySelector('h1');

// TODO: Date()
// const date = new Date();
// console.log(date);
// // Thu Apr 23 2020 17:55:34 GMT+0900 (대한민국 표준시)
// console.log(date.getDay()); // 4
// // 4 는 목요일을 의미합니다.
// // 1 은 월요일이 되겠습니다.
// console.log(date.getDate()); // 23
// console.log(date.getHours()); // 17
// console.log(date.getMinutes()); // 55

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  clockTitle.innerText = `${hours} : ${minutes} : ${seconds} (${day})`;
}

function init() {
  getTime();
}

init();
