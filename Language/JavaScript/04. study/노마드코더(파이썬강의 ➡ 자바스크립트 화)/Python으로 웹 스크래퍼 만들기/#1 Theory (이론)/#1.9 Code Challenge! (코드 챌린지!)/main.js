// FIXME:TODO: #1.9 Code Challenge! (코드 챌린지!)

// TODO: python 코드

// def plus(a, b):
//   int_a = int(a);
//   int_b = int(b);
//   return int_a + int_b;

// def minus(a, b):
//   return int(a) - int(b);

// def times(a, b):
//   return int(a) * int(b);

// def division(a, b):
//   return int(a) / int(b)

// def remainder(a, b):
//   return int(a) % int(b);

// def squared(a, b):
//   return int(a) ** int(b);

// result = plus(5, "1");
// print(result) # 6
// result = minus(5, "2");
// print(result) # 3
// result = times(5, "3");
// print(result) # 15
// result = division(5, "4");
// print(result) # 1.25
// result = remainder(5, "5");
// print(result) # 0
// result = squared(5, "6");
// print(result) # 15625

// TODO: 자바스크립트 코드

function plus(a, b) {
  const numberB = Number(b);
  console.log(`numberB = ${numberB}, b = "${b}"`);
  console.log(`typeof numberB = ${typeof numberB}`);
  console.log(`typeof b = ${typeof b}`);
  return Number(a) + Number(b);
}

function minus(a, b) {
  return Number(a) - Number(b);
}

function times(a, b) {
  return Number(a) * Number(b);
}

function division(a, b) {
  return Number(a) / Number(b);
}

function remainder(a, b) {
  return Number(a) % Number(b);
}

function squared(a, b) {
  return Number(a) ** Number(b);
}

result = plus(5, '1');
console.log(result); // 6
console.log(typeof result); // number
// numberB = 1, b = "1" // maind.js:42
// main.js:43 typeof numberB = number // maind.js:42

result = minus(5, '2');
console.log(result); // 3

result = times(5, '3');
console.log(result); // 15

result = division(5, '4');
console.log(result); // 1.25

result = remainder(5, '5');
console.log(result); // 0

result = squared(5, '6');
console.log(result); // 15625
