// Title : 논리연산자
// subTitle : 논리연산자도 사칙연산처럼 순서가 ?!

// !(NOT) => &&(AND) => ||(OR) 순으로 연산 됩니다.

// 연산과정
const value = !(true && false || true && false || !false);

// const value = !(true && false || true && false || true);

// const value = !(false || false || true);

// const value = !(false || true);

// const value = !(true);

// const value = false;

// 순 으로 연산됩니다.

console.log(value); // false 