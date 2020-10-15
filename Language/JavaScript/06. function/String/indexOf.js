console.log("[예제1] - 문자열의 index 검색");

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log('The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, (indexOfFirst + 1)));
// expected output: "The index of the 2nd "dog" is 52"


// 40 과 52 라는 숫자는 검색하려고 하는 dog의 첫 글자 d의 위치입니다.

console.log("================================================================================================================")

console.log("[예제2] - 문자열의 다음 index 검색");

const string = "Blue Whale while Tearin free";
const testSearch = "e";

const test_IndexOf_A = string.indexOf(testSearch);
console.log(test_IndexOf_A); // 3
// 첫 번째 등장 인덱스를 반환 3번째 인덱스에 문자열 e 가 있습니다.

const test_IndexOf_B = string.indexOf(testSearch, test_IndexOf_A + 1);
console.log(test_IndexOf_B); // 9
// fromindex 옵션을 첫 번째 인덱스 +1 즉 4번째 인덱스부터 다시 검색하겠다.
// 4번째 인덱스 부터 검색한 결과 9번째 인덱스에 문자열 e가 있습니다.

const test_IndexOf_C = string.indexOf(testSearch, test_IndexOf_B + 1);
console.log(test_IndexOf_C); // 15
// fromindex 옵션을 두 번째 인덱스 +1 즉 10번째 인덱스부터 다시 검색하겠다.
// 10번째 인덱스 부터 검색한 결과 15번째 인덱스에 문자열 e가 있습니다.

console.log(string.indexOf(testSearch)); // 3
console.log(string.indexOf(testSearch, 4)); // 9
console.log(string.indexOf(testSearch, 10)); // 15
// 이와 같이 첫 번째 등장 인덱스를 검색하여 나온 숫자에 +1 씩을 하여,
// 다음번 인덱스를 추적해 나갑니다. 더이상 검색할 인덱스가 없으면 -1을 반환합니다.

console.log("================================================================================================================")

console.log("[예제3] - 문자열의 존재여부 확인");

console.log('Blue Whale'.indexOf('Blue') !== -1); // true
console.log('Blue Whale'.indexOf('Bloe') !== -1); // false
// 문자열이 존재 하면 true,
// 존재하지 않으면 false 를 나타냅니다.

