// 사용된 함수 : reduce, indexOf

// Deduplication : 중복제거

const array = [3, 2, 1, 5, 1, 6, 5, 2, 3];

console.log("배열의 중복제거후 새로운 배열로 리턴");

console.log("방법1 : 화살표함수와 삼항연산자");
const Deduplication = array.reduce((acc, curr) => {
  acc.indexOf(curr) === -1 ? acc.push(curr) : acc;
  return acc;
}, []);
console.log(Deduplication);
// [ 3 , 2 , 1 , 5 , 6 ]

console.log("방법2");
const Deduplication2 = array.reduce(function(acc, curr) {
  acc.indexOf(curr) > -1 ? acc : acc.push(curr);
  return acc;
}, []);
console.log(Deduplication2);
// [ 3 , 2 , 1 , 5 , 6 ]

console.log("방법3 : 비추");
const Deduplication3 = array.reduce(function(acc, cur) {
  if (acc.indexOf(cur) === -1) {
    acc.push(cur);
  } else {
    acc;
  }
  return acc;
}, []);
console.log(Deduplication3);
// [ 3 , 2 , 1 , 5 , 6 ]

Deduplication3.sort((a,b) => a - b);
console.log(Deduplication3);