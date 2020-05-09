function sum(a, b) {
    const result = a + b;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result);
      }, 3000);
    });
  }
  
  sum(5, 5).then(result => {
    console.log("3초후 계산이 완료됩니다." + result);
  });
  