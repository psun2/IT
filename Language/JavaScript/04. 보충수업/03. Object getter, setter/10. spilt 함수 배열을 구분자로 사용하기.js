// TODO: spilt 함수 배열을 구분자로 사용하기 ? 

// 문자열에서 separator(구분기호) 를 다중(?) 으로 넣어 줄때, 배열 형태처럼 값을 입력해주면 된다.

var myString = 'this|is|a|Test';
var splits = myString.split(['|']);

console.log(splits); //["this", "is", "a", "Test"]

var myString = 'ca,bc,a,bca,bca,bc';

var splits = myString.split(['a','b']); 
// myString.split(['a','b'])은 myString.split(String(['a','b']))와 같다

console.log(splits);  //["c", "c,", "c", "c", "c"]

// TODO: limit 옵션 같이주기

var myString2 = 'ca,bc,a,bca,bca,bc';

var splits2 = myString2.split(['a','b'], 3); 
// myString.split(['a','b'])은 myString.split(String(['a','b']))와 같다

console.log(splits2);  // ["c", "c,", "c"]