// # async function 과 await

// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다.
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("reason"));
        }, ms);
    });
}

async function asyncP() {
    return "Mark";
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(name);
    } catch (error) {
        console.log(`1000 ms 후에 try catch 문 실행${error}`);
    }
})();

// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다.
function p2(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error("reason"));
        }, ms);
    });
}

async function asyncP2() {
    const ms = await p2(1000);
    return "Mark: " + ms;
}

(async function main() {
    try {
        const name = await asyncP2();
        console.log(name);
    } catch (error) {
        console.log(`1000 ms 후에 try catch 문 실행${error}`);
    }
})();

//error 의 전파
function p3(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error("reason"));
        }, ms);
    });
}

async function asyncP3() {
    const ms = await p3(1000);
    return "Mark: " + ms;
}

(async function main() {
    try {
        const name = await asyncP3();
        console.log(name);
    } catch (error) {
        console.log(`1000 ms 후에 try catch 문 실행${error}`);
    }
})();

// finally
function p4(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error("reason"));
        }, ms);
    });
}

async function asyncP4() {
    const ms = await p4(1000);
    return "Mark: " + ms;
}

(async function main() {
    try {
        const name = await asyncP4();
        console.log(name);
    } catch (error) {
        console.log(`1000 ms 후에 try catch 문 실행${error}`);
    } finally {
        console.log('항상실행 end')
    }
})();

// Promise 
function p5(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

p5(1000)
    .then(() => p5(1000))
    .then(() => p5(1000))
    .then(() => {
        console.log('Promise 3000 ms 후에 실행');
    });

// async await
(async function main() {
    await p5(1000);
    await p5(1000);
    await p5(1000);
    console.log('async-await 3000 ms 후에 실행');
})();

// Promise.all
function p6(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

(async function main() {
    const results = await Promise.all([p6(1000), p6(2000), p6(3000)]);
    console.log("Promise.all: 3000ms 후 모든항목이 배열화 되어 넘어온다");
    console.log(results);
})();

// Promise.race
(async function main() {
    const result = await Promise.race([p6(1000), p6(2000), p6(3000)]);
    console.log("Promise.race: 1000ms 후 제일 빠른 항목 하나만 넘어온다.");
    console.log(result);
})();