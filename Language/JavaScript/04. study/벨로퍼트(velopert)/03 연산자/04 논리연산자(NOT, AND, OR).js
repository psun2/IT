// Title : 논리연산자
// subTitle : 논리연산자 boolean 을 처리해버렷 ! 

// Title : ! (NOT)
// subTitle : 현재 상황의 blooean 값을 반전 시켜줍니다.
const a = true;
console.log(a); // true

const _a = !true
console.log(_a); // false

const b = false; 
console.log(b); // false

const _b = !false; 
console.log(_b); // true


// Title : && AND
// subTitle : 양쪽이 모두 true 값일때만 true 나머지 경우는 false
const c = true && true;
console.log(c); //true

const _c = false && true;
console.log(_c); // false

const d = true && false;
console.log(d); // false

const _d = false && false;
console.log(_d); // false

// Title : || OR
// subTitle : 양쪽 중 한 곳만 true 여도 true
const e = true || true;
console.log(e); // true

const _e = false || true;
console.log(_e); // true

const f = true || false;
console.log(f); // true

const _f = false || false;
console.log(_f); // false