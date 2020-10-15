# JavaScript 문법

# 조건문

if(표현식) {
    표현식이 참으로 평가될 때, 실행되는 문장들의 모음
    }

if () {} else {}

if () {} elseif () {} else {}

# 표현식
!(Not), &&(AND), ||(OR)

# 삼항 연산자
let n = 5;
console.log(n % 5 === 0 ? A : B); // A

# switch case
switch(){
    case1: {
        break;
    }
    default: {
        
    }
}

# 반복문 (for)
for (초기화; 반복 조건; 반복이 된 후 실행되는 코드) {
    반복이 되는 코드 블럭
}

# 반복문 (while)
while(조건) {
    조건이 거짓이 될 때까지 반복 실행
}

# do while
do {
    조건이 거짓이 될 떄까지 반복 실행
} while (조건);   // 무조건 한번은 실행 된다.

# for of 
<!-- iterable
배열만 ... ?
for of -->
for (const i of [1,2,3]) {
    console.log(i);
}

# for in
<!-- 모든 프로퍼티
배열 + 객체 까지 ...?
for in -->
Object.prototype.test = function () {} ;
for (const i in {a: 1, b: 2, c: 3}) {
    console.log(i);
}

# 함수 function (선언적 방식)
function hello() {} ;

# 함수 function (익명 방식)
const hello = function () {};

# 함수 function (생성자 함수 방식)
const hello = new function ();
new Function(인자1, 인자2, ..., 함수의 바디);
매개변수가 문자열로 들어간다, 바디부분 또한 문자열로 들어간다
const sum = new Function('a', 'b', 'c', 'return a + b + c');

# arrow function (es6)
() => {}; 

# 생성자 함수를 이용하여 새로운 [객체를 만들어 내는 방법]!!
function Person (name, age) {
    this.name = name;
    this.age = age;
}

const p = new Person('mark' ,37);
console.log(p, p.name, p.age);
Person {name: "mark", age: 37, constructor: Object}
"mark" 
37

# callback function
function hello(callback) {
    console.log('hello');
    callback();
}

hello ( () => console.log('콜백') )

hello 라는 함수를 만들고 그 안에서 인자값으로 받아 오는 함수를 호출 시킨다.
hello를 호출 하면서 인자 값으로 함수를 준다.
이것을 callback 함수라 한다.

# 생성자 함수
function A (paremeter)) {}
const a = new A(agument);
console.log(a, typeof a);
{parameter : agument}

# new Object()
const c = new Object({parameter : agument}); // 리터럴 방식 
console.log(c, typeof c);
{parameter : agument}

# class
<!-- 선언적 방식 -->
class A {}
console.log(new A());
<!-- clsaa 표현식을 변수에 할당 -->
const B = class {};
console.log(new B());

# constructor 생성자
class A {
    constructor () {
        console.log('constructor')
    }
}
console.log(new A());