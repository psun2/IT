// # 객체 Object

// 함수, 클래스 (틀) => 객체, 개체, object

// function 틀 () {} => new 틀 ()
// 생성자 함수로 객체 만들기 

// 생성자 함수
function A () {}
const a = new A();
console.log(a, typeof a); // A {} 'object'
console.log(A()); // undefined

// 생성하면서 데이터 넣기
function B(name, age) {
    console.log(name, age);
  }
const b = new B(); // undefined undefined
const c = new B('mark', 37); // mark 37
console.log(B()); // undefined undefined // undefined
// B를 호출하고 인자 값이 없어 B에 있는 name와 age가 undefined가 되고 console.log(B()); 도 undefined가 된다.
console.log(c);
// B {constructor: Object}
// <constructor>: "B"
// name: "B"

// 객체에 속성 추가하기
// property

// 값을 속성으로 넣기
function A() {
    this.name = name;
}
const a = new A(); // {name: 'Mark'}
console.log(a);
// A {name: "", constructor: Object}
// name: ""
// <constructor>: "A"
// name: "A"
{
    function A() {
        this.name = 'Mark';
    }
    const a = new A(); // {name: 'Mark'}
    console.log(a);
    // {name: "Mark", constructor: Object}
    // name: "Mark"
    // <constructor>: "A"
    // name: "A"
}

// 함수를 속성으로 넣기
function B() {
    this.hello = function () {
        console.log('hello');
    }
}
new B().hello(); // hello
(new B()).hello(); // hello

// new Function ()
// 19. 객체2(Object) 로 ...