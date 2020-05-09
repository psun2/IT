console.log('👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀');
console.log('innerHTML, style');
console.log('기능을 알아보고 싶다면, 02. html, css 파일을 실행하세요.');
console.log('head 의 title 태그를 수정합니다.');

function changeDocumentTitle() {
  console.log('브라우저의 최상단인 window의 head태그의 title이 변경 됩니다.');
  console.log('Document => Test Test');
  document.title = 'Test Test';
}

const titleTest = document.getElementById('title');

console.log('h1 태그의 텍스트를 수정 또는 삽입 합니다.');
console.log('h1 태그의 스타일을 변경 합니다.');
function changeElementTitle() {
  console.log('h1 태그의 텍스트를 수정 또는 삽입 합니다.');
  title.innerHTML = 'h1 text modfy';

  console.log('h1 태그의 스타일을 변경 합니다.');
  title.style.color = 'inherit';
}

function start() {
  titleTest.addEventListener('click', changeDocumentTitle);
  titleTest.addEventListener('click', changeElementTitle);
  console.log('자바스크립트로 HTML 및 CSS 조작은 적합하지 않은 방법 입니다.');
  console.log(
    'HTML 과 CSS 는 용도에 맞게 각 HTML 과 CSS 에서 순수 조작하시길 바랍니다.',
  );
}

start();
