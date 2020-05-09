// # Promise

// value 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다.
//     value 가 프로미스 객체면, resolve 된 then 메서드를 실행합니다.
//     value 가 피로미스 객체가 아니면, value 를 인자로 보내면서 then 메서드를 실행합니다.

Promise.resolve(/* value */);

Promise.resolve(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 1000);
  })
).then(data => {
  console.log(
    "프로미스 객체인 경우, resolve 된 결과를 받아 then 이 실행됩니다.",
    data
  );
});

Promise.resolve("bar").then(data => {
  console.log("then 메서드가 없는 경우 fulfilled 됩니다", data);
});

// Promise.reject 를 사용하면, catch 로 연결된 rejected 상태로 변경됩니다.
Promise.reject(/* value */);

Promise.reject(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("reason"));
    }, 1000);
  })
)
  .then(error => {
    console.log("resolve 시 then 이 실행 됩니다.", error);
  })
  .catch(error => {
    console.log("reject 시 실행이 됩니다" + error);
  });

Promise.reject("value 가 프로미스 객체가 아닙니다.").catch(error => {
  console.log(error);
});

// 프로미스 객체 여러개를 생성하여,
// 배열로 만들어 인자로 넣고 Promise.all 을 실행하면,
// 배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then 의 함수가 실행됩니다.
// then 의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다.

// Promise.all([프로미스 객체들])
function p(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  }
  
  Promise.all([p(1000), p(2000), p(3000)]).then(ms => {
    console.log("모두 fulfilled 된 이후에 실행됩니다.", ms);
  });
  // 모두 fulfilled 된 이후에 실행됩니다. [1000, 2000, 3000]
// 콘솔이 3초 뒤에 한번 찍힘 말 그대로 모두 풀필드가 이루어 지고 나서, 콘솔이 실행됨.

// 프로미스 객체 여러개를 생성하여,
// 배열로 만들어 인자로 넣고 Promise.all 을 실행하면,
// 배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then 의 함수가 실행됩니다.
// then 의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다.

// Promise.race([프로미스 객체들])
function p2(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  }
  
  Promise.race([p2(1000), p2(2000), p2(3000)]).then(ms => {
    console.log("가장 빠른 하나가 fulfilled 된 이후에 실행됩니다.", ms);
  });
  // 가장 빠른 하나가 fulfilled 된 이후에 실행됩니다. 1000
  // all과는 다르게 결과 값도 제일 빠른것을 기준으로 then 으로 전달해준다.
  