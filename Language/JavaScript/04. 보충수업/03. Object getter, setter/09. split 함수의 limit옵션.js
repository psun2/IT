// TODO: spilt 함수의 limit 옵션으로 끊는 횟수 제한하기


// split 을 활용하여, 분리된구간의 조건은 공백으로 주고, 3단어, 
// 즉 배열의 길이를 3으로 제한하기

const myString = "Hello World. How are you doing?";

const splitTest = myString.split(" ", 3);

console.log(splitTest); // [ 'Hello', 'World.', 'How' ]