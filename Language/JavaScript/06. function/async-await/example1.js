// # Async - Await
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function

// async function 함수이름() {}
// const 함수이름 = async () => {}

// Promise 객체를 리턴하는 함수

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    })
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때

p(1000)
.then((ms) => {
    console.log(`${ms}ms 후에 실행된다.`)
})

// Promise 객체를 리턴하는 함수를 await 로 호출하는 방법

const ms = await p(1000);
console.log(`${ms}ms 후에 실행된다.`)

// # JavaScript Demo: Statement - Async
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
}

// # Examples
//     # Simple example
var resolveAfter2Seconds = function() {
    console.log("starting slow promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve(20);
        console.log("slow promise is done");
      }, 2000);
    });
};
  
var resolveAfter1Second = function() {
    console.log("starting fast promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve(10);
        console.log("fast promise is done");
      }, 1000);
    });
};
  
var sequentialStart = async function() {
    console.log('==SEQUENTIAL START==');
  
    // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
    const slow = await resolveAfter2Seconds();
    console.log(slow);
  
    const fast = await resolveAfter1Second();
    console.log(fast);
}
  
var concurrentStart = async function() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second();
  
    console.log(await slow);
    console.log(await fast); // waits for slow to finish, even though fast is already done!
}
  
var stillConcurrent = function() {
    console.log('==CONCURRENT START with Promise.all==');
    Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    });
}
  
var parallel = function() {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message)=>console.log(message));
    resolveAfter1Second().then((message)=>console.log(message));
}
  
sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
// wait above to finish
setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"
// wait again
setTimeout(stillConcurrent, 7000); // same as concurrentStart
// wait again
setTimeout(parallel, 10000); // trully parallel: after 1 second, logs "fast", then after 1 more second, "slow"


