console.log([10] === [10]); // false
console.log({ a: 20 } === { a: 20 }); //false

let a = 50;
let b = a; // Whats on a? => a = 50
console.log(b); // 50

a = 10;
console.log(b); // 50

// b 는 위에 있는 a 의 값을 복사합니다.
// 이미 복사되어서 b 에 value 가 지정 되 었으므로,
// 그래서 9번 라인에서 a를 10으로 바꾸고 출력을 해도 b 는 50 입니다.

// Reference
const sexy = ['kimchi', 'potato'];
const pretty = sexy;

console.log(pretty); // [ 'kimchi', 'potato' ]

sexy.push('hello');

console.log(pretty); // [ 'kimchi', 'potato', 'hello' ]

// sexy의 값이 해당 배열(김치, 포테이토)이 아니라
// sexy는 해당 배열을 참조(Reference)를 하고 있습니다.

// 배열은 둥둥 떠잇고, sexy는 해당 배열을 가리키고 있는 것 입니다.
// 이는 a = 50이다 라는 것과는 다릅니다.
// 참조하는 것이 아니고 해당 값이라고 말하는 것 입니다.

// 하지만 pretty 의 경우, sexy는 해당 배열을 참조 하는 것 입니다.
// 해당 배열은 어느 메모리 어딘가에 위치해 있습니다.
// 그리고 pretty는 sexy 를 참조 하고 있습니다.

// 즉, sexy 와 pretty 가 같은 동일한 배열을 참조 하고 있는 것 입니다.
// 그렇기 때문에! 배열을 업데이트하면,
// pretty, sexy도 마찬가지로 업데이트 된 배열을 출력하는 것 입니다.
// why? 동일한 배열을 참조하고 있으니까..

pretty.push('lalalala');

console.log(sexy); // [ 'kimchi', 'potato', 'hello', 'lalalala' ]

// 보다 시피 해당배열을 sexy 혹은 pretty에서 업데이트 했습니다.
// 둥둥 떠다니는 해당배열을 sexy 와 pretty가  각각 참조한 것 이 됩니다.

console.log([10] === [10]); // false
// [10] 과 [10] 은 각각 메모리에 위치한 각기 다른 오프젝트 이므로,
// 서로 같지 않습니다.

const x = {
  a: 'hello',
};

const c = x;

c.a = 'lalala';

console.log(x); // { a: 'lalala' }

// 이러한 상황에서는 x를 통해 c를 업데이트 할 수 있습니다.

// 이것이 바로 value 와 reference의 차이점 입니다.

// TODO:
// value는 String, Number, boolean, NaN, undefined, null이 가능 하고
// Reference는 Array, Object, function 에서 사용될 수 있습니다.
