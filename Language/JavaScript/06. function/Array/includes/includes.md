# Reference : MDN
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

# Title : includes()

# Subtitle
제가 제시하는 value가 배열에 포함 되어 있나요 ?

# word
includes : 포함
includes : 탐색할 요소.
fromIndex(Optional) : ~ 색인으로 부터

# 요약
includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.

# 구문
arr.includes(valueToFind[, fromIndex])

# 매개변수
[valueToFind]
탐색할 요소.
<mark>참고: 문자나 문자열을 비교할 때, includes()는 <b>대소문자를 구분</b>합니다.</mark>

[fromIndex_(Optional)] 
이 배열에서 searchElement 검색을 시작할 위치입니다. 음의 값은 array.length + fromIndex의 인덱스를 asc로 검색합니다. 기본값은 0입니다.

[반환_값]
Boolean.
