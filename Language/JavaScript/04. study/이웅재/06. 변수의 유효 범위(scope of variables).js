// # 변수의 유효 범위(scope of variables)

// # const, let 의 유효 범위
// 블록 스코프

// # {} 블록
// 블럭
{
    const name = 'mark';
    console.log(name); // mark
}
// console.log(name); // error

// 밖에서 안으로
let age = 37;
{
    age++;
    console.log(age); // 38
}
console.log(age); // 38

// 중첩
{
    {
        {
            console.log(age); // 38
        }
    }
}

// 조건문
if(true) {
    let age = 37;
    console.log(age); // 37
}

age++; // age를 1늘려 주겠다, 하지만 if문 안에 선언 되어있어서 접근이 안된다.

// 반복문
for(let i = 0; i < 5; i++) {
    const message = 'hello' + i;
    console.log(message); // 정상출력
}
// console.log(message); // error

// 함수
function hello1() {
    const name = 'mark';
    console.log(name);
}
hello1(); // mark
// console.log(name); // error

// arrow 함수
const hello2 = () => {
    const age = 37;
    console.log(age);
}
hello2(); // 37
// console.log(age); //error

// #var의 유효 범위
// 함수 스코프

// # function() {}
// 함수
// var 함수 스코프
var a = 0;
console.log(a); // 0
(function(){
    a++;
    console.log(a); // 1
})
();
console.log(a); // 1
(function(){
    var b = 0;
    console.log(b); // 0
})
(); // 0
// b++; // b를 1증가시켜주겠다
// console.log(b); // error var라도 함수안의 블럭에 접근 불가

// 블록 스코프
var c = 0;
{
    c++
    console.log(c); // 0
}

{
    var d = 0;
    console.log(d); // 0
}

console.log(d); // 0
