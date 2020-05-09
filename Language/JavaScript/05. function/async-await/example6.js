// # Async - Await
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function

// error 의 전파

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms)
    })
}

async function asyncP() {
    const ms = await p(1000)
    return "Mark : " + ms;
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(name);
        //
    } catch(error) {
        console.log("1000ms 후에 에러 메세지 : ",error)
        }
})();