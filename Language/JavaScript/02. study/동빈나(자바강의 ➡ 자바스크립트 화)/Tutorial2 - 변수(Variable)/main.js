// TODO: Totorial2

const PI = 3.141592;
// final static double PI = 3.141592;
//	static 이란 해당 클래스에서만 공유하는 변수 입니다.
//	클래스의 상속을 받던, 인스턴스를 생성을 하던, 다른 클래스에선 사용이 불가능 합니다.

const INT_MAX = 2147483647;
// final static int INT_MAX = 2147483647;

let intType = 100;
// int intType = 100;

let doubleType = 150.5;
// double doubleType = 150.5;

let stringType = '나동빈';
// String stringType = "나동빈";

console.log(intType);
console.log(doubleType);
console.log(stringType);

let r = 30;
console.log(r * r * PI);

let max = INT_MAX;
let min = INT_MAX + 1;
console.log(max); // 2827.4328
// System.out.println(max); // int 형이 가지는 최대의 값 2147483647

console.log(min); // 2147483647
// System.out.println(min); // int 형이 가지는 최소의 값 -2147483648
// overflow란
// 과다, 하천의 범람
// 가장 큰 값에서 가장 작은 값으로 돌아가는 현상을 의미합니다.

// 자바와 달리 자바스크립트는 오버플로 현상이 일어나지 않습니다.

let a = 1;
let b = 2;

console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b} (/ 는 몫만을 나타냅니다.)`);
console.log(`a % b = ${a % b} (% 는 나머지를 나타냅니다.)`);

//	int c = 0.5;
//	정수형type 의 변수에 실수를 넣으면 에러가 납니다.
// int c = (int) 0.5;
// System.out.println(c); // 0
// double d = 0.5;
// int e = (int) (d  +  0.5);
// System.out.println("정수형 변환과 함께 반올림 " + e); // 1
// double f = 0.4;
// double g = 0.6;
// int h = (int) (f + 0.5);
// int i = (int) (g + 0.5);
// System.out.println("정수형 변환과 함께 반올림 " + h ); // 0
// System.out.println("정수형 변환과 함께 반올림 " + i); // 1

// TODO: 자바스크립트는 정수 와 실수의 type에 관계없이 변수에 저장 할 수 있습니다.
const c = 0.5;
console.log(c);

// TODO: 자바스크립트의 올림과 버림
console.log('0.5 + 0.5 : ' + (0.5 + 0.5));
console.log(c + '의' + '올림 : ' + Math.ceil(c));
console.log(c + '의' + '버림 : ' + Math.floor(c));

const d = 0.4;
console.log('0.4 + 0.5 : ' + (0.4 + 0.5));
console.log(d + '의' + '올림 : ' + Math.ceil(d));
console.log(d + '의' + '버림 : ' + Math.floor(d));

const e = 0.6;
console.log('0.6 + 0.5 : ' + (0.6 + 0.5));
console.log(e + '의' + '올림 : ' + Math.ceil(e));
console.log(e + '의' + '버림 : ' + Math.floor(e));
