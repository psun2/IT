// TODO: #2.1.1 More Function Fun (더 많은 함수 재미)

function sayHello(name, age) {
  console.log('Hello' + name + 'you are' + age + 'years old');
}

sayHello('Nicolas', 15); // HelloNicolasyou are15years old

// TODO: String
// ''(홀따옴표), ""(쌍따옴표) 두 가지경우 다 String 입니다.
// ''(홀따옴표)로 시작했으면 반듯이 ''(홀따옴표) 로 끝나야 합니다.
// ""(쌍따옴표)로 시작했으면 반듯이 ""(쌍따옴표) 로 끝나야 합니다.

// TODO: ``(백틱) => 탬플릿 문자열
function sayHello2(name, age) {
  console.log(`Hello ${name} you are ${age} years old`);
}

sayHello2('Nicolas', 15); // Hello Nicolas you are 15 years old

// TODO: return
function sayHello3(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greeNicolas = sayHello3('Nicolas', 15);

console.log(greeNicolas); // Hello Nicolas you are 15 years old

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

//           console.log(greeNicolas);
const plus = calculator.plus(5, 5);
console.log(plus); // 10
