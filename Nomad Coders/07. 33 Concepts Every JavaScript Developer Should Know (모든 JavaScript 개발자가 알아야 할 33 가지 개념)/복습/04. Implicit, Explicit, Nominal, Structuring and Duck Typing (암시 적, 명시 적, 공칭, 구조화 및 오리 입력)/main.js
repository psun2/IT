// - [GitHub](https://github.com/leonardomso/33-js-concepts)
// - [Nomad Coders YouTube](https://www.youtube.com/watch?v=dIIQmSsg0SI&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=7)

// TODO:FIXME: 04. Implicit, Explicit, Nominal, Structuring and Duck Typing (암시 적, 명시 적, 공칭, 구조화 및 오리 입력)

// 숫자와 문자열을 더하려고 할때, 숫자를 문자열에 같다가 붙입니다.
console.log(`4 + hello : ${4 + 'hello'}`); // 4hello
console.log(`4 + 4 + hello : ${4 + 4 + 'hello'}`); // 8hello
console.log(`'' == true : ${'' == true}`); // false
console.log(`1 == true : ${1 == true}`); // true
console.log(`0 == true : ${0 == true}`); // false
console.log(`NaN == true : ${NaN == true}`); // false
console.log(`undefined == true : ${undefined == true}`); // false
console.log(`null == true : ${null == true}`); // false
console.log(`66 + true : ${66 + true}`); // 67
console.log(`66 + false : ${66 + false}`); // 66
console.log(`55 - true : ${55 - true}`); // 54
console.log(`55 * true : ${55 * true}`); // 55
console.log(`55 * false ${55 * false}`); // 0

// ture 는 == 을 만나면 type coertion 이 일어납니다.
// true 는 1 을 반환하고 false는 0을 반환합니다.
// === 을 사용하면 type coertion 이 일어나는 것을 방지 할 수 있습니다.
console.log(`"1" == 1 : ${'1' == 1}`); // true
console.log(`"1" === 1 : ${'1' === 1}`); // false
console.log(`"true" == true : ${'true' == true}`); // false
console.log(`"true" == 1 : ${'true' == 1}`); // false
console.log(`true == 1 : ${true == 1}`); // true

const hello = '';
if (hello) {
  console.log('hello');
} else {
  console.log('bye');
}
// bye
if (typeof hello !== undefined) {
  console.log('hello');
} else {
  console.log('bye');
}
// hello

console.log(`6 >> 2 : ${6 >> 2}`);
console.log(`6 << 2 : ${6 << 2}`);
console.log(`-6 >> 2 : ${-6 >> 2}`);
console.log(`-6 << 2 : ${-6 << 2}`);
