class Parent {   // static 변수를 갖은 부모 클래스
    static name = 'Park_parent';
    say () {
        console.log(this.name)
    }
}

console.log(Parent);
// [Function: Park_parent] { name: 'Park_parent' }
console.log(Parent.name); 
// Park_parent  <-----------------------------------------------------------------------------------> static 변수 사용시 객체 생성 없이도 변수에 접근이 가능하다.
const p = new Parent();
console.log(p);
// Park_parent {}
p.say();
// undefined  ==> new 생성시 static 변수에 접근이 안됨 !!!
console.log(p.name);
// undefined

class Parent2 {   // static 변수를 갖지 않은 부모 클래스
    name = 'Park_child';
    say () {
        console.log(this.name)
    }
}

console.log(Parent2.name)
// Parent2  <-----------------------------------------------------------------------------------> 반면, static 변수를 쓰지 않으면 객체를 생성 해야지만, 변수에 접근이 가능하다.
const p2 = new Parent2();
console.log(p2);
// Parent2 { name: 'Park_child' }
p2.say();
// Park_child
console.log(p2.name);
// Park_child



class Child extends Parent {}; // static 변수를 갖은 부모 클래스를 상속 받은 클래스
// console.log(child); error
console.log(Child.name);
const cc = new Child();
console.log(cc);
// Child {}
console.log(cc.name);
// undefined
cc.say();
// undefined

class Child2 extends Parent2 {}; // static 변수를 갖지 않은 부모 클래스를 상속 받은 클래스
// console.log(child2); error
console.log(Child2.name);
const ccc = new Child2();
console.log(ccc);
// Child2 { name: 'Park_child' }
console.log(ccc.name);
// Park_child
ccc.say();
// Park_child