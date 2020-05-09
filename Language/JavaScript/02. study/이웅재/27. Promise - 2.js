// # Promise

// p.then 으로 callback 함수를 설정했기 때문에 fulfilled 되면서 callback 이 실행됩니다.
const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      resolve(); /*  fulfilled */
    }, 1000);
  });
  
  p.then(() => {
    console.log("1000ms 후에 fulfilled 됩니다.");
  });
  
  // then 을 설정하는 시점을 정확히하고,
  // 함수의 실행과 동시에 프로미스 객체를 만들면서 pending 이 시작하도록 하기 위해
  // 프로미스 객체를 생성하면서 리턴하는 함수 (p1) 를 만들어 (p1) 실행과 동시에 then 을 설정합니다.
  function p1() {
    return new Promise((resolve, reject) => {
      /* pending */
      setTimeout(() => {
        resolve(); /*  fulfilled */
      }, 1000);
    });
  }
  
  p1().then(() => {
    console.log("1000ms 후에 fulfilled 됩니다.");
  });
  
  // 마찬가지로 프로미스 객체가 reject 되는 시점에 p2.catch 안에 설정한 callback 함수가 실행됩니다.
  function p2() {
    return new Promise((resolve, reject) => {
      /* pending */
      setTimeout(() => {
        reject(); // rejected
      }, 1000);
    });
  }
  
  p2()
    .then(() => {
      console.log("1000ms 후에 fulfilled 됩니다.");
    })
    .catch(() => {
      console.log("1000ms 후에 rejected 됩니다.");
    });
  
  // excutor 의 resolve 함수를 실행할때 인자를 넣어 실행하면, then 의 callback 함수의 인자로 받을 수 있습니다.
  //     resolve('hello');
  //     then((message) => {...})
  function p3() {
    return new Promise((resolve, reject) => {
      /* pending */
      setTimeout(() => {
        resolve("resolve parameter"); // rejected  객체도 만들어 보낼 수 있음!
      }, 1000);
    });
  }
  
  p3()
    .then(message => {
      console.log("1000ms 후에 fulfilled 됩니다." + message);
    })
    .catch(() => {
      console.log("1000ms 후에 rejected 됩니다.");
    });
  
  // 마찬가지로, executor 의 reject 함수를 실행할때 인자를 넣어 실행하면, catch 의 callback 함수의 인자로 받을 수 있습니다.
  //     reject('error');
  //     then((reject) => {...})
  function p4() {
    return new Promise((resolve, reject) => {
      /* pending */
      setTimeout(() => {
        reject("error"); // rejected  객체도 만들어 보낼 수 있음!
      }, 1000);
    });
  }
  
  p4()
    .then(message => {
      console.log("1000ms 후에 fulfilled 됩니다." + message);
    })
    .catch(reason => {
      console.log("1000ms 후에 rejected 됩니다." + reason);
    });

// 보통 reject 함수를 실행하면, rejected 되는 이유를 넘기는데, 
// 표준 내장 객체인 Error 의 생성자를 이용하여 Error 객체를 만들어 Error 메세지 출력
function p5() {
    return new Promise((resolve, reject) => {
      /* pending */
      setTimeout(() => {
        reject(new Error('error reason')); // rejected  객체도 만들어 보낼 수 있음!
      }, 1000);
    });
  }
  
  p5()
    .then(message => {
      console.log("1000ms 후에 fulfilled 됩니다." + message);
    })
    .catch(error => {
      console.log("1000ms 후에 rejected 됩니다." + error);
    });
// # Promise

// p.then 으로 callback 함수를 설정했기 때문에 fulfilled 되면서 callback 이 실행됩니다.
const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      resolve(); /*  fulfilled */
    }, 1000);
  });
  
  p.then(() => {
    console.log("1000ms 후에 fulfilled 됩니다.");
  });
  
  // then 을 설정하는 시점을 정확히하고,
  // 함수의 실행과 동시에 프로미스 객체를 만들면서 pending 이 시작하도록 하기 위해
  // 프로미스 객체를 생성하면서 리턴하는 함수 (p1) 를 만들어 (p1) 실행과 동시에 then 을 설정합니다.
  function p1() {
    return new Promise((resolve, reject) => {
      /* pending */
      setTimeout(() => {
        resolve(); /*  fulfilled */
      }, 1000);
    });
  }
  
  p1().then(() => {
    console.log("1000ms 후에 fulfilled 됩니다.");
  });
  
  // 마찬가지로 프로미스 객체가 reject 되는 시점에 p2.catch 안에 설정한 callback 함수가 실행됩니다.
  function p2() {
    return new Promise((resolve, reject) => {
      /* pending */
      setTimeout(() => {
        reject(); // rejected
      }, 1000);
    });
  }
  
  p2()
    .then(() => {
      console.log("1000ms 후에 fulfilled 됩니다.");
    })
    .catch(() => {
      console.log("1000ms 후에 rejected 됩니다.");
    });
  
  // excutor 의 resolve 함수를 실행할때 인자를 넣어 실행하면, then 의 callback 함수의 인자로 받을 수 있습니다.
  //     resolve('hello');
  //     then((message) => {...})
  function p3() {
    return new Promise((resolve, reject) => {
      /* pending */
      setTimeout(() => {
        resolve("resolve parameter"); // rejected  객체도 만들어 보낼 수 있음!
      }, 1000);
    });
  }
  
  p3()
    .then(message => {
      console.log("1000ms 후에 fulfilled 됩니다." + message);
    })
    .catch(() => {
      console.log("1000ms 후에 rejected 됩니다.");
    });
  
  // 마찬가지로, executor 의 reject 함수를 실행할때 인자를 넣어 실행하면, catch 의 callback 함수의 인자로 받을 수 있습니다.
  //     reject('error');
  //     then((reject) => {...})
  function p4() {
    return new Promise((resolve, reject) => {
      /* pending */
      setTimeout(() => {
        reject("error"); // rejected  객체도 만들어 보낼 수 있음!
      }, 1000);
    });
  }
  
  p4()
    .then(message => {
      console.log("1000ms 후에 fulfilled 됩니다." + message);
    })
    .catch(reason => {
      console.log("1000ms 후에 rejected 됩니다." + reason);
    });
  
  // 보통 reject 함수를 실행하면, rejected 되는 이유를 넘기는데,
  // 표준 내장 객체인 Error 의 생성자를 이용하여 Error 객체를 만들어 Error 메세지 출력
  function p5() {
    return new Promise((resolve, reject) => {
      /* pending */
      setTimeout(() => {
        reject(new Error("error reason")); // rejected  객체도 만들어 보낼 수 있음!
      }, 1000);
    });
  }
  
  p5()
    .then(message => {
      console.log("1000ms 후에 fulfilled 됩니다." + message);
    })
    .catch(error => {
      console.log("1000ms 후에 rejected 됩니다." + error);
    });
  