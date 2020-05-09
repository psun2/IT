// Title : 상수
// subTitle : 상수의 선언 및 상수란 무엇인가 ?

const a = 1;
// 한번 값을 설정하고 나면, 값을 바꾸지 못합니다.
// 값이 고정적 입니다.

// a = 2; //error read only
// TypeError: Assignment to constant variable.
// TypeError : 상수 변수에 할당.
// read only : 읽기 전용

const a = 2;
// 상수 또한 변수와 마찬가지로 한번 선언하면, 똑같은 이름으로 선언이 불가능 합니다.
// SyntaxError: Identifier 'value' has already been declared
// SyntaxError : 식별자 'value'가 이미 선언되었습니다.
