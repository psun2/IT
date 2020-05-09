// - [GitHub](https://github.com/leonardomso/33-js-concepts)
// - [Nomad Coders YouTube](https://www.youtube.com/watch?v=hYHv5m1NMFE&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=8)

// TODO:FIXME: 03. Value Types and Reference Types (값 유형 및 참조 유형)

console.log([10] === [10]); // false
console.log({ a: 20 } === { a: 20 }); // false

let a = 50;
let b = a; // <--- what's on a? a = 50
// let b = 50;
// b 는 a 의 값을 복사합니다.
console.log(b); // 50
a = 10;
console.log(b); // 50
// a 의 value를 바꿔주는 지점이 b의 선언보다 아래 있으므로,
// b는 여전히 50 을 가르킵니다.

let sexy = ['kimchi', 'potato'];
const pretty = sexy;
console.log('"pretty" 배열은 "sexy" 배열을 참조합니다. pretty : ' + pretty);
// "pretty" 배열은 "sexy" 배열을 참조합니다. pretty : kimchi,potato
sexy.push('hello');
console.log('"sexy" 배열에 hello를 push 합니다 sexy : ' + sexy);
// "sexy" 배열에 hello를 push 합니다 sexy : kimchi,potato,hello
console.log('"pretty" 배열은 "sexy" 배열을 참조합니다. pretty : ' + pretty);
// "pretty" 배열은 "sexy" 배열을 참조합니다. pretty : kimchi,potato,hello
// pretty 를 업데이트 하지 않았음에도 pretty는 sexy를 복사하는 것이 아닌,
// reference 하고 있기때문에 sexy의 업데이트와 동시에 pretty도 동시에 업데이트 됩니다.
// TODO:
pretty.push('bye');
console.log('"pretty" 배열에 bye를 push 합니다 pretty : ' + pretty);
// "pretty" 배열에 bye를 push 합니다 pretty : kimchi,potato,hello,bye
console.log(
  '"pretty" 배열에서 "sexy" 배열을 참조하기 때문에 "pretty" 배열이 업데이트되면, "sexy" 배열 도 자동으로 업데이트 됩니다.(이해불가) sexy : ' +
    sexy,
);
// "pretty" 배열에서 "sexy" 배열을 참조하기 때문에 "pretty" 배열이 업데이트되면, "sexy" 배열 도 자동으로 업데이트 됩니다.(이해불가) sexy : kimchi,potato,hello,bye

// FIXME: ?????
sexy = ['kimchi', 'potato', 'hello', 'bye', 'lalala'];
console.log(pretty); // (4) ["kimchi", "potato", "hello", "bye"]

console.log(
  `[10] === [10] 이경우 이 둘은 각각 메모리에 위치한 각기 다른 오브젝트라고 이해합니다 ${
    [10] === [10]
  }`,
);
// [10] === [10] 이경우 이 둘은 각각 메모리에 위치한 각기 다른 오브젝트라고 이해합니다 false

const x = {
  a: 'hello',
};

const y = x;
y.a = 'bye';

console.log(x);
// {a: "bye"}
console.log(y);
// {a: "bye"}
