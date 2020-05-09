function pro() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  
  pro().then(() => {
    console.log("1초후에 실행됩니다.");
    pro().then(() => {
      console.log("2초후 실행 됩니다.");
      pro().then(() => {
        console.log("3초후 실행됩니다.");
      });
    });
  });


  function pro2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  
  pro2(
    pro2(
      pro2().then(() => {
        console.log("언제 찍히나요? 동시실행?");
      })
    ).then(() => {
      console.log("여기 동시실행?");
    })
  ).then(() => {
    console.log("1초후에 실행됩니다. 동시실행?");
    pro2().then(() => {
      console.log("2초후 실행 됩니다.");
      pro2().then(() => {
        console.log("3초후 실행됩니다.");
      });
    });
  });
  
