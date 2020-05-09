// TODO: String (문자열)
// string 은 "(따옴표) 로 시작하고 "(따옴표) 로 끝납니다.
// "hello!"
// 'hello!'

// error
// 'hello!"
// "hello!'

// 같은 모양새의 따옴표로 시작하고 끝내는 것이 String의 규칙입니다.

// error
// "Hello they call me "the awesome man"

// modfiy
// "Hello they call me \"the awesome man"

// TODO: Number (정수, 소숫점)
// 2
// 2.2

// TODO: Boolean (참, 거짓을 의미합니다.)
// true
// false
// "true" => String 으로 인식 됩니다.

// TODO: undefined ('정의가 되지 않음')
let hello;
console.log(hello === undefined); // true

// TODO: null('존재하지 않음');
console.log(hello === null); // false

// TODO: NaN ('Not A Number')
console.log(Math.pow(5, 'hello')); // NaM
console.log('hello' / 6); // NaM
