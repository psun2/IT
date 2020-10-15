// FIXME:TODO: #1.11 if else and or (그렇지 않으면 # 1.11)

// TODO: python 코드

// def plus(a, b):
//   # if user gave me a string
//   # 사용자가 나에게 문자열을 주면
//   #   error
//   #   오류
//   # else
//   # 그밖에
//   #   return a + b;
//   #   a + b를 반환;

//   # if CONDITION:
//   # 조건 인 경우 :
//   #   error
//   #   오류
//   # else:
//   # 그밖에:
//   #   return a + b;
//   #   a + b를 반환;

//   # if type(b) is str:
//   #   return None;
//   # else:
//   #   return a + b;

//   if type(b) is int or type(b) is float:
//     return a + b;
//   else:
//     return None;

// print(plus(12, 1.2)); # 13.2

// def plus(a, b):
//   if type(a) is int or type(a) is float or type(b) is int or type(b) is float:
//     return a + b;
//   else:
//     return None;

// # print(plus("3", 3));
// # TypeError: can only concatenate str (not "int") to str
// # TypeError : str ( "int"아님) 만 str에 연결할 수 있습니다
// # print(plus(3, "3"));
// # TypeError: unsupported operand type(s) for +: 'int' and 'str'
// # TypeError : +에 대해 지원되지 않는 피연산자 유형 : 'int'및 'str'
// print(plus(3, 3)); # 6
// print(plus(3.3, 3)); # 6.3
// print(plus(3, 3.5)); # 6.5
// print(plus(3.3, 3.5)); # 6.8

// TODO: 자바스크립트 코드

function plus(a, b) {
  // if (a === Number(a) && b === parseInt(b)) {
  // console.log(parseInt(3.5));
  if (a === Number(a) && b === Number(b)) {
    return a + b;
  } else {
    throw Error('argument의 type이 Number type이 맞는지 확인해 주세요.');
  }
}

// console.log(plus('3', 3));
// main.js:59 Uncaught Error: argument의 type이 Number type이 맞는지 확인해 주세요.
// console.log(plus(3, '3'));
// main.js:59 Uncaught Error: argument의 type이 Number type이 맞는지 확인해 주세요.
console.log(plus(3, 3)); // 6
console.log(plus(3.3, 3)); // 6.3
console.log(plus(3, 3.5)); // 6.5
console.log(plus(3.3, 3.5)); // 6.8

// const a = 1;
// console.log(typeof a === typeof a);
// console.log(typeof a === typeof Number);
// console.log(a === Number(a));
// const type = typeof a;
// console.log(typeof type);
// console.log(a === Number);
// console.log(Number instanceof Object); // true
