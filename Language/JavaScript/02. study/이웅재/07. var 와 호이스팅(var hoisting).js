// # var 와 호이스팅(var & hoisting)

// 함수 먼저
function hello1() {
    console.log("hello1");
}
hello1(); // hello1

// 함수의 호출을 먼저
hello2(); //hello2
function hello2() {
    console.log("hello2");
}

// # 아래 있는 선언을(만) 끌어 올리다
// hoisting
age = 6;
age++;
console.log(age); // 7 선언은 아래에서 했지만 위에서 호출 했지만, 문제없이 작동
var age;

console.log(name); // undefined
name = "mark";
console.log(name); // nark
var name;

console.log(name1); // undefined park 출력이 될줄 알았는데, 아니다 선언만 위로 되는 것이지 값을 가져 가는것은 아니다.
name1 = "mark";
console.log(name1); // nark
var name1 = "park";
console.log(name1); // park

console.log(name2);
name2 = "mark";
console.log(name2);
let name2;