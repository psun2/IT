// - [GitHub](https://github.com/leonardomso/33-js-concepts)
// - [Nomad Coders YouTube](https://www.youtube.com/watch?v=tclQMRg5v7Y&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=4)

// TODO:FIXME: 07. Expression vs Statement(표현 대 진술)

// TODO: Expression
console.log('Expression');
// Expression 은 value 를 return 합니다.
// 5 + 1 은 더해진 6이란 값을 return 합니다. 이것이 Expression 입니다.
console.log(5 + 1);

function add(a, b) {
  return a + b;
}

const how = add(5, 6);
console.log(`Expression 이란 value 를 return 합니다. how : ${how}`);

// function add(a, b) {
//    a + b;
// }

// const how = add(5, 6);
// console.log(how); // undefined

console.log('-------------------------------------------------');

// TODO: Statement
console.log(
  'Statement 는 명령 혹은 지시 입니다. console.log(if(true){}) => error',
);
// Statement 는 명령 혹은 지시 입니다.
// const thing = if(true) {

// }
// Statement 은 value 를 가질수 없습니다.

console.log('-------------------------------------------------');

// TODO: function declaration
console.log('function declaration  =>  호이스팅');

console.log(functionDeclaration);

const functionDeclaration = declaration(1, 5);

function declaration(a, b) {
  return a + b;
}

console.log(functionDeclaration);

console.log('-------------------------------------------------');

// TODO: function Expression
console.log('function Expression  =>  호이스팅이 되지 않습니다.');

console.log(functionExpression); // 호이스팅이 되지 않으므로, error

const functionExpression = Expression(1, 5);

const Expression = (a, b) => {
  a + b;
};

console.log(functionExpression);
