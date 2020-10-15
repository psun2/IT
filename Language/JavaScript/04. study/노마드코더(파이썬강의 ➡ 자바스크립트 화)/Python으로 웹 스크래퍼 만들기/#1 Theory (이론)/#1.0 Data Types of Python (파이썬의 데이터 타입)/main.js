// FIXME:TODO:  Data Types of Python (파이썬의 데이터 타입)

// TODO: variable

// TODO: Number

a = 2;
b = 3;

// TODO: print() function(함수)의 소개
// console.log()
console.log(a + b); // 5

// TODO: String
// TODO: text는 반드시 따옴표나 쌍따옴표에 둘러쌓여 있어야 합니다.
c = 'like this';
c = 'like this';
// "(쌍따옴표) 로 시작하면 반드시 "(쌍따옴표)로 닫아 주어야 합니다.
// "(쌍따옴표) 와 '(따옴표)를 같이 사용 할 수 없습니다.

// TODO: boolean
d = true;
// d = True;
e = false;
// e = False;
// 참과 거짓을 나타 냅니다.
// f = 'True'; 이런 경우 더이상 참과 거짓을 나타내지 않습니다.
// f는 True라는 text(String)을 나타내는 것 입니다.

// TODO: type function(함수)의 소개
// typeof
aString = 'like this';
// a_string = "like this";
aNumber = 3;
// a_number = 3;
aFloat = 3.12;
// a_float = 3.12;
aBoolean = false;
// a_boolean = False;
aNull = null;
// a_none = None;

console.log(typeof aString); // String
console.log(typeof aNumber); // number
console.log(typeof aFloat); // number
console.log(typeof aBoolean); // boolean
console.log(typeof aNull); // object

//  <class 'NoneType'> none 은 없다, 비어있다의 의미가 있습니다.
//  None 은 자바스크립트의 undefined 보단 null에 비슷 합니다.

// TODO: snake case (변수이름을 지정하는 방법)
// 뱀과 같이 길다하여 snake case라 합니다.
// camel case
super_long_variable = true;
// 자바스크립트의 camell case와 는 다릅니다.
// 자바스크립트 방식의 표기법
superLongVariable = true;

console.log(super_long_variable);
console.log(superLongVariable);

// 두 가지의 표기법은 에러 없이 똑같이 출력되고 있습니다.
// 하지만 자바스크립트 와 파이썬의 커뮤니티에선 각각의 표기법으로 암묵적인 동의하에 각각의 표기법을 사용을 하고 있으니,
// 표기법을 달리 하시는 것을 권장 드립니다.
