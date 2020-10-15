// # Promise
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

// then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면,
// 비동기 작업을 순차적으로 아래로 표현할 수 있습니다.
// then 에 함수를 넣는 여러 방법을 확인해 봅시다.

const start = Date.now();

function p() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
};

p()
.then(() => {
  console.log("p함수는 : ", Date.now() - start + "ms 초 뒤에 여기");
  return p();
})
.then(() => p())
.then(p)
.then(() => {
  console.log("p함수는 : ", Date.now() - start + "ms 후에 fulfilled 됩니다.");
})

//////////////////////////////////////////////////////////////////////////////////////////////////

function p2(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms)
  })
};

p2(1000)
.then(() => {
  // console.log("p2함수는 : " + Date.now() - start + "ms 후에 callback 함수가 실행됩니다.");
  console.log("p2함수는 : ", Date.now() - start + "ms 후에 callback 함수가 실행됩니다.");
  return p2(1000);
})
.then(() => {
  console.log("p2함수는 : ", Date.now() - start + "ms 후에 callback 함수가 실행됩니다.");
  return p2(1000);
})
.then(() => {
  console.log("p2함수는 : ", Date.now() - start + "ms 후에 callback 함수가 실행됩니다.");
})