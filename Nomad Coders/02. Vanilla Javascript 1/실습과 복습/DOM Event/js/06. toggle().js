console.log('👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀');
console.log('toggle()');
console.log('기능을 알아보고 싶다면, 06. toggle().js 파일을 실행하세요.');

const title6 = document.getElementById('title5');
const change__color3 = 'change__color';

console.log('contains() 함수를 이용하지 않고 더 간편하게 코드 짜기');

function handleClassAddAndRemoveToggle() {
  title6.classList.toggle(change__color3);
}
title6.addEventListener('click', handleClassAddAndRemoveToggle);
