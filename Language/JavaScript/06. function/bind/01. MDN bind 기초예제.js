const testBind = {
    x: 42,
    getX: function () {
        return this.x;
    }
}

const unboundGetX = testBind.getX;
console.log(unboundGetX()); // TODO: 전역 범위에서 함수가 호출됩니다.
// expected output: undefined



const boundGetX = unboundGetX.bind(testBind);
console.log(boundGetX());
// expected output: 42

console.log(unboundGetX, typeof unboundGetX); // [Function: getX] function
console.log(boundGetX, typeof boundGetX); // [Function: bound getX] function
console.log();
console.log("결론");

// TODO: unboundGetX는 testBind.getX입니다. getX함수는 this.x를 반환하는 메소드 입니다.
// TODO: unboundGetX는 새로운 변수 입니다. unboundGetX에 담긴 getX메소드의 this 는 unboundGetX가 됩니다.
// TODO: unboundGetX는 X라는 변수를 가지고 있지 않습니다.
// TODO: testBind.getX 에 있는 this.x가 unboundGetX의 this가 될 이유가 없다.
// TODO: 그래서 bind 처리를 해줌으로서, getX의 this.x 가 testBind 객체의 x를 가르키게 할 수 있습니다. 

// FIXME: 제가 react 를 공부하면서 bind(this) 구문을 많이 보았는데 react에서 bind(this) 를 하는 이유는 모두 한 컴포넌트 안에서
// FIXME: 이루어 지는 작업이기때문에 그 컴퍼넌트를 가르키라고 바인드 함수에 this의 argument를 주는 것 같습니다.