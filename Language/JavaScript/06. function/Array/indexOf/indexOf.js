const array = [3, 2, 1, 5, 1, 6, 5, 2, 3];

const test_IndexOf_A = array.indexOf(3);
console.log(test_IndexOf_A); // 0
// 원소 값 3은 0번째 index에 들어 있습니다.

const test_IndexOf_B = array.indexOf(3, test_IndexOf_A + 1);
console.log(test_IndexOf_B); // 8
// searchElement : 3 (요소 3의 index가 몇번째 index인지 검색합니다.)
// fromIndex_(Optional) : test_IndexOf_A + 1 의 다음에 나오는 3의 요소를 찾는 옵션입니다.

