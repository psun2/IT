// FIXME:TODO: #1.8 Keyworded Arguments (키워드 인수)

// TODO: python 코드

// def minus(a, b):
//   return a - b;

// result = minus(b = 30, a=1);
// print(result); # -29
// result = minus(30, 1);
// print(result); # 29

// def say_hello(name, age):
//   return "Hello name you are age years old";

// hello = say_hello("nico", "12");
// print(hello);
// # Hello name you are age years old

// def say_hello(name, age):
//   return f"Hello {name} you are {age} years old";

// hello = say_hello("nico", "12");
// print(hello);
// # Hello nicom you are 12 years old

// def say_hello(name, age):
//   return "Hello " + name + " you are " + age +  " years old";

// hello = say_hello("nico", "12");
// print(hello);
// # Hello nicom you are 12 years old

// hello = say_hello(age="12", name="nico");
// print(hello);
// # Hello nicom you are 12 years old

// def say_hello(name, age, are_from, fav_food):
//   return f"Hello {name} you are {age} years old you are from {are_from} you like {fav_food}";

// hello = say_hello("nico", "12", "colombia", "kimchi");
// print(hello);
// # Hello nico you are 12 years old you are from colombia you like kimchi

// hello = say_hello("nico", "12","kimchi","colombia");
// print(hello);
// # Hello nico you are 12 years old you are from kimchi you like colombia

// hello = say_hello(name="nico", age="12",fav_food="kimchi",are_from="colombia");
// print(hello);
// # Hello nico you are 12 years old you are from colombia you like kimchi

// TODO: 자바스크립트 코드

function minus(a, b) {
  return a - b;
}

result = minus(30, 1);
console.log(result); // 29

result = minus((b = 1), (a = 30));
console.log(result); // -29
// 자바스크립트는 python과 달리 argument에 키워드 인수를 사용하여 전달 할 수 없습니다.

function sayHello(name, age) {
  return 'Hello name you are age years old';
}

hello = sayHello('nico', '12');
console.log(hello);
// Hello name you are age years old

// TODO: 오버라이드 현상이 발생하여 위의 출력값도 아래와 같이 동일하게 됩니다.
// function sayHello(name, age) {
//   return `Hello ${name} you are ${age} years old`;
//   // python : f"Hello {name} you are {age} years old";
// }

// hello = sayHello('nico', '12');
// console.log(hello);

function sayHello2(name, age) {
  return `Hello ${name} you are ${age} years old`;
  // python : f"Hello {name} you are {age} years old";
}

hello2 = sayHello2('nico', '12');
console.log(hello2);
// Hello nico you are 12 years old

function sayHello3(name, age) {
  return 'Hello ' + name + ' you are ' + age + ' years old';
  // python : f"Hello {name} you are {age} years old";
}

hello3 = sayHello3('nico', '12');
console.log(hello3);
// Hello nico you are 12 years old

hello3 = sayHello3((age = '12'), (name = 'nico'));
console.log(hello3);
// Hello 12 you are nico years old
// 자바스크립트는 python과 달리 argument에 키워드 인수를 사용하여 전달 할 수 없습니다.

function sayHello4(name, age, areFrom, favFood) {
  return `Hello ${name} you are ${age} years old you are from ${areFrom} you like ${favFood}`;
}

hello4 = sayHello4('nico', '12', 'colombia', 'kimchi');
console.log(hello4);
// Hello nico you are 12 years old you are from colombia you like kimchi

hello4 = sayHello4('kimchi', 'colombia', '12', 'nico');
console.log(hello4);
// Hello kimchi you are colombia years old you are from 12 you like nico

hello4 = sayHello4(
  (favFood = 'kimchi'),
  (areForm = 'colombia'),
  (age = '12'),
  (mame = 'nico'),
);
console.log(hello4);
// Hello kimchi you are colombia years old you are from 12 you like nico
// 자바스크립트는 python과 달리 argument에 키워드 인수를 사용하여 전달 할 수 없습니다.
