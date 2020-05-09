// # 객체 Object

// 표준 내장 객체

// 표준 내장 객체 : Array
const a = new Array("red", "black", "white");
console.log(a); // ["red", "black", "white"]
console.log(a, typeof a); // ["red", "black", "white"]"object" 
console.log(a instanceof Array); // true
console.log(a instanceof Object); // true

const b = ['red', 'green', 'yellow']; // 리터럴 표현법
console.log(b, typeof b); // ["red", "green", "yellow"] "object" 
console.log(b instanceof Array); // true

console.log(b.slice(0, 1));
// ["red"]
// 0: "red"
console.log(Array.prototype.slice);
// function slice() {}
// <constructor>: "Function"
// name: "Function"
console.log(Object.prototype.slice); // undefined