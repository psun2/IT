// # 클래스 class 

// 객체를 만들 수 있는 새로운 방법
// es6 class

// class
// 선언적 방식
class A {}

console.log(new A());
// A {constructor: Object}
// <constructor>: "A"
// name: "A"

// clsaa 표현식을 변수에 할당
const B = class {};

console.log(new B());

// 선언적 방식이지만 호이스팅은 일어나지 않는다.
new CDATASection();

class C {};
// c is not defined

// constructor
// 생성자

// constructor
class D {}
console.log(new D());

class E {
    constructor() {
        console.log('constructor');
    }
}
console.log(new E());
// constructor 
// E {constructor: Object}
// <constructor>: "E"
// name: "E"

class F {
    constructor(name, age) {
        console.log('costructor', name, age);
    }
}
console.log(new F('mark', 37));
// costructor mark 
// 37
// F {constructor: Object}
// <constructor>: "F"
// name: "F"
console.log(new F());
// costructor 
// undefined
// undefined
// F {constructor: Object}
console.log(new F(), typeof new F());
// F {constructor: Object}
// <constructor>: "F"
// name: "F"
// "object" 