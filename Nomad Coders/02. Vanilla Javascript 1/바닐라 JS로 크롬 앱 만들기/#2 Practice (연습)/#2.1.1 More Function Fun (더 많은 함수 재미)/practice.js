// TODO: calculator(계산자) Practice

const calculator = {
  // 더하기
  plus: function (a, b) {
    return a + b;
  },
  //   빼기
  minus: function (a, b) {
    return a - b;
  },
  //   곱하기
  times: function (a, b) {
    return a * b;
  },
  //   나누기
  divided: function (a, b) {
    return a / b;
  },
  //   제곱
  Squared: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(5, 5);
console.log(plus); // 10

const minus = calculator.minus(5, 5);
console.log(minus); // 0

const times = calculator.times(5, 5);
console.log(times); // 25

const divided = calculator.divided(5, 5);
console.log(divided); // 1

const Squared = calculator.Squared(5, 5);
console.log(Squared); // 3125
