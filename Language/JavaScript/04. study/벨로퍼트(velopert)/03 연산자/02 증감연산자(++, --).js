// Title : 증감연산자
// subTitle : 증감연산자 ++, -- 너희들은 누구세요 ? 

let a = 1;
a++;
console.log(a); // 2
// ++연산자는 기존의 c의 값에 1을 더해 줍니다.

let b = 1;
++b;
console.log(b); // 2

// 똑같은 값이 나와서 이해가 잘 안되신다고요? 밑에 예제를 보시죠!

let c = 1;
console.log(c); // 1
console.log(c++); // 1 => 이전결과값을 반환해주고, 1을 더해줍니다.
console.log(c); // 2 ==> 위의 결과로 c는 2가 되어있습니다.
console.log(++c); // 3 => 먼저 1을 더하고, 그 결과값을 반환합니다.
console.log(c); // 3 ==> c++과는 다르게 c는 아직 3이란 값을 가지고 있습니다.

let d = 1;
console.log(d); // 1
console.log(d--); // 1
console.log(d); // 0
console.log(--d); // -1
console.log(d); // -1