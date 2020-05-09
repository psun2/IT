# TODO: Data Types of Python (파이썬의 데이터 타입)

# TODO: variable

# TODO: Number
a = 2
b = 3
# run 을 해도 아무 일도 일어나지 않습니다.
# why? 단지 2개의 variable(변수)를 생성 했을뿐, 어떠한 조작 혹은 명령을 하지 않았습니다.

# TODO: print() function(함수)의 소개
print(a + b); # 5

# TODO: String
# TODO: text는 반드시 따옴표나 쌍따옴표에 둘러쌓여 있어야 합니다.
c = "like this";
c = 'like this';
# "(쌍따옴표) 로 시작하면 반드시 "(쌍따옴표)로 닫아 주어야 합니다. "(쌍따옴표) 와 '(따옴표)를 같이 사용 할 수 없습니다.

# TODO: boolean
d = True;
e = False;
# 참과 거짓을 나타 냅니다.
# f = 'True'; 이런 경우 더이상 참과 거짓을 나타내지 않습니다.
# f는 True라는 text(String)을 나타내는 것 입니다.

# TODO: type function(함수)의 소개
a_string = "like this";
a_number = 3;
a_float = 3.12;
a_boolean = False;
a_none = None;

print(type(a_number)); 
# <class 'int'> 정수를 뜻 합니다.

print(type(a_float)); 
# <class 'float'> 소수를 뜻 합니다

print(type(a_string)); 
# <class 'str'>

print(type(a_boolean)); 
# <class 'bool'> 참과 거짓을 의미 합니다.

print(type(a_none)); 
# <class 'NoneType'> none 은 없다, 비어있다의 의미가 있습니다.
# None 은 자바스크립트의 undefined 보단 null에 비슷 합니다.

# TODO: snake case (변수이름을 지정하는 방법)
# 뱀과 같이 길다하여 snake case라 합니다.
super_long_variable = True;
# 자바스크립트의 camell case와 는 다릅니다.
# 자바스크립트 방식의 표기법
superLongVariable = True;

print(super_long_variable); # True
print(superLongVariable); # True

# 두 가지의 표기법은 에러 없이 똑같이 출력되고 있습니다.
# 하지만 자바스크립트 와 파이썬의 커뮤니티에선 각각의 표기법으로 암묵적인 동의하에 각각의 표기법을 사용을 하고 있으니, 표기법을 달리 하시는 것을 권장 드립니다.
