// # 자료형(Data Type)
let whatever = 'mark';
whatever = 37;
whatever = true;

// # 변수가 가지는 고정 타입이 업다
// 하지만 타입이 없는 것은 아니다.

// # 데이터 타입
// 기본 타입(Primitive values)
// Boolean
// null
// undefined
// Number
// String
// Symbol(ECMAScript 6 에 추가됨)
// 객체(Object)

// Boolean;
const isTrue = true;
const isFalse = false;
console.log(isTrue, typeof isTrue); // true boolean
console.log(isFalse, typeof isFalse); // false boolean

const a = new Boolean(false);
console.log(a, typeof a); // [Boolean: false] object

if (a) {
    console.log('false?'); // false?
}
// false?
// new Boolean 은 객체 Object의 형식이 되기 때문에 조건문에
// 조건 사용시 true가 된다.

const b = Boolean(false);
console.log(b, typeof b); // false boolean

if(b) { // b가 true 냐 ?고 묻는 조건문
    console.log('false?'); // 출력 내용 없음
}

// Null  // type = 대문자 
const n = null; // 값 = 소문자
console.log(n, typeof n); // null object

// Undefined
let u;
console.log(u, typeof u); // undefined undefined
u = undefined;
console.log(u, typeof u); // undefined undefined

if ( n == u ) {
    console.log( n == u ); //true  == 은사용 하지 않는다
} else {
    console.log('false'); 
}

if (n === u) {
    console.log(n === u);
} else {
    console.log('false'); // false
}

// Number
const number = 37;
console.log(number, typeof number); // 37 number

const numbers = 96.7;
console.log(numbers, typeof numbers); // 96.7 number

const nan = NaN;
console.log(nan, typeof nan); // NaN number

const _nan = Number('mark'); // Number = 일종의 형변환 숫자타입으로 바꿔줌.
console.log(_nan, typeof _nan); // NaN number

const nan_ = Number('48');
console.log(nan_, typeof nan_); // 48 number

// String
const _string = 'mark';
console.log(_string, typeof _string); // mark string

const string_ = 'mark' + " Lee";

const sum = _string + ' Lee';
console.log(sum, typeof sum); // mark Lee string

const template = `${sum}ECMA6 템플릿 레터럴 문법(숫자 1번키 옆에)`
console.log(template, typeof template); // mark LeeECMA6 템플릿 레터럴 문법(숫자 1번키 옆에) string

// Symbol
// 특정한 고유의 값을 사용하기 위해 사용
// new Symbol(); 을 만들수 없다
const s = Symbol();
const y = Symbol(37);
const m = Symbol('mark');
const o = Symbol('mark');

console.log(s, typeof s); // Symbol() symbol
console.log(m === o); // false