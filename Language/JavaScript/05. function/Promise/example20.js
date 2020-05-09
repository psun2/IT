// # Promise
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

// 프로미스 객체 여러개를 생성하여,
// 배열로 만들어 인자로 넣고 Promise.all() 을 실행하면,
// 배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then 의 함수가 실행됩니다.
// then 의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다.

// Promise.all([프호미스 객체들]);

const start = Date.now();

function p (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms)
  })
}

Promise.all([p(1000), p(2000), p(3000), p(4000)])
.then((messages) => {
  console.log(Date.now() - start+"ms " + "모두 fulfilled 된 이후에 실행됩니다.","Promise.all() : ", messages);
})


console.log("이게 제일 아래 있지만 제일 빨리 나와요 ~~")
console.log("비동기의 신")