"use strict";
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
