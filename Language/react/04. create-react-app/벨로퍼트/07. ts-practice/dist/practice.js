"use strict";
let count = 0; // 타입스크립트를 쓴다고 해서 무조건 뒤에 :자료형 을 붙이는 것이 아닙니다.
count += 1;
// count = '문자열'; // number타입의 변수에 문자열을 넣을시 에러
// 컴파일시 컴파일이 안되는 것은 아니지만 js 파일로 변경되는 순간 error 이 아닙니다.
const message = 'hello world';
const done = false;
const numbers = [1, 2, 3];
const messages = ['hello', 'world'];
// message.push(1); // 문자열 배열에 숫자 push 시 에러
// 컴파일시 컴파일이 안되는 것은 아니지만 js 파일로 변경되는 순간 error 이 아닙니다.
let mightBeUndefined = undefined;
mightBeUndefined = '문자열';
let nullableNumber = null;
nullableNumber = 10;
let color = 'red';
color = 'yellow';
// color = 'green'; // 목록에 없는 문자열 에러
// 컴파일시 컴파일이 안되는 것은 아니지만 js 파일로 변경되는 순간 error 이 아닙니다.
//--------------------------------function------------------------------------------------
// function sum(x: any, y:any) { // any => 어떠한 타입이든 받을 수 있음
function sum(x, y) {
    // :number 함수의 return 결과 물의 type 설정
    //   return '악~'; // error
    return x + y;
}
const result = sum(1, 2); // sum 의 값을 반환 받는 result 의 type은 예측이 됩니다.
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
function returnNothing() {
    console.log('void');
}
returnNothing();
function returnStringOrNumber() {
    return '문자열';
    return 7;
}
const functionResut = returnStringOrNumber();
console.log(functionResut);
class Circle {
    // radius: number;
    // constructor(radius: number) {
    //   this.radius = radius;
    // }
    constructor(radius) {
        this.radius = radius;
        // 맴버 변수 자동 등록
        // public, private 는 ts 에서 제한을 둘수 있지만,
        // 자바스크립트로 변환 되면 의미가 없습니다....
    }
    getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
}
class Ractangle {
    // width: number;
    // height: number;
    // constructor(width: number, height: number) {
    //   this.width = width;
    //   this.height = height;
    // }
    constructor(width, height) {
        this.width = width;
        this.height = height;
        // 맴버 변수 자동 등록
        // public, private 는 ts 에서 제한을 둘수 있지만,
        // 자바스크립트로 변환 되면 의미가 없습니다....
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const ractangle = new Ractangle(2, 5);
const shape = [circle, ractangle];
shape.forEach((shape) => {
    console.log(shape.getArea());
});
const person = {
    name: '김사람',
};
const expert = {
    name: '김개발',
    skills: ['javascript', 'react', 'typescript'],
};
const person = {
    name: '김사람',
};
const expert = {
    name: '김개발',
    skills: ['javascript', 'react', 'typescript'],
};
const people = [person, expert];
const color = 'orange';
// const color: Color = 'green'; // error
//--------------------------------Generics------------------------------------------------
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 2 });
// Generics 를 사용하면 실제 파라미터의 값을 유추를 해서 merged . 으로 접근할때,
// 안에 무엇이 들어 있는지 볼 수 있습니다.
// 파라 미터로 들어오는 param 의 type 이 정해져 있지 않는 경우
function wrap(param) {
    return {
        param,
    };
}
const wrapped = wrap(10);
const wrappedS = wrap('문자열');
const imtes = {
    list: ['a', 'b', 'c'],
    value: 1,
};
const imtems2 = {
    list: [1, 2, 3],
    value: 'hello',
};
// Class 에서의 Generics
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
while (queue.length > 0) {
    console.log(queue.dequeue());
}
