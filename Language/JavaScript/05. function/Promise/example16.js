// # Promise
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

// 보통 비동기 작업을 할때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다.
// 이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다.

// 비동기 작업을 callback 으로 할때의 작업 모습(callback 지옥)

const start = Date.now();
function c(callback) {
  setTimeout(() => {
    callback();
  }, 1000)
}
c( () => {
  console.log(Date.now() - start + "ms 후에 callback 함수가 실행됩니다.");
  c( () => {
    console.log(Date.now() - start + "ms 후에 callback 함수가 실행됩니다.");
    c( () => {
      console.log(Date.now() - start + "ms 후에 callback 함수가 실행됩니다.");
    });
  });
});

