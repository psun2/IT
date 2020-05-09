// # 조건문(Conditional Statements)

// 논리 연산자를 이용한 조건문 평가
// !(Not), &&(AND), ||(OR)

// !표현식
if (!true) {
    console.log('!연산자는 참이면 거짓');
}
if (!false) {
    console.log('!연산자는 거짓이면 참'); // !연산자는 거짓이면 참
}

// 표현식 && 표현식
if (true && true) {
    console.log('&&연산자는 두개 모두 참이면 참'); // &&연산자는 두개 모두 참이면 참
}
if (true && false) {
    console.log('&&연산자는 한개만 참이면 거짓');
}
if (false && true) {
    console.log('&&연산자는 한개만 참이면 거짓');
}
if (false && alse) {
    console.log('&&연산자는 두개 모두 거짓이면 거짓');
}

// 표현식 || 표현식
if (true || true) {
    console.log('||연산자는 두개 모두 참이면 참'); // ||연산자는 두개 모두 참이면 참
}
if (true || false) {
    console.log('||연산자는 한개만 참이면 참'); // ||연산자는 한개만 참이면 참
}
if (false || true) {
    console.log('||연산자는 한개만 참이면 참'); // ||연산자는 한개만 참이면 참
}
if (false || false) {
    console.log('||연산자는 두개 모두 거짓이면 거짓');
}

// 논리 연산자를 이용한 조건부 실행
// 표련식 && 표현식
// 둘다 참 일때만 참이다.
// 표현식은 앞에 먼저 평가하고, 뒤를 평가한다.
// 앞 표현식을 평가를 해서 참 일때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다.
let n = 5;
n % 5 === 0 && console.log('5로 나누어떨어질때만 실행'); // 5로 나누어떨어질때만 실행

// 앞 표현식의 평가 결과가 거짓일때는 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다.
n = 6;
n % 5 === 0 && console.log('5로 나누어떨어질때만 실행');

// 표현식 || 표현식
// 둘 중에 하나만 참이면 참이다
// 앞 표현식을 평가를 해서 참이면, 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다.
n = 5;
n % 5 === 0 || console.log('5로 나누어 떨어지지 읺을때만 실행'); // ||연산자는 앞이 거짓일때만 실행.

// 앞 표현식을 평가 해서 거짓 일때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다.
n = 6;
n % 5 === 0 || console.log('5로 나누어 떨어지지 읺을때만 실행'); // 5로 나누어 떨어지지 읺을때만 실행

