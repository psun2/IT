// # Promise
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

// executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected (거부) 상태가 됩니다.

new Promise((resolve, reject) => {
    // pending
    // 비동기적인 작업 진행
    reject(); // rejected 
})