console.log('👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀');
console.log('className()');
console.log('기능을 알아보고 싶다면, 03. className.js 파일을 실행하세요.');
const titleTest2 = document.querySelector('#title2');

const change = 'change';

console.log(
  'Element 의 기존의 class Name 을 지우고 설정한 class Name 으로 변경합니다.',
);
titleTest2.className = change;

console.log(
  'css 에 .change 의 style 값이 있지만, 순서의 문제 인지는 모르겠으나 자바스크립트의 순수 css 보다 자바스크립트의 코드를 최 우선으로 보고 있는지 색 변경이 이루어 지지 않습니다.',
);

console.log('변경된 class 이름으로 스타일을 부여 합니다.');
const titleTest3 = document.querySelector('.change');
titleTest3.style.color = 'yellowgreen';
