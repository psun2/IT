// # Async - Await
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function

// Promise 객체가 rejected 된 경우의 처리를 위해
// try catch 를 이용한다.

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms)
    })
}

(async function main() {
    try {
        const ms = await p(1000);
        console.log(`${ms}ms 후에 실행된다.`);
        //
    } catch(error) {
        console.log("1000ms 후에 에러 메세지 : ",error)
        }
})();