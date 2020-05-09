console.log(4 + 'hello'); // 4hello
console.log(4 + 4 + 'hello'); // 8hello
console.log('' == true); // false
console.log(1 == true); // true
console.log(66 + true); // 67

// type conversion => 즉, 자바스크립트가 값을 강제적으로 변환시킨다는 뜻 입니다.

console.log(66 + true); // 67
// 자바스크립트는 true를 1로 변환시켜 66 + 1 = 67을 반환합니다.
console.log(66 + false); // 66
// 비슷하게 fasle는 0이 됩니다. 66 + 0 = 66이 반환 됩니다.
console.log(55 - true); // 54
console.log(55 * true); // 55
console.log(55 * false); // 0

console.log(66 + 'false'); // 66false
// String이 있으면 하나의 String 덩어리로 인식합니다.
// 이걸 loaded operator이라고 합니다.

console.log(10 + 66 + 'false'); // 76false
// 10 과 66 을 위 예제처럼 String 으로 인식하지 않는 이유는
// 자바스크립트는 왼쪽에서 오른쪽으로 읽습니다.
// 그래서 10 + 66 을 먼저하고 'false'를 더해 줍니다.
// 그래서 결국 76false 가 됩니다.

console.log(25 - '1'); // 24
// 이렇게 type coercion을 이해하는것은 중요합니다.
// 이제 이걸 보았을때 숫자로 변환했다는 것을 알수 있게 되는 겁니다.

console.log('' == true); // false
// 텅빈 String 은 거짓(false) 입니다.
console.log(0 == true); // false
console.log(NaN == true); // false
console.log(undefined == true); // false
console.log(null == true); // false

console.log('' == true); // false
// 텅빈 String 은 제로바이트 입니다. 그걸 0으로 변환 시킵니다.
// 그리고 0은 거짓(false) 가 되어 false를 반환 합니다.

// == 와 다르게 === 을 사용하면 type coercion 이 일어나지 않습니다.!
console.log('1' == 1); //true
// == 사용하면 String 1과 Number 1이 type coercion이 일어나 true가 나오게 됩니다.
console.log('1' === 1); // false
// === 를 세번 사용하면 type coercion 이 일어나지 않아. 거짓을 출력하게 됩니다.

console.log('true' == true); // false
// console.log('1' == 1); 은 true인 반면에 console.log('true' == true) 왜 false 일까요?
// 그 이유는 ==이 boolean을 만나면 숫자로 변환 합니다.
// 즉, true 가 1 이되고, false 가 0 이 됩니다.
// 또한 앞의 String을 숫자로 변환하려 합니다.
console.log(parseInt('true')); // NaN
// 그러나 보다시피 'true' 는 숫자가 되지 않습니다.

// 따라서 뒷단의 true 는 1이되고, 앞단의 true는 숫자가 아닌 NaN이 되므로
console.log(NaN == 1); // false
// 위와 같은 식이 성립하고 결과는 false가 됩니다.

console.log('true' === true);
// 이렇게 ===을 사용하면 이상한 규칙(type coercion)을 피해 갈 수 있습니다.
// === 을 알아두시면 많은 버그들을 피해 갈 수 있습니다.

const hello = ''; // 텅빈 String = false

if (hello) {
  console.log('hello');
}
// 출력 X

if (typeof hello !== 'undefined') {
  console.log('hello');
}
// hello 출력
