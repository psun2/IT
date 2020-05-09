function hello() {
  bye();
}
function bye() {
  hello();
}
hello();

// 이 두개의 함수는 서로를 부릅니다.
// 이렇게 하다보면 이런 메세지가 뜹니다.
// 'Maximum call stack size exceeded' (최대 콜스택 사이즈를 초과했습니다.)
