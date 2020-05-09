// # Reference : MDN
// https://developer.mozilla.org/ko/docs/Web/API/Console/error

// 이 부분은 설명을 요하는 부분이 별로 없어 자세한 내용은 위 MDN에서 확인합니다.

// 사실 작성하면서, 이부분을 다루지 않고 갈 수도 있엇지만,
// JAVA와 병행으로 공부를 진행 중에 자바의 입출력이라는 단원에서
// Scanner 객체와 File 객체를 배워, 간략하게 나마 자바스크립트의 입출력에 대해 알아봅니다.

// Title : console.error();
// subtitle :  console 문서의 콘솔에 텍스트를 출력하기

// console.log 가 지겨울때 사용해줍니다.

const a = 1;

const b = "안녕하세요";

const c = [1,2,3,4,5];

const d = {a:1, b:2, c: 3, d: 4};

class e {

}

console.error(a); // 1
console.error(b); // 안녕하세요
console.error(c); // [ 1, 2, 3, 4, 5 ]
console.error(d); // { a: 1, b: 2, c: 3, d: 4 }
console.error(e); // [Function: e]
console.error("Hello World"); // Hello World
console.error(2); // 2
