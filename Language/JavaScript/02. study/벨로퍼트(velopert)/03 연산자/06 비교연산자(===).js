// Title : 비교연산자
// subTitle : 비교연산자 === ? == ? 어떤 비교연산자를 사용하지 ?!


// === : 두 값을 비교할때는 =(equal) 을 세번 사용 합니다. 
// 참고로 java 언어에서는 변수에 type을 설정해 주기때문에  == 로도 충분합니다.
const a = 1;
const b = 1;

const equals = a === b;
console.log(equals); // true

const _a = 1;
const _b = 2;

const _equals = _a === _b;
console.log(_equals); // false

// == : equals 를 두번 으로 사용 할때
// type을 고려하지 않고 비교 합니다. 
const c = 1;
const _c = "1";

const twoEquals = c == _c;
console.log(twoEquals); // true
// 문자열의 1과 숫자1을 true 의 값을 주는 문제점이 발생합니다.
// 즉, type을 고려 하지 않습니다. 

const d = false;
const _d = 0;

const twoEquals2 = d == _d;
console.log(twoEquals); // true
// 물론 0도 false 의 값을 가지고 있긴 하지만,
// 0과 false 가 똑같나요 ?!

const e = true;
const _e = 1;

const twoEquals3 = e == _e;
console.log(twoEquals3); //true

const f = null;
const _f = undefined;

const twoEquals4 = f === _f;
const twoEquals5 = f == _f;
console.log(twoEquals4); //false
console.log(twoEquals5); //true