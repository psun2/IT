// # 함수 function

// const hello = new function();
// 생성자 함수로 함수를 만드는 방법

// new Function(인자1, 인자2, ..., 함수의 바디);
// 매개변수가 문자열로 들어간다, 바디부분 또한 문자열로 들어간다
const sum = new Function('a', 'b', 'c', 'return a + b + c');
console.log(sum(1,2,3));

// function 과 new Function(); 의 차이점 
global.a = 0; // new Function 의 함수가 접근 할 수 있다.
{
    const a = 1; // a라는 지역 변수에 new Function이 접근 하지 못 한다.

    const test = new Function('return a');

    console.log(test()); // 0
}

{
    const a = 2;
    const test = function () {
        return a; // global 변수가 아닌 지역 변수인 2 가 사용된다
    }
    console.log(test()); // 2
}

// () => {};
// arrow function (es6)

// arrow 함수를 만들어 이름이 hello1 인 변수에 할당
const hello1 = () => {
    console.log('hello1');
};
hello1();

// 함수의 매개변수
// 함수를 호출할 때 값을 지정

// 매개변수가 하나일 때, 괄호 생략 가능
const hello2 = name => console.log('hello2', name);
hello2('mark');

const hello3 = (name, age) => {
    console.log('hellow', name, age)
};

// 함수의 리턴
// 함수를 실행하면 얻어지는 값
const hello4 = name => { 
    return `hello4 ${name}` 
};

const hello5 = name => `hello5 ${name}`;