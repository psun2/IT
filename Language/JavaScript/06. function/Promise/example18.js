// # Promise
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

// value 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된
// then 메서드를 실행합니다.
//   value 가 프로미스 객체면 resolve 된 then 메서드를 실행합니다.
//   value 가 프로미스 객체가 아니면, value 를 인자로 보내면서 then 메서드를 실행합니다.

const start = Date.now();

Promise.resolve( /* value */ );

Promise.resolve(new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(' 프로미스 객체인 경우 ');
  }, 1000)
})).then((data) => {
  console.log(
    "Promise.resolve()는 ", 
    Date.now() - start +
    "ms초 후에 실행되며, " +
    '프로미스 객체인 경우, resolve 된 결과를 받아서 then 이 실행됩니다. ' + 
    "data : ",
    data 
    );
})

Promise.resolve('프로미스 객체가 아닌 경우').then( (data) => {
  console.log("then 메서드가 없는 경우, 바로 fulfilled 됩니다. data : ", data)
})