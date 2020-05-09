// TODO: #2.5 If, else, and, or (첫번째 조건문!! If, else, and, or)

// if (condition) {
//   // 조건이란 이게 뭐든 참을 의미하면 뭐든 넣을 수 있습니다.
//   // true
//   // 10 > 5 등...
//   block;
//   // block 는 자바스크립트의 표현법입니다.
//   // block 대신 console.log, alert 등 아무거나 와도 됩니다.
// } else {
//   block;
// }

if (10 > 5) {
  console.log('hi');
} else {
  console.log('ho');
}
// TODO: hi 출력 why?
// 5는 10보다 작기 때문에 hi 가 출력 됩니다.

// TODO: 변수를 할당할때 (=)
// const lalala = 'lalala';

// TODO: 좌항과 우항을 체크 할때 (===)
// 10 === 5

if (10 === 5) {
  console.log('hi');
} else {
  console.log('ho');
}
// TODO: h0 출력 why?
// 10 과 5는 같지 않기 때문에 ho 가 출력 됩니다.

if (true) {
  console.log('hi');
} else {
  console.log('ho');
}
// TODO: h0 출력 why?
// 조건이 true이기 때문에 항상 hi를 출력합니다.

if (false) {
  console.log('hi');
} else {
  console.log('ho');
}
// TODO: h0 출력 why?
// 조건이 false이기 때문에 항상 ho를 출력합니다.

if ('nicolas' === 'necolas') {
  console.log('hi');
} else {
  console.log('ho');
}

if ('10' === 10) {
  console.log('hi');
} else {
  console.log('ho');
}

// 조건은 true면, if block 에 있는 코드를 실행시키고,
// false이면 else block의 코드를 실행시킵니다.

if ('10' === 10) {
  console.log('hi');
} else if ('10' === '10') {
  console.log('lalala');
} else {
  console.log('ho');
}
// TODO: lalala 출력 why?
// else if 로 if와 다른 조건을 줄 수 있고, else if 의 조건이 참이 되어
// else if block 의 코드가 실행됩니다.
// 만약 else if 의 조건도 false가 되면 else block 의 코드가 실행됩니다.

if ('10' === 10) {
  console.log('hi');
} else if ('10' === '11') {
  console.log('lalala');
} else {
  console.log('ho');
}
// TODO: ho 출력 why?
// if 의 조건과 else if 의 조건이 거짓이 되어
// else block 에 있는 코드 가 실행 됩니다.

if (20 > 5 && 'nicolas' === 'nicolas') {
  console.log('yes');
} else {
  console.log('no');
}
// TODO: yes 출력 why?
// &&(and)
// if block 의 코드를 실행하고 싶다면...
// && 를 기준으로 좌항의 20 > 5 가 참(true) 가 되어야하고,
// && 를 기준으로 우항의 'nicolas' === 'nicolas' 도 참(true) 가 되어야합니다.
// && 를 기준으로 좌항 과 우항이 모두 참(true) 이여야
// if block 의 코드가 실행됩니다.

if (20 > 5 && 'nicolas' === 'necolas') {
  console.log('yes');
} else {
  console.log('no');
}
// TODO: no 출력 why?
// &&(and)
// && 를 기준으로 좌항 과 우항이 모두 참(true) 이여야
// if block 의 코드가 실행되는데,
// && 를 기준으로 우항의 'nicolas' === 'necolas' 이
// 거짓이 되므로, else block 의 코드가 실행됩니다.

if (20 > 5 || 'ncolas' === 'necolas') {
  console.log('yes');
} else {
  console.log('no');
}
// TODO: yes 출력 why?
// ||(or)
// && 를 기준으로 좌항 과 우항이 모두 참(true) 이여야하는 && 와 달리
// ||은 좌항 과 우항 한 곳만 참(true) 이 되면 if block 의 코드가 실행 됩니다.

// TODO: true
// true && true = true;
// false && true = false;
// true && false = false;
// false && false = false;

// TODO: false
// true || true = true;
// false || true = true;
// true || false = true;
// false || false = false;

// TODO: prompt();
// prompt('prompt() = Ask something (뭔가를 묻다)');
const age = prompt('How old are you');
console.log(age);

if (age > 18) {
  console.log('you can drink (당신은 마실 수 있습니다)');
} else {
  console.log('yoy cant (넌 못해)');
}

if (age >= 18 && age <= 21) {
  console.log(
    'you can drink but you should not(당신은 마실 수 있지만 안됩니다)',
  );
} else if (age > 21) {
  console.log('go ahed (계속해)');
} else {
  console.log('too young (너무 어리다)');
}
