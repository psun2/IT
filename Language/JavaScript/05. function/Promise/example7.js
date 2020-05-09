// # Promise
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

// p 라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다.

new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /* fulfuilled */
    }, 1000)
})