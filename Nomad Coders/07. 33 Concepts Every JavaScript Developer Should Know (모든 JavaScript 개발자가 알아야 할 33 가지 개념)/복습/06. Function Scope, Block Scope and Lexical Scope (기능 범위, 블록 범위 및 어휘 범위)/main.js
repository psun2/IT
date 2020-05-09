// - [GitHub](https://github.com/leonardomso/33-js-concepts)
// - [Nomad Coders YouTube](https://www.youtube.com/watch?v=WrjlQstaCwo&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=5)

// TODO:FIXME: 06. Function Scope, Block Scope and Lexical Scope (기능 범위, 블록 범위 및 어휘 범위)

// TODO: Block Scope
// 블록 내에서만 접근이 가능 합니다.
console.log('Block Scope \n 블록 내에서만 접근이 가능 합니다.');

if (true) {
  const hello = 'hi';
  console.log(hello); // hi
}

// console.log(hello);
// main.js:10 Uncaught ReferenceError: hello is not defined
// main.js : 10 Uncaught ReferenceError : hello가 정의되지 않았습니다

console.log('--------------------------------------------------');

// TODO: global Scope
console.log('global Scope \n 무엇이든 접근 할 수 있습니다.');
// 무엇이든 접근 할 수 있습니다.

const h = 'hello';

function a() {
  console.log(h);
  const b = 'b';
}
a(); // hello
// console.log(b);
// main.js:28 Uncaught ReferenceError: b is not defined
// main.js : 28 잡히지 않은 ReferenceError : b가 정의되지 않았습니다

console.log('--------------------------------------------------');

// TODO: var 키워드
console.log('var 키워드 \n block scope 내부의 변수도 접근이 가능합니다.');
// block scope 내부의 변수도 접근이 가능합니다
// var 을 사용하면 안되는 이유 중 하나 입니다.

if (true) {
  var hi = 'h';
}
console.log(hi); // h

function any() {
  const b = 'b';
  console.log(b);
  // console.log(d); // 접근 불가
  // console.log(f); // 접근 불가
  function c() {
    const d = 'd';
    console.log(b);
    console.log(d);
    // console.log(f); // 접근 불가
    function e() {
      const f = 'f';
      console.log(b);
      console.log(d);
      console.log(f);
    }
    e();
  }
  c();
}
any();

console.log('--------------------------------------------------');

// TODO: Block Scope 내의 변수 사용하기
console.log(
  'Block Scope 내의 변수 사용하기 \n const(상수)가 아닌 let 키워드로 global 로 정의 를 해줍니다.',
);
// const(상수)가 아닌 let 키워드로 global 로 정의 를 해줍니다.

let hello;
console.log(hello); // undefined

if (true) {
  hello = 'hello';
}
console.log(hello); // hello
