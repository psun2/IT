# Reference : MDN
 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

# Title : indexOf()

# Subtitle
문자열에서 내가 찾고자 하는 문자는 이 문자열의 몇번째에서 시작할까 ?

# word
index : 인덱스, 색인, 표시
Of : ~의, 으로, 전
searchValue : 검색 값
fromIndex(Optional) : ~ 색인으로 부터

# 요약
indexOf() 메서드는 호출한 String 객체에서 주어진 값과 
일치하는 첫 번째 인덱스를 반환합니다. 
일치하는 값이 없으면 -1을 반환합니다. 

# 구문
str.indexOf(searchValue[, fromIndex])

# 매개변수
[searchValue]
찾으려는 문자열. 아무 값도 주어지지 않으면 문자열 "undefined"를 찾으려는 문자열로 사용합니다.

[fromIndex_(Optional)] 
문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값입니다. 어떤 정수값이라도 가능합니다. 기본값은 0이며, 문자열 전체를 대상으로 찾게 됩니다. 만약 fromIndex 값이 음의 정수이면 전체 문자열을 찾게 됩니다. 만약 fromIndex >= str.length 이면, 검색하지 않고 바로 -1을 반환합니다. searchValue가 공백 문자열이 아니라면, str.length를 반환합니다.

[반환_값]
searchValue의 첫 번째 등장 인덱스. 찾을 수 없으면 -1.

# 설명
문자열 내에 있는 문자들은 왼쪽에서 오른쪽 방향으로 순번이 매겨집니다. 제일 처음 문자는 0번째 순번(index)이며, stringName 문자열의 마지막 문자의 순번 stringName.length -1 입니다. 

indexOf() 메서드는 대소문자를 구분합니다. 예를 들면, 아래 예제는 일치하는 문자열이 없으므로 -1을 반환합니다.

'0'을 평가했을 때 true가 아니고, -1을 평가했을 때 false가 아닌 것에 주의해야 합니다. 따라서, 임의의 문자열에 특정 문자열이 있는지를 확인하는 올바른 방법은 다음과 같습니다.