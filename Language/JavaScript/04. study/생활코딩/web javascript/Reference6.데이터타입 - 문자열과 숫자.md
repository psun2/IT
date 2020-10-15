# 데이터타입 - 문자열과 숫자

.toUpperCase() : 문자열의 소문자를 대문자로 의 변환
'hello world'.toUpperCase()
"HELLO WORLD"

.indexOf() : 찾고 싶은 문자열을 찾아 준다
'hello world'.indexOf('o');
4  : 4번째 인덱스 에서 o가 있음. 인덱스는 0번 부터 시작

.trim() : 공백을 지워준다.
'         hello world             '
"         hello world             "
'         hello world             '.trim();
"hello world"