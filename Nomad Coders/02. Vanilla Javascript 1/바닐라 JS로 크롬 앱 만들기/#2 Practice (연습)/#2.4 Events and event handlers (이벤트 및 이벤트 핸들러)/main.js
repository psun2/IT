// TODO: #2.4 Events and event handlers (이벤트 및 이벤트 핸들러)

const title = document.getElementById('title');

function handleResize() {
  console.log('I have been resized');
}

// TODO: handleResize 함수를 즉시 호출
// window.addEventListener('resize', handleResize()); // resize : 크기 조정

// TODO: window 의 사이즈가 변경 되었을때 handleResize 함수 호출
window.addEventListener('resize', handleResize); // resize : 크기 조정

// TODO: 단 한번뿐인 Click 이벤트
function handleClick() {
  title.style.color = 'blue';
}

title.addEventListener('click', handleClick);
