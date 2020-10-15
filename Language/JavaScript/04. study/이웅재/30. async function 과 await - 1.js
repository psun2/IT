// # async function 과 await

// Async - Await
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function

// async funcrtion 함수이름 () {}
// const 함수이름 = async () => {}

// Promise 객체를 리턴하는 함수
function p(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  }
  
  // Promise 객페를 이용해서 비동기 로직을 수행할 때
  p(1000).then(ms => {
    console.log(`${ms} ms 후에 실행된다`);
  });
  
  // Promise 객체를 리턴하는 함수를 await 로 호출하는 방법
  // const ms = await p(1000); // 오류떠서 주석처리
  // console.log(`${ms} ms 후에 실행된다`);  // 오류떠서 주석처리
  // SyntaxError: await is only valid in async function
  
  // await 를 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다.
  function p2(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  }
  
  (async function main() {
    const ms = await p2(1000);
    console.log(`${ms} ms 후에 실행된다 여기는 async await`);
  })();
  
  // Promise 객체가 rejected 된 경우의 처리를 위해
  // try catch 를 이용한다.
  function p3(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("reason"));
      }, ms);
    });
  }
  
  (async function main() {
    try {
      const ms = await p3(1000);
    } catch (error) {
      console.log(`1000 ms 후에 try catch 문 실행${error}`);
    }
  })();
  
  // async function 에서 return 되는 값은
  // Promise.resolve 함수로 감싸서 리턴된다.
  function p4(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("reason"));
      }, ms);
    });
  }
  
  async function asyncP() {
    return "Mark";
  }
  
  (async function main() {
    try {
      const name = await asyncP();
      console.log(name);
    } catch (error) {
      console.log(`1000 ms 후에 try catch 문 실행${error}`);
    }
  })();
  