console.log("[예제1] - includes 사용법");

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

console.log("================================================================================================================")

console.log("[예제2] - fromIndex 가 배열의 길이보다 같거나 큰 경우");
// fromIndex 가 배열의 길이보다 같거나 크다면, false 를 반환합니다. 배열은 검색되지 않을 것입니다.

var arr = ['a', 'b', 'c'];

console.log(arr.includes('c', 3));   // false
console.log(arr.includes('c', 100)); // false

console.log("================================================================================================================")

console.log("[예제2] - 0보다 작은 인덱스의 계산");
// fromIndex 가 음수라면, 이 계산된 인덱스는 valueToFind 를 찾기 시작할 배열의 위치로 사용되기 위해 연산됩니다. 
// 만약 계산된 인덱스가 -1 * array.length 보다 작거나 같다면, 전체 배열이 검색될 것입니다.

var arr = ['a', 'b', 'c'];

console.log(arr.includes('a', -100)); // true
console.log(arr.includes('b', -100)); // true
console.log(arr.includes('c', -100)); // true
console.log(arr.includes('a', -2)); // false
// -1 * array.length 의 결과 : -3
// result : -3 을 포함 -3까지 true -2를 포함 -2부터 false