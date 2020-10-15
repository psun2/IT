// FIXME:TODO: #1.13 Modules (모듈)

// TODO: python 코드

// # print(math.ceil(1.2));
// # NameError: name 'math' is not defined
// # NameError : 이름 'math'가 정의되지 않았습니다.

// # import math;
// # # math 모듈을 전부 import 합니다.
// # # 이는 굉장히 비효율 적입니다.

// # print(math.ceil(1.2)); # 2
// # print(math.fabs(1.2));
// # # 절대값 출력 : 1.2
// # print(math.fabs(-1.2));
// # # 절대값 출력 : 1.2
// # print(math.floor(1.2)); # 1

// from math import fsum,ceil;
// # 위와 같은 구문으로 사용하고 싶은 모듈만 import할 수 있습니다.

// print(ceil(1.2)); # 2
// # print(fsum((1, 2, 3, 4, 5, 6, 7));
// # TypeError: fsum() takes exactly one argument (7 given)
// # TypeError : fsum ()은 정확히 하나의 인수를 취합니다 (7 주어진)
// # list 로 묶어 하나의 인수형태로 전환시켜줍니다.
// # list 대신 Tuple 은 인수로 전달할 수 없습니다.

// # print(fsum[1, 2, 3, 4, 5, 6, 7]);
// # TypeError: 'builtin_function_or_method' object is not subscriptable
// # TypeError : 'builtin_function_or_method'개체를 첨자화할 수 없습니다

// print(fsum([1, 2, 3, 4, 5, 6, 7])); # 28.0

// # print(fsum(((1, 2, 3, 4, 5, 6, 7)));
// # SyntaxError: invalid syntax
// # SyntaxError : 유효하지 않은 구문
// # list 대신 Tuple 은 인수로 전달할 수 없습니다.

// # print(floor(1.2));
// # NameError: name 'floor' is not defined
// # NameError : 이름 'floor'가 정의되지 않았습니다
// # from math import 구문으로 fsum과 ceil만 import 해서 floor() 는 정의되지 않아서 사용이 안된다는 error 입니다.

// from math import fsum as sexy_sum;

// print(sexy_sum([1, 2, 3, 4, 5, 6, 7])); # 28.0

// # from math import fsum as sexy_sum 구문을 이용하여, import 하면서 moduled의 이름을 변경 할 수 도 있습니다.

// from calculator import plus, minus;
// # calculator.py 를 만들어 main.py로 import 해 올 수 있습니다.

// print(plus(1, 2), minus(2, 1));

// TODO: 자바스크립트 코드

const random = Math.random();
const floor = Math.floor(random);
const ceil = Math.ceil(random);
const absoluteValue = Math.abs(random);

console.log(`random : ${random}`);
// random : 0.028783028669914668
console.log(`floor : ${floor}`);
// floor : 0
console.log(`ceil : ${ceil}`);
// ceil : 1
console.log(`abs : ${absoluteValue}`);
console.log(`Absolute 1.2: ${Math.abs(1.2)}, Absolute -1.2: ${Math.abs(-1.2)}`);
