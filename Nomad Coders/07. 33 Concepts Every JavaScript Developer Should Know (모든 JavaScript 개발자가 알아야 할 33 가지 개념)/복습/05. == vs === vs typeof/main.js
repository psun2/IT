// - [GitHub](https://github.com/leonardomso/33-js-concepts)
// - [Nomad Coders YouTube](https://www.youtube.com/watch?v=4UZ9yNitwiw&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=6)

// TODO:FIXME: 05. == vs === vs typeof

// TODO: typeof
console.log('typeof');
console.log(`typeof "121212" : ${typeof '121212'}`); // typeof "121212" : string
console.log(`typeof "true" : ${typeof true}`); // typeof "true" : boolean
console.log(`typeof "function(){}" : ${typeof function () {}}`); // typeof "function(){}" : function
console.log(`typeof 1 : ${typeof 1}`); // typeof 1 : number
console.log(`typeof undefined : ${typeof undefined}`); // typeof undefined : undefined
console.log(`typeof true : ${typeof true}`); // typeof true : boolean
console.log(`typeof(true) : ${typeof true}`); // typeof(true) : boolean
console.log(`typeof "" : ${typeof ''}`); // typeof "" : string
console.log(`typeof "2" : ${typeof '2'}`); // typeof "2" : string

console.log('-----------------------------------------------------');

// TODO: typeof 가 버그 나는 경우
console.log('typeof 가 버그 나는 경우');
console.log(`typeof null : ${typeof null}`); // typeof null : object
console.log(`typeof [] : ${typeof []}`); // typeof {} : object
console.log(`typeof {} : ${typeof {}}`); // typeof {} : object

console.log('-----------------------------------------------------');

// TODO: typeof 의 버그를 피해가는 방법 : instanceof
console.log('typeof 의 버그를 피해가는 방법 : instanceof');
console.log(`[] instanceof Array : ${[] instanceof Array}`); // [] instanceof Array : true
console.log(`{} instanceof Array : ${{} instanceof Array}`); // {} instanceof Array : false
console.log(`{} instanceof Array : ${{} instanceof Object}`); // {} instanceof Array : true

console.log('-----------------------------------------------------');

// TODO: instanceof 는 primitive에선 작동하지 않습니다.
console.log('instanceof 는 primitive에선 작동하지 않습니다.');
console.log(`"" instanceof String : ${'' instanceof String}`); // "" instanceof String : false
console.log(`true instanceof Boolean : ${true instanceof Boolean}`); // true instanceof Boolean : false

console.log('-----------------------------------------------------');

// TODO: primitive 의 종류
console.log('primitive 의 종류');
console.log(`primitive : ${typeof '1'}`);
console.log(`primitive : ${typeof 1}`);
console.log(`primitive : ${typeof undefined}`);
console.log(`primitive : ${typeof function () {}}`);

console.log('-----------------------------------------------------');

// TODO: function
console.log('function');
console.log(`typeof Number : ${typeof Number}`); // typeof String : function
console.log(`typeof String : ${typeof String}`); // typeof String : function
console.log(`typeof Boolean : ${typeof Boolean}`); // typeof Boolean : function

console.log('-----------------------------------------------------');
// TODO: calculator(계산기) 함수 작성시 오류를 피해가는 조건
console.log('calculator(계산기) 함수 작성시 오류를 피해가는 조건');
console.log('function sum(a, b) {');
console.log("\tif (typeof a !== typeof '' && typeof b !== typeof '') {");
console.log('\t\treturn a + b;');
console.log("\t} else if (typeof a === typeof '') {");
console.log('\t\treturn `${a}의 값이 숫자가 아닙니다.`;');
console.log("\t} else if (typeof b === typeof '') {");
console.log('\t\treturn `${b}의 값이 숫자가 아닙니다.`;');
console.log('\t}');
console.log('}');
console.log("console.log(sum('1', 2));");

function sum(a, b) {
  if (typeof a !== typeof '' && typeof b !== typeof '') {
    return a + b;
  } else if (typeof a === typeof '') {
    return `${a}의 값이 숫자가 아닙니다.`;
  } else if (typeof b === typeof '') {
    return `${b}의 값이 숫자가 아닙니다.`;
  }
}
// console.log(sum('1', 2));

function sum(a, b) {
  let result;
  let result_a;
  let result_b;
  const say = (message) => {
    console.log(message);
  };
  if (typeof a === typeof 1 && typeof b === typeof 1) {
    result = a + b;
    say(result);
  } else if (typeof a === typeof '') {
    result_a = `${a}의 값이 문자열입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_a);
  } else if (typeof b === typeof '') {
    result_b = `${b}의 값이 문자열입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_b);
  } else if (typeof a === typeof undefined) {
    result_a = `${a}의 값이 undefined입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_a);
  } else if (typeof b === typeof undefined) {
    result_b = `${b}의 값이 undefined입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_b);
  } else if (typeof a === typeof function () {}) {
    result_a = `${a}의 값이 function입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_a);
  } else if (typeof b === typeof function () {}) {
    result_b = `${b}의 값이 function입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_b);
  } else if (typeof a === typeof true || typeof a === typeof false) {
    result_a = `${a}의 값이 Boolean type 입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_a);
  } else if (typeof b === typeof true || typeof b === typeof false) {
    result_b = `${b}의 값이 Boolean type 입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_b);
  } else if (a instanceof Array) {
    result_a = `${a}의 값이 Array 입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_a);
  } else if (b instanceof Array) {
    result_b = `${b}의 값이 Array 입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_b);
  } else if (a instanceof Object) {
    result_a = `${a}의 값이 Object 입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_a);
  } else if (b instanceof Object) {
    result_b = `${b}의 값이 Object 입니다. 함수에 전달한 argument를 확인해주세요.`;
    say(result_b);
  }
  // return result_a + result_b;
}
sum(true, []);
