// TODO: Totorial3
// TODO:자바 기초 프로그래밍 강좌 3강 - 자료형(Data Type) (Java Programming Tutorial 2017 #3)

// TODO: 평균 구하기

// double a = 10.3;
// double b = 9.6;
// double c = 10.1;
// System.out.println("a + b + c 의 평균 : " + (a + b + c) / 3); // 10.0

const a = 10.3;
const b = 9.6;
const c = 10.1;
console.log('a + b + c 의 평균 : ' + (a + b + c) / 3);

// TODO: 반복문을 사용하여 a ~ z 까지 출력

//		TODO 반복문에서 char를 사용시 "(쌍따옴표)가 아닌 '(홀 따옴표)를 사용해야 에러가 없습니다.
// for(char i = 'a'; i <= 'z'; i++) {
//     System.out.print(i + " ");
// }

// System.out.println("");

// for (let i = a; i <= z; i++) {
//   console.log(i);
// }
for (let i = 'a'; i <= 'z'; i++) {
  console.log(i);
}
// 자바스크립트는 a-z 까지 출력되는 로직을 찾지 못하였습니다.

// TODO: 8진수 와 16진수 출력
// int d = 200;

// System.out.println("10진수 : " + d); // 200
// System.out.format("8진수 : %o\n", d); // 310
// System.out.format("16진수 : %x\n", d); // c8

//		8진수는 %o 로 표현하고 16진수는 %x로 표현됩니다.
//		\n 은 System.out.println(); 의 ln 즉 줄바꿈을 의미합니다.

const d = 200;
console.log(
  '[toString()를 이용하여, 인자로 바꿀포멧 방식을 전달합니다.] 8진수 : ' +
    d.toString(8),
); // 310
console.log(
  '[toString()를 이용하여, 인자로 바꿀포멧 방식을 전달합니다.] 16진수 : ' +
    d.toString(16),
); // c8
// toString() 함수를 사용하여, argument는 바꿀 format(진수)를 argument로 대입합니다.

// TODO: 8진수와 16진수를 10진수로 출력
const e = d.toString(8);
const f = d.toString(16);
console.log(parseInt(e, 8)); // 200
console.log(parseInt(f, 16)); // 200
// parseInt() 는 2개의 argument를 받고,
// 첫번째 인자로 변환할 변수를 대입하고,
// 두번째 인자로 바꿀 format(진수)을 대입합니다.
console.log('console.log(e) : ' + e);
console.log(
  'parseInt() 함수의 [두번째 인자 (현재 포멧형식) *두번째 인자는 바꿀 포멧 형식이 아닌 기존의 포멧되어 있는 형식을 argument로 전달합니다.]를 전달하지 않을 경우 기존 포멧 그대로 출력 됩니다. : ' +
    parseInt(e),
); // 200
console.log('console.log(e) : ' + f);
console.log(
  'parseInt() 함수의 [두번째 인자 (현재 포멧형식) *두번째 인자는 바꿀 포멧 형식이 아닌 기존의 포멧되어 있는 형식을 argument로 전달합니다.]를 전달하지 않을 경우 기존 포멧 그대로 출력 됩니다. : ' +
    parseInt(f),
); // 200

// TODO: 문자열의 위치 찾기 (문자열 자르기)

// String name = "Jhon Doe";
// System.out.println(name); // Jhon Doe
// System.out.println(name.substring(0, 1)); // J
// System.out.println(name.substring(3, 6)); // n D
// System.out.println(name.substring(5, 8)); // Doe
// System.out.println(name.substring(0, 4)); // Jhon

//		substring 함수는 2개의 argument를 받고,
//		첫 번째 argument 는 찾고자하는 문자열의 시작 위치
//		두 번째 argument 는  찾고자하는 문자열의 마지막 위치
//		를 나타내어 substring(4, 7) 은 해당 문자열의 4번째 자리 부터 7번째 자리 전인
//		6번째 까지 출력합니다.

const name = 'Jhon Doe';
console.log(name.substring(0, 1)); // J
console.log(name.substring(3, 6)); // n D
console.log(name.substring(5, 8)); // Doe
console.log(name.substring(0, 4)); // Jhon
