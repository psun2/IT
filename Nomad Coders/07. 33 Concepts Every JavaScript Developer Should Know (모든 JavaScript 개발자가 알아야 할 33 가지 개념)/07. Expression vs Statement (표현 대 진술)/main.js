// TODO: 07. Expression vs Statement (표현 대 진술)

// FIXME:TODO:  Experssion ?
// value를 return 하는 무엇인가를 의미 합니다.
const a = 5 + 1;
console.log(a);
// 바로 이것이 expression 입니다.
// 자바스크립트는 a 를 가져다가 6이라고 return 할 것 입니다.
// 여기서 6 은 return 한 value가 됩니다.
console.log('expression : 5 + 1');
console.log('value : 6');

// TODO: Example
function add(a, b) {
  return a + b;
}

const how = add(5, 6);
console.log('add(5, 6) 는 expression 이 됩니다.');
console.log(how); // 11
console.log('add(5, 6)로 인하여 return 되는 값이 value가 됩니다.');

function add2(a, b) {
  a + b;
}
const how2 = add2(5, 6);
console.log(how2);
console.log('return 되는 undefined 도 value 가 됩니다.');

// TODO: Expression return a value
console.log('console.log(1 + 1) 과 같이 작성하면');
console.log('console.log(2) 자바스크립트가 평가하고 2를 넣어 줍니다.');
console.log('자바스크립트는 expression을 value로 대체하고 계속 진행합니다.');

// FIXME:TODO: statement ?
// Statement 는 명령 혹은 지시 입니다.

// TODO: Example
if (true) {
}

// TODO: Statement 는 variable로 저장 할 수 없습니다.
// const thing = if(true){

// }
// FIXME: Uncaught SyntaxError: Unexpected token 'if'
// 잡히지 않은 구문 오류 : 예기치 않은 토큰 'if'

// TODO: Statement 가 variable 로 저장할 수 없는 이유
// const thing = if(true){

// }
// 에서 =(equals) 다음에 나오는 내용은 expression 을 기대하고 있습니다.
// 그래서 expression 이 아닌 statement 가 오면 error을 발생 시킵니다.

// if, else if, else, for, while, switch ... 이런 지시들은 전부 statement라고 보면 됩니다.

// FIXME:TODO: function declaration
const awesome = sum(1, 5);

function sum(a, b) {
  return a + b;
}

console.log(awesome);

// TODO: line 59 에서는 존재하지 않는 add 함수를 사용했는데,
// 에러가 없이 6이라는 value를 반환해 줍니다.
// 이 것이 바로 function decalration 입니다.
// function experssion 과의 차이입니다.
// 자바스크립트가 코드를 보면 모든 decalration 을 상단으로 가져옵니다.
// 이러한 것을 hoisting 이라는 프로세스 입니다.
// 자바스크립트가 이렇게 엄청나게 빠르게 옮겨놓을 것이라는 것 입니다.

// FIXME:TODO: function expression
// const awesome2 = sum2(1, 5);
// const sum2 = (a, b) => a + b;
// console.log(awesome2);

// FIXME: Uncaught ReferenceError: Cannot access 'sum2' before initialization
// 잡히지 않은 ReferenceError : 초기화하기 전에 'sum2'에 액세스 할 수 없습니다

// TODO: sum2 함수는 이제 expression 입니다. 그래서 76 Line 에서 존재하지 않는
// sum2 함수를 호출함으로 error 메세지가 출력 됩니다.
