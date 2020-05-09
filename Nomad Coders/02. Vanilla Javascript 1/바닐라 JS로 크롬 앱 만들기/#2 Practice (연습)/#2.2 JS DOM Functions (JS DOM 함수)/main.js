// TODO: #2.2 JS DOM Functions (JS DOM 함수)

console.log(document); // HTML
// 브라우저에서 실행 합니다.
//Node.js 환경에서 document 는 너무 커서 나오질 않습니다.

console.log(document.getElementById); // ƒ getElementById() { [native code] }
// 브라우저에서 실행 합니다.
//Node.js 환경에서 document 는 너무 커서 나오질 않습니다.

const title = document.getElementById('title');

console.log(title); // <h1 id="title">This works!</h1>
// 브라우저에서 실행 합니다.
//Node.js 환경에서 document 는 너무 커서 나오질 않습니다.

// TODO: DOM
// Document Object Module
// 자바스크립트는 우리의 HTML 태그를 가져다가 객체로 만듭니다.

console.error('Fuck');

title.innerHTML = 'Hi! From JS';
{
  /* <h1>This works!</h1> 의 텍스트를 Hi From JS 로 변경 시켜 줍니다. */
}
