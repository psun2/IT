function three() {
  console.log('i love js');
}
function two() {
  three();
}
function one() {
  two();
}
function zero() {
  one();
  throw Error('omg im am an error');
}
zero();

// TODO:
// zero() 호출 =>
// zero 내부의 one() 호출 =>
// one 내부의 two() 호출 =>
// two 내부의 three() 호출 =>
// three 내부의 console.log() 호출 =>
// three() 종료 =>
// two() 종료 =>
// one() 종료 =>
// zero 내부로 console.log() 오게 됩니다. =>
// zero 내부의 throw Error 라인이 실행됩니다.
// console.log() 를 출력, 다음으로 Error message 가 출력됩니다.

// TODO: function 은 return 이라는 말이 나오거나, 실행이 완료되면 종료됩니다.

// TODO:
// Call Stack 은 자바스크립트의 Todo list(할 일 목록) 함수가 함수를 실행함에 따라
// Call Stack 이 추가되고, 최 상위 함수가 마지막으로 호출되면,
// Call Stack 에서 제거 됩니다.
