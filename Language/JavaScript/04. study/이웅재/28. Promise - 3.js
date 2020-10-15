// # Promise

// fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면,
// .finally 설정하고, 함수를 인자로 넣습니다.
function p() {
    return new Promise((resolve, reject) => {
      /* pending */
      setTimeout(() => {
        reject(new Error("error reason")); // rejected  객체도 만들어 보낼 수 있음!
      }, 1000);
    });
  }
  
  p()
    .then(message => {
      console.log("1000ms 후에 fulfilled 됩니다." + message);
    })
    .catch(error => {
      console.log("1000ms 후에 rejected 됩니다." + error);
    })
    .finally(() => {
      console.log("최종작업 완료!");
    });
  
  // 보통 비동기 작업을 할때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다.
  // 이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다.
  function c(callback) {
    setTimeout(() => {
      callback();
    }, 1000);
  }
  
  c(() => {
    console.log("1000ms 후에 callback 함수가 실행됩니다.");
  });
  
  c(() => {
    c(() => {
      console.log("2000ms 후에 callback 함수가 실행됩니다.");
    });
  });
  
  c(() => {
    c(() => {
      c(() => {
        console.log("3000ms 후에 callback 함수가 실행됩니다.");
      });
    });
  });
  
  // then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝 하면,
  // 비동기 작업을 순차적으로 아래로 표현할 수 있습니다.
  // then 에 함수를 넣는 여러 방법을 확인해봅시다.
  function p1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  
  p1()
    .then(() => {
      return p1();
    })
    .then(() => p1())
    .then(p1)
    .then(() => {
      console.log("4000ms 후에 fulfilled 됩니다.");
    });
  