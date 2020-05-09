// # 클래스 class 

// get set
// 게터, 세터

// get, set
class A {
    _name='no name';

    get name() {
        return this._name
    }

    set name(value) {
        this._name = valu + '!!!';
    }
}

const a = new A();
console.log(a);
//A {_name: "no name"}
a.name = 'Mark' //이때 set 함수가 실행 되어 'Mark' 라는 단어를 받아 들인다
console.log(a);
// A {_name: "Mark!!!"}
class B {
    _name='no name';

    get name() {
        return this._name + '@@@'
    }

    set name(value) {
        this._name = valu + '!!!';
    }
}

const b = new B();
console.log(b);
b.name = 'Park';
console.log(b);
console.log(b.name);
console.log(b._name);

// readonly
class C {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }
}

const c = new C();
console.log(c);
c.name = 'Mark';
console.logc(c);

// 위에까지 여기 강사가 문법 오류 난거 같음 안됨 .

// static 변수, 함수
// 객체가 아니고, 클래스의 변수와 함수

// static 변수, 함수
class A {
    static age = 27;
    static hello() {
        console.log(A.age);
    }
}
console.log(A, A.age);
// class A {
//     static age = 27;
//     static hello() {
//         console.log(A.age);
//     }
// } 27
A.hello();
// 27

class B {
    age = 27;
    static hello() {
        console.log(this.age);
    }
}
console.log(B, B.age);
// class B {
//     age = 27;
//     static hello() {
//         console.log(this.age);
//     }
// } undefined
B.hello();
// undefined

class C {
    static name = '이 클래스의 이름을 C 가 아니다.'
}
console.log(C);
// class C {
//     static name = '이 클래스의 이름을 C 가 아니다.'
// }