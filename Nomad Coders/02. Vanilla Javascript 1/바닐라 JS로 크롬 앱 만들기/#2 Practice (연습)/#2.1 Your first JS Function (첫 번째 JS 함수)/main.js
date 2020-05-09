// TODO : #2.1 Your first JS Function (첫 번째 JS 함수)

console.log(console);
// {
//     log: [Function: bound consoleCall],
//     warn: [Function: bound consoleCall],
//     dir: [Function: bound consoleCall],
//     time: [Function: bound consoleCall],
//     timeEnd: [Function: bound consoleCall],
//     timeLog: [Function: bound consoleCall],
//     trace: [Function: bound consoleCall],
//     assert: [Function: bound consoleCall],
//     clear: [Function: bound consoleCall],
//     count: [Function: bound consoleCall],
//     countReset: [Function: bound consoleCall],
//     group: [Function: bound consoleCall],
//     groupEnd: [Function: bound consoleCall],
//     table: [Function: bound consoleCall],
//     debug: [Function: bound consoleCall],
//     info: [Function: bound consoleCall],
//     dirxml: [Function: bound consoleCall],
//     error: [Function: bound consoleCall],
//     groupCollapsed: [Function: bound consoleCall],
//     Console: [Function: Console],
//     profile: [Function: profile],
//     profileEnd: [Function: profileEnd],
//     timeStamp: [Function: timeStamp],
//     context: [Function: context],
//     [Symbol(kBindStreamsEager)]: [Function: bound ],
//     [Symbol(kBindStreamsLazy)]: [Function: bound ],
//     [Symbol(kBindProperties)]: [Function: bound ],
//     [Symbol(kWriteToConsole)]: [Function: bound ],
//     [Symbol(kGetInspectOptions)]: [Function: bound ],
//     [Symbol(kFormatForStdout)]: [Function: bound ],
//     [Symbol(kFormatForStderr)]: [Function: bound ]
// }

// TODO: function ?
// function === function (함수, 기능)
// function(함수)는 어떤걸 수행하려는 한 부분입니다.
// 한조각의 코드를 재사용하여, 사용할 수 있는 만큼 사용 할 수 있습니다.

// TODO: Example
// console.log로 hello라고 찍히게 하는 코드 만들기
console.log('Hello');
console.log('Nico Hello');
console.log('Kim Hello');
console.log('Park Hello');

// TODO: function(함수)의 정의
function sayHello() {
  console.log('Hello!');
}

sayHello(); // Hello!

console.log(); // 공백
console.log('Hi!'); // Hi

sayHello('Nicolas'); // Hello
// sayHello함수는 인자(argument) Nicolas 를 받 을 수 있는 상태가 아닙니다.

// 'Nicolas' => 인자(argument) 라고 합니다.
// 인자(argument) 는 변수와 비슷합니다.
// 인자(argument)로 주는 값을 저장합니다.

// TODO: function(함수) 에 인자(argument) 저장하기
function sayHello2(potato) {
  console.log('Hello!', potato);
}
sayHello2('Nicolas'); // Hello! Nicolas

// 함수의 이름옆의 (potato) 는 외부에 있는 데이터를 읽는 함수를 만드는 방법 입니다.

sayHello2('Nicolas', 15); // Hello! Nicolas
// TODO: 15는 출력되지 않습니다. why?
// sayHello2 함수는 숫자(15)를 받을 준비가 되어있지 않습니다.

function sayHello3(potato, chicken) {
  console.log('Hello!', potato, 'you have', chicken);
}
sayHello3('Nicolas', 15); // Hello! Nicolas you have 15

// 반듯이 potato 나 chicken 만을 사용하는게 아닙니다.
// 개발자가 정해주는 이름이라면 무엇이든 사용 할 수 있습니다.

function sayHello4(name, age) {
  console.log('Hello!', name, 'you have', age, 'years of age.');
}
sayHello4('Nicolas', 15); // Hello! Nicolas you have 15 years of age.

// console.log 함수는 argument 를 무한(infinite)하게 가질 수 있습니다.
