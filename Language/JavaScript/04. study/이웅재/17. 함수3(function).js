// # 함수 function

// new 함수();
// 생성자 함수

// 생성자 함수를 이용하여 새로운 [객체를 만들어 내는 방법]!!
function Person (name, age) {
    console.log(this); // preson {} ;
    this.name = name;
    this.age = age;
}

const p = new Person('mark' ,37);
console.log(p, p.name, p.age);
// Person {name: "mark", age: 37, constructor: Object}
// "mark" 
// 37

const a = new Person('Anna', 26);
console.log(a, a.name, a.age);
// Person {name: "Anna", age: 26, constructor: Object}
// "Anna" 
// 26

// arrow 함수로는 생성자 함수를 통해 새로운 객체를 만들 수 없다.
// const Cat = (name, age) => { // error
//     console.log(this); // error
//     this.name = name; // error
//     this.age = age; // error
// } // error

// const c = new Cat('고양이', 3); // error

// 함수 안에서 함수를 만들어 리턴

// 함수를 호출하면 함수를 만들어서 리턴
function plus(base) {
    return function(num){
        return base + num;
    }
}

const plus5 = plus(5);
plus5(10); // error
console.log(plus5(10)); // 15

const plus7 = plus(7);
console.log(plus7(8)); // 15

// 함수를 호출할 때, 인자로 함수를 사용

// 함수를 인자로 하여 함수를 호출
function hello(callback) {
    console.log('hello');
    callback();
}

hello ( () => console.log('콜백') )
hello ( function() {
    console.log('콜백');
} )

// hello 라는 함수를 만들고 그 안에서 인자값으로 받아 오는 함수를 호출 시킨다.
// hello를 호출 하면서 인자 값으로 함수를 준다.
// 이것을 callback 함수라 한다.
// 순차 적으로 hello 와 콜백이 출력된다.