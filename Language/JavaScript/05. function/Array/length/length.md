# Reference : MDN
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length

# Title : length

# Subtitle
이 배열의 길이는 ?

# word
map : (배치구조 등에 대한 정보를) 발견하다
currentValue : 현재 값, 현재 가치
index (Optional) : 색인, 표시
array (Optional): 배열
thisArg (Optional)  === this Argument : 이 인자, 이 인수

# 요약
Array 인스턴스의 length 속성은 배열의 길이를 반환합니다. 반환값은 부호 없는 32비트 정수형이며, 배열의 최대 인덱스보다 항상 큽니다. length 속성에 값을 설정할 경우 배열의 길이를 변경합니다.

# 설명
length 속성의 값은 양의 정수이며 232 미만의 값을 가집니다.

아무 때나 length 속성에 값을 설정해 배열을 절단할 수 있습니다. length 속성으로 배열의 길이를 늘리면 실제 원소의 수가 증가합니다. 예를 들어 길이가 2인 배열의 length를 3으로 설정한다면 마지막에 undefined가 추가돼 총 3개의 요소를 갖게 됩니다.

그러나 length 속성의 값이 꼭 배열에 정의된 원소의 수를 나타내진 않습니다. length와 숫자형 속성의 관계를 참고하세요.