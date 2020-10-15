// # Promise
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

// p.then 으로 callback 함수를 설정했기 때문에 
// fulfilled 되면서 callback 이 실행됩니다.

const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      resolve(); /* fulfuilled */
    }, 1000);
  });
  
p.then(() => {
  console.log('1000ms 후에 fulfilled 됩니다.');
})


// 이것도 되네 ?
p.then(console.log("callback 함수를 쓰지 않으면 setTimeout이 안먹힘"));