 // # 클래스 class 

// 맴버 변수
// 객체의 프로퍼티

// 맴버 변수
class A {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
  }
  
  console.log(new A('Mark', 37))
  // A {name: "Mark", age: 37, constructor: Object}

//  class field 는 런타임 확인
class B {
    name;
    age;
}
console.log(new B());
// 다른 곳에서 는 문법적 에러가 나온다.
// 허나 node에서는 값을 찾을 수 있다.
// B { name: undefined, age: undefined }

class C {
    name = 'no name';
    age = 0;
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
console.log(new C('Mark', 37))
// C { name: 'Mark', age: 37 }
// 다른 곳에서 는 문법적 에러가 나온다.
// 허나 node에서는 값을 찾을 수 있다.

// 맴버 함수
class D {
    hello1() {
        console.log('hello1', this);
    }
    hello2 = () => {
        console.log('hello2', this);
    }
    hello3 = function () {
        console.log('hello3', this);
    } 
}

new D().hello1();
// hello1 D { hello2: [Function: hello2] }
new D().hello2()
// hello2 D { hello2: [Function: hello2] }
new D().hello3();
// hello3 D { hello2: [Function: hello2], hello3: [Function: hello3] }

class E {
    name = 'Mark';

    hello () {
        console.log('hello', this.name);
    }
}

new E().hello();
// hello Mark