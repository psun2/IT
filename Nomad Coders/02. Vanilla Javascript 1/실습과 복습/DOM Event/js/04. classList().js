console.log('👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀');
console.log('classList()');
console.log('기능을 알아보고 싶다면, 04. classList.js 파일을 실행하세요.');

const title4 = document.getElementById('title3');

// or

// const title4 = document.querySelector('#title3');

const change__color = 'change__color';

console.log(
  'className 과는 달리 기존 에 있던 class를 건드리지 않고 지정한 새로운 class 를 생성합니다.',
);
function handleClassAdd() {
  title4.classList.add(change__color);
}

console.log('지정한 class 를 지워 줍니다.');
function handleClassRemove() {
  title4.classList.remove(change__color);
}

console.log(
  'click 시 지정된 class name이 없을시 지정된 class name을 추가해주고 다시한번 click시 생성된 class 를 제거 하려고 만들 로직이지만 제거가 안되는 현상 발생',
);
function handleClassAddAndRemove() {
  if (title.className !== change__color) {
    title4.classList.add(change__color);
  } else {
    title4.classList.remove(change__color);
  }
}
console.log(
  'if문에 걸려 추가 되는것 까지는 성공 했지만, 다시한번 click 시 기존에 보유한 class 와 if 문으로 추가된 class 두개의 class 를 가지고 있기 때문에 또다시 true if 문의 무한 반복이 일어나 실패한 로직 입니다.',
);

title4.addEventListener('click', handleClassAddAndRemove);
