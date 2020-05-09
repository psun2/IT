// - [GitHub](https://github.com/leonardomso/33-js-concepts)
// - [Nomad Coders YouTube](https://www.youtube.com/watch?v=QkFkFqg-J04&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=10)

// TODO:FIXME: 01. Call Stack (콜 스택)
// 자바스크립트는 실행해야하는 함수를 보면 스택(stack)위에 올립니다.
// 스택(stack)은 아래에서 위로 쌓여집니다.
// 스택(stack)위에 쌓여진 함수는 실행이 끝나면, stack에서 제거 됩니다.

function three() {
  console.log('three 함수 에서 등록된 코드를 실행합니다.');
  console.log('I love js');
}
function two() {
  console.log('two 함수 에서 three 함수를 호출합니다.');
  three();
  console.log(
    'three 함수의 호출을 마치고 two 함수에 등록된 코드를 실행합니다.',
  );
}
function one() {
  console.log('one 함수 에서 two 함수를 호출합니다.');
  two();
  console.log('two 함수의 호출을 마치고 one 함수에 등록된 코드를 실행합니다.');
}
function zero() {
  console.log('zero 함수 에서 one 함수를 호출합니다.');
  one();
  console.log('one 함수의 호출을 마치고 zero 함수에 등록된 코드를 실행합니다.');
}
zero();

// Call Stack
// three
// two
// one
// zero
// Call Stack은 아래에서 위로 쌓이고, 위에서부터 실행되서 Call Stack에서 제거 됩니다.

console.log(
  '------------------------------------------------------------------',
);

function three() {
  console.log('three 함수 에서 등록된 코드를 실행합니다.');
  console.log('I love js');
}
function two() {
  console.log('two 함수 에서 three 함수를 호출합니다.');
  three();
  console.log(
    'three 함수의 호출을 마치고 two 함수에 등록된 코드를 실행합니다.',
  );
}
function one() {
  console.log('one 함수 에서 two 함수를 호출합니다.');
  two();
  console.log('two 함수의 호출을 마치고 one 함수에 등록된 코드를 실행합니다.');
}
function zero() {
  console.log('zero 함수 에서 one 함수를 호출합니다.');
  one();
  console.log('one 함수의 호출을 마치고 zero 함수에 등록된 코드를 실행합니다.');
  throw Error('zero()에서 error 발생');
}
zero();

// Call Stack
// three
// two
// one
// zero
// Call Stack은 아래에서 위로 쌓이고, 위에서부터 실행되서 Call Stack에서 제거 됩니다.
// 위와 같이 진행되어 function three의 console.log() 를 출력하고,
// Call Stack에서 제거 되면서 내려오다가,
// zero에서 throw Error을 만나 error을 출력합니다.
