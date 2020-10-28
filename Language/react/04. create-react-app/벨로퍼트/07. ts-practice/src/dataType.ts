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
