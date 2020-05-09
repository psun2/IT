console.log('👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀');
console.log('contains()');
console.log('기능을 알아보고 싶다면, 05. contains().js 파일을 실행하세요.');

const title5 = document.getElementById('title4');
const change__color2 = 'change__color';

console.log('contains() 함수를 이용한 error 해결');
console.log(
  'contains()는 문자열을 비교해 포함하고 있으면 true를 반환 포함하지않으면 false를 반환 합니다.',
);

function handleClassAddAndRemoveContains() {
  const Comparisons = title5.classList.contains(change__color2);
  if (Comparisons) {
    title5.classList.remove(change__color2);
  } else {
    title5.classList.add(change__color2);
  }
}
title5.addEventListener('click', handleClassAddAndRemoveContains);
