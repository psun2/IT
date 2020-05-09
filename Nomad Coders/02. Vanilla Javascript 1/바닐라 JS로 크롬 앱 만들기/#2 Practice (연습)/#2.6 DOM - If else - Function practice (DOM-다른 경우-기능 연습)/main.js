// TODO: #2.6 DOM - If else - Function practice (DOM-다른 경우-기능 연습)

// TODO: HTML Javascript DOM event mdn : https://developer.mozilla.org/ko/docs/Web/Events

const title = document.getElementById('title');

// const BASE_COLOR = '#34495e';
const BASE_COLOR = 'rgb(52, 73, 94)';
const OTHER_COLOR = '#7f8c8d';

function handleClick() {
  const currentColor = title.style.color;
  // console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

// TODO: click 시 event 발생
// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener('click', handleClick);
// }

// TODO: mouseenter 시 즉 마우스가 over 되었을시 event 발생
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener('mouseenter', handleClick);
}

init();

// TODO: 네트워크가 offline시 이벤트 생성
function handleOffline() {
  console.log('인터넷 연결이 해제 되었습니다. (Bye bye)');
}

window.addEventListener('offline', handleOffline);

// TODO: 네트워크가 online시 이벤트 생성
function handleOnline() {
  console.log('인터넷에 연결되었습니다. (Welcome back');
}

window.addEventListener('online', handleOnline);
