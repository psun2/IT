// # Promise
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Promise.reject() 를 사용하면, catch 로 연결된 rejected 상태로 변경됩니다.

const start = Date.now();

Promise.reject( /* value */ );

Promise.reject(new Error("reason"))
.then((value) => {
  console.log("reject니까 여긴 안찍힘 찍히면 이상");
})
.catch((error) => {
  console.log(error);
})