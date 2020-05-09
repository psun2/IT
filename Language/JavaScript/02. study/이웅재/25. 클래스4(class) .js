 // # 클래스 class 

//  extends
// 클래스의 상속 기본

// 상속 기본
class Parent {
    name = 'Lee';

    hello () {
        console.log('hello', this.name);
    }
}

class child extends Parent {}

const p = new Parent();
const c = new child();

console.log(p);
// Parent { name: 'Lee' }
console.log(c);
// child { name: 'Lee' }
c.hello();
// hello Lee
c.name = 'Anna';
c.hello();
// hello Anna

class child2 extends Parent {
    text = '안녕하세요 저는 자식입니다.';
    hello2 = () => {
        console.log(this.text);
    }
}
const c2 = new child2();
console.log(c2);
// child2 { name: 'Lee', hello2: [Function: hello2] }
c2.hello();
// hello Lee
c2.hello2();
// 안녕하세요 저는 자식입니다.
c2.name = 'Park';
c2.text = '사실 손자 입니다.'
c2.hello();
// hello Park
c2.hello2();
// 사실 손자 입니다.

// override
// 클래스의 상속 멤버 변수 및 함수 오버라이딩, 추가

// 변수, 함수 추가 및 오버라이딩
class Parent3 {
    name = 'Mark';

    hello () {
        console.log('hello', this.name);
    }
}

class Child3 extends Parent3 {
    age = 37;

    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p3 = new Parent3();
const c3 = new Child3();

console.log(p3);
// Parent3 { name: 'Mark' }
console.log(c3);
// Child3 { name: 'Mark', age: 37 }
p3.hello();
// hello Mark
c3.hello();
// hello Mark 37

// # 오버라이딩
// 클래스의 상속에 있어, 부모가 가지고 있는 함수등 변수의 이름을
// 상속 받으려는 자식 클래스에서 재정의 해줌으로서 부모 의 함수, 변수를
// 덮어 씌워주는 현상

c3.name = 'Anna';
c3.hello();
// hello Anna 37

// super
// 클래서의 상속 생성자 함수 변경
class ParentSuper {
    name;

    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('hello' ,this.name);
    }
}

class ChildSuper extends ParentSuper {
    age;
    constructor(name, age) {
        super(name);  // super  =  부모의 constructor 이다. 함수 생성자의 ParentSuper.caa(this, name)  과 같음
        this.age = age;
    }

    hello() {
        console.log('hello', this.name, this.age);
    }
}

const ps = new ParentSuper('Mark');
const cs = new ChildSuper('park', 37);

console.log(ps);
// ParentSuper { name: 'Mark' }
console.log(cs);
// ChildSuper { name: 'park', age: 37 }
ps.hello();
// hello Mark
cs.hello();
// hello park 37

// static
// 클래스의 상속 static 상속

// static 상속
class ParentStatic {
    static age = 37;
}
class ChildStatic extends ParentStatic {}

console.log(ParentStatic.age);
// 37
console.log(ChildStatic.age);
// 37
