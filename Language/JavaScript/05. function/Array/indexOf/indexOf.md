# Reference : MDN
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

# Title : indexOf()

# Subtitle
내가원하는 배열의 value는 배열의 몇번째 index에 존재할까?

# word
index : 인덱스, 색인, 표시
Of : ~의, 으로, 전
searchElement : 검색 요소
fromIndex(Optional) : ~ 색인으로 부터

# 요약
indexOf() 메서드는 배열에서 지정된 요소를 찾을 수있는 
첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.

# 구문
arr.indexOf(searchElement[, fromIndex])

# 매개변수
[searchElement]
배열에서 찾을 요소입니다.

[fromIndex_(Optional)] 
검색을 시작할 색인입니다. 인덱스가 배열의 길이보다 크거나 같은 경우 -1이 반환되므로 배열이 검색되지 않습니다. 제공된 색인 값이 음수이면 배열 끝에서부터의 오프셋 값으로 사용됩니다. 참고 : 제공된 색인이 음수이면 배열은 여전히 앞에서 뒤로 검색됩니다. 계산 된 인덱스가 0보다 작 으면 전체 배열이 검색됩니다. 기본값 : 0 (전체 배열 검색).

[반환_값]
배열 내의 요소의 최초의 인덱스. 발견되지 않으면 -1.

# 설명
indexOf()는 엄격한 동등성 (=== 또는 triple-equals 연산자에서 사용하는 것과 같은 메서드)을 사용하여 검색 요소를 Array의 요소와 비교합니다.