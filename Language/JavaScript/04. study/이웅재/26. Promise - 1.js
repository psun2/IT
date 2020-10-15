// # Promise
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.

// ES6 부터 JavaScript 의 표준 내장 객체 로 추가되었습니다
// ES6 를 지원하는 브라우저나 Node.js 에서 전역에 있는 Promise 를 확인할 수 있습니다

console.log(Promise, typeof Promise);
// [Function: Promise] function

// 생성자를 통해서 프로미스 객체를 만들 수 있습니다
// 생성자의 인자로 executor 라는 함수를 이용합니다.
new Promise( /* executor */ );

// executor 함수는 resolve 와 reject 를 인자로 가집니다.
// (resolve, reject) => {...}
// resolve 와 reject 는 함수 입니다.
// resolve(); reject();
// new Promise( /* executor */(resolve, reject) => {} );

// 생성자를 통해서 프로미스 객체를 만드는 순간 pending (대기) 상태라고 합니다.
new Promise((resolve, reject) => {}) //pending

// executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled (이행) 상태가 됩니다.
new Promise((resolve, reject) => {
    // 생성과 동시에 pending (대기) 상태 돌입
    // 비 동기적인 작업 진행
    resolve(); // resolve 함수를 실행시킴과 동시에 fulfilled (이행) 상태에 돌입하게 됩니다.
})

// executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected (거부) 상태가 됩니다.
new Promise((resolve, reject) => {
    // 생성과 동시에 pending (대기) 상태 돌입
    // 비 동기적인 작업 진행
    reject(); // reject 함수를 실행시킴과 동시에 rejected (거부) 상태가 됩니다.
})

// p 라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다.
new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /*  fulfilled */
    }, 1000)
});

// p 라는 프로미스 객체가 fulfiled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /*  fulfilled */
    }, 1000)
});

p.then( /* callback */ )