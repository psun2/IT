// # Async - Await
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function

function p(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ms);
        // reject(new Error('reason'));
      }, ms);
    });
  }
  
 // Promise
  
 p(1000)
   .then(() => p(1000))
   .then(p(1000))
   .then(() => console.log(".then 3000ms 후에 실행"));

// async await
(async function main() {
   await p(1000);
   console.log("1초후 실행");
   await p(1000);
   console.log("2초후 실행");
   await p(1000);
   console.log("async await3000ms 후에 실행");
}) ();
  