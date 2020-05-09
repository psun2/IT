// # 조건문(Conditional Statements)

// 표현식이 참으로 평가될 때, 실행되는 블럭
// if(표현식) {
//     표현식이 참으로 평가될 때, 실행되는 문장들의 모음
// }

if (true) {
    console.log('항상실행'); // 항상실행
}

if (false) {
    console.log('항상 실행되지 않음'); // 실행 내용 없음
}

// 블럭에 코드가 한줄이면, 중괄호 {} 는 생략 가능 합니다.
if (true) console.log('항상 실행'); // 항상 실행
if (false) console.log('항상 실행되지 않음'); // 실행 내용 없음

// 표현식이 거짓으로 평가될 때
// Falsy
// false, 0, nill, undefined, NaN
if (false) console.log(false);
if (0) console.log(0);
if ('') console.log('');
if (null) console.log(null);
if (undefined) console.log(undefined);
if (NaN) console.log(NaN);

// 표현식이 참으로 평가될 때
// Truethy
// Falsy 의 반대 : true, 37, '문자열', {}, []
if (true) console.log(true); // true
if (37) console.log(37); // 37
if (-37) console.log(-37); // -37
if ('문자열') console.log('문자열'); // 문자열
if ({}) console.log({}); // {}
if ([]) console.log([]); // []

// else {}
// if 에 해당하지 않을 때
// if () {} else {}
const n = 37; 
if ( n > 0) {
    console.log('n 이 0 보다 큰 경우 실행'); //n 이 0 보다 큰 경우 실행
} else {
    console.log('n 이 0 보다 크지 않은 경우 실행');
}

// 블록 안 문장이 하나일 경우, 중괄호 없이 사용 가능
if ( n > 0) console.log('n 이 0 보다 큰 경우 실행'); //n 이 0 보다 큰 경우 실행
else console.log('n 이 0 보다 크지 않은 경우 실행');