// TODO: 06. Function Scope, Block Scope and Lexical Scope (기능 범위, 블록 범위 및 어휘 범위)

// TODO: Scope 란 ?
// variable이 존재하는가 아닌가? 즉, 여기에서 variable이 정의가 되었나 아닌가 입니다.
if (true) {
  const hello = 'hi';
  console.log(hello); // hi
}

// console.log(hello);
// Uncaught ReferenceError: hello is not defined
// (잡히지 않은 ReferenceError : hello가 정의되지 않았습니다)
//     at main.js:9

// hello는 if block 안에서만 존재합니다.
// 그러므로 외부에서는 hello 변수에 접근 할 수 없습니다.

// TODO: Global scope
// Global scope 는 무엇이든, 어디에서든 접근이 가능 합니다.
const h = 'hello';

function a() {
  console.log(h);
  const b = 'b';
  console.log(b);
}
a(); // hello
// console.log(b);
// Uncaught ReferenceError: b is not defined
// (잡히지 않은 ReferenceError : b가 정의되지 않았습니다)
// at main.js:28

// TODO: var 키워드의 scope
if (true) {
  var hello = 'h';
}

console.log(hello); // h

// TODO: const 와 let은 block scope 로써 근처의 {} 이렇게 생긴 block 안에서만 작동합니다.
// 하지만 var 은 Global scope 로써 {} 밖에서도 접근이 가능하여, 잔 버그의 토대가 되니 사용을 지양합니다.

// TODO: scope 의 다른 예시
function b() {
  const c = 'c';
  console.log(
    '최상위 함수 즉 부모 함수에서는 자신 내부에서 선언된 변수는 접근이 가능하나, 자식 함수들의 변수에 접근이 불가능합니다.',
  );
  //   console.log(c, e, nn);
  //   Uncaught ReferenceError: e is not defined
  //   잡히지 않은 ReferenceError : e가 정의되지 않았습니다
  console.log(c); // c

  function d() {
    const e = 'e';
    console.log(
      '상위 함수 즉 부모 함수에 존재하는 변수는 접근이 가능하나, 자식 함수에 있는 변수는 접근 할 수 없습니다.',
    );
    // console.log(e, c, nn);
    // Uncaught ReferenceError: nn is not defined
    // 잡히지 않은 ReferenceError : nn이 정의되지 않았습니다
    console.log(e, c); // e c

    function f() {
      const nn = 'nn';
      console.log(
        '최 하위에 있는 f함수는 상위 함수들에 있는 변수들에게 접근이 가능합니다.',
      );
      console.log(nn, e, c); // nn e c
    }
    f();
  }
  d();
}

b();

// TODO: Global scope 를 사용하여, Api에 전달하기
let bye;
if (true) {
  bye = 'see you';
}
// sendApi(hello);
console.log(bye); // see you
