let count = 0; // 타입스크립트를 쓴다고 해서 무조건 뒤에 :자료형 을 붙이는 것이 아닙니다.
count += 1;
// count = '문자열'; // number타입의 변수에 문자열을 넣을시 에러
// 컴파일시 컴파일이 안되는 것은 아니지만 js 파일로 변경되는 순간 error 이 아닙니다.

const message: string = 'hello world';
const done: boolean = false;
const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];
// message.push(1); // 문자열 배열에 숫자 push 시 에러
// 컴파일시 컴파일이 안되는 것은 아니지만 js 파일로 변경되는 순간 error 이 아닙니다.

let mightBeUndefined: string | undefined = undefined;
mightBeUndefined = '문자열';

let nullableNumber: number | null = null;
nullableNumber = 10;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
// color = 'green'; // 목록에 없는 문자열 에러
// 컴파일시 컴파일이 안되는 것은 아니지만 js 파일로 변경되는 순간 error 이 아닙니다.

//--------------------------------function------------------------------------------------

// function sum(x: any, y:any) { // any => 어떠한 타입이든 받을 수 있음
function sum(x: number, y: number): number {
  // :number 함수의 return 결과 물의 type 설정
  //   return '악~'; // error
  return x + y;
}

const result = sum(1, 2); // sum 의 값을 반환 받는 result 의 type은 예측이 됩니다.

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

function returnNothing(): void {
  console.log('void');
}

returnNothing();

function returnStringOrNumber(): string | number {
  return '문자열';
  return 7;
}

const functionResut = returnStringOrNumber();
console.log(functionResut);
