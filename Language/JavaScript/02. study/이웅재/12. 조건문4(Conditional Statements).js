// # 조건문(Conditional Statements)

// 삼항 연산자를 이용한 조건부 실행

// 조건? 조건이 참이면 실행되는 문장 : 조건이 거짓이면 실행되는 문장
// 중괄호 {} 를 사용할 수 없는 문법이기 때문에 하나의 문장만 가능합니다. 
let n = 5;
console.log(n % 5 === 0 ? '5의 배수 입니다.' : '5의 배수가 아닙니다.'); // 5의 배수 입니다.

// 표현식의 결과를 변수에 할당할 수 있습니다.
const message = n % 5 === 0 ? '5의 배수 입니다.' : '5의 배수가 아닙니다.'
console.log(message); // 5의 배수 입니다.

// switch 를 이용한 조건문
// switch 뒤 괄호 안에 있는 값이 무엇인지 중괄호 안에 있는 코드들을 비교해서 실행 합니다.
// 이중에 default: 뒤에 있는 문장은 항상 참이어서 실행되는 블럭 입니다.
// 문장이 한 줄이라서 중괄호는 생략했습니다.
let number = 5;
switch ( number ) {
    default:
        console.log(number);
}

// 다음은 n 이 5 로 나누었을때 나머지가 0인 경우에 실행되는 블럭을 추가한 것입니다.
// case '비교할 값': 을 이용해서 맞으면 실행됩니다.
// case 0: 인 경우와 default: 인 경우 두 블럭 모두 순서대로 실행이 됩니다.
switch ( number % 5 ) {
    case 0:
        console.log('5의 배수 입니다.'); // 5의 배수 입니다.
    default: 
        console.log(number); // 5
}

// 만약에 해당 블럭이 실행된 후 다음 블럭을 거치지 않고 switch 문을 나가고 싶다면,
// case 문 안에서 break; 를 실행합니다.
switch ( number % 5 ) {
    case 0:
        console.log('5의 배수 입니다.'); // 5의 배수 입니다.
        break;
    default: 
        console.log(number);
}

// break와 case 문의 순서를 잘 조정하여, 원하는 코드를 만들어 낼 수 있도록 제대로 이해해야 합니다.
number = 6;
switch ( number % 5 ) {
    case 0:{
        console.log('5의 배수 입니다.'); // 5의 배수 입니다.
        break;
    }
    case 1:
    case 2:
    case 3:
    case 4:{
        console.log('5의 배수가 아닙니다.') // 5의 배수가 아닙니다.
    }
    default: 
        console.log(number); // 6
}