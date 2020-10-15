// # Promise
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

// executor 함수는 resolve 와 reject 를 인자로 가집니다.
//     (resolve, reject) =>{...}
// resolve 와 reject 는 함수 입니다.
//     resolve(); reject();

new Promise(/* executor */ (resolve, reject) => {});
