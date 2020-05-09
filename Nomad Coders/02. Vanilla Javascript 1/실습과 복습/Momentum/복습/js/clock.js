const clock = document.querySelector('.js-clock');

function getDate() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  clock.innerText = `${hour < 10 ? `0${hour}` : hour} : ${
    minute < 10 ? `0${minute}` : minute
  } : ${second < 10 ? `0${second}` : second}`;
}

function init() {
  console.log('clock.js 의 init(초기화 메소드)실행');
  getDate();
  setInterval(getDate, 1000);
}

init();
