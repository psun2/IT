// - [GitHub](https://github.com/leonardomso/33-js-concepts)
// - [Nomad Coders YouTube](https://www.youtube.com/watch?v=IMyvCJKZSL8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=9)

// TODO:FIXME: 02. Primitive Types (기본 유형)

// primitive : 원시적인, 기초적인
// String
console.log('Hello', typeof 'Hello'); // Hello string
console.log('World', typeof 'World'); // World string
console.log('Hello "World"', typeof 'Hello "World"'); // Hello "World" string
console.log("Hello 'World'", typeof 'Hello "World"'); // Hello 'World' string
console.log('Hell\tWorld', typeof 'Hell\tWorld"'); // Hell	World string
console.log('Hell\nWorld', typeof 'Hell\nWorld"');
// Hell
// World string
console.log('Hell\\World\\', typeof 'Hell\\World\\"'); // Hell\World\ string

// Number
console.log(12, typeof 12); // 12 "number"
console.log(12.1, typeof 12.1); // 12.1 "number"

// Boolean
console.log(true, typeof true); // true "boolean"
console.log(false, typeof false); // false "boolean"
console.log("'true'", typeof "'true'"); // 'true' string
console.log("'false'", typeof "'false'"); // 'false' string

// Null : 존재하지 않음
console.log(null, typeof null); // null "object"

// Undefined : 정의되지 않음
console.log(undefined, typeof undefined); // undefined "undefined"
let hello;
console.log(`hello : ${hello}`); // hello : undefined
console.log(typeof hello); // undefined
console.log(`hello === undefined: ${hello === undefined}`);
// hello === undefined: true
console.log(`hello === null: ${hello === null}`);
// hello === null: false

// Nan : Noa A Number
console.log(NaN, typeof NaN); // NaN "number"
console.log(
  "Math.pow(5, 'hello') : ",
  Math.pow(5, 'hello'),
  typeof Math.pow(5, 'hello'),
);
// Math.pow(5, 'hello') :  NaN number
console.log("'hello' / 5 : " + 'hello' / 5, typeof 'hello' / 5);
// 'hello' / 5 : NaN NaN
