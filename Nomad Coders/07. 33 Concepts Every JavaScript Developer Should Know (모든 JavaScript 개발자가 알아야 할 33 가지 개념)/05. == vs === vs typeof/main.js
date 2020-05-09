// TODO: 05. == vs === vs typeof

// TODO: typeof
// 내가 사용하는 type이 무엇인지 알려줍니다.
console.log(typeof '121212'); // string
console.log(typeof true); // boolean
console.log(typeof function () {}); // function
console.log(typeof 1); // number
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined

// TODO: typeof 의 버그
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object

// TODO: instanceof
// Array 인지 Object 인지 체크할때 사용합니다.
// instanceof 는 typeof 와 거의 비슷하지만, 유일한 차이점은
// primitive(원시값) (String, boolean, Number 등)에서 작동하지 않습니다.
console.log([] instanceof Array); // true
console.log({} instanceof Array); // false
console.log({} instanceof Object); // true
const myArray = new Array();
console.log(myArray instanceof Array); // true

// TODO: primitive(원시값) 에서의 instanceof
console.log('' instanceof String); // false
console.log(true instanceof Boolean); // false

// TODO: typeof의 적용범위
// null을 제외한 primitive(원시값)에서 작동합니다.
1;
('1');
true;
undefined;
function myFunction() {}

// TODO: instanceof 의 적용범위
const he = [];
he instanceof Array;
const she = {};
she instanceof Object;
