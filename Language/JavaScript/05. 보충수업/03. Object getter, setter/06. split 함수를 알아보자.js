// TODO: MDN 을 참고하였습니다.(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)
// TODO: split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.

// TODO: 구문
// TODO: str.split([separator[, limit]])
// TODO: separator (Optional) : 분리기호
// TODO: limit (Optional) : 한도
// TODO: split() 는 문자열을 배열에 담아 반환합니다.

const a = "split 함수";
console.log(a.split()); // [ 'split 함수' ]

const b = " ";
console.log(b.split()); // [ ' ' ]

// TODO: 아래 예제와 같이 숫자는 에러가 발생합니다.
// const b = 1;
// console.log(b.split());

