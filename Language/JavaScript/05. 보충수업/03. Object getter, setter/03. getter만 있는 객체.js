// TODO: 본 설명은 매번 전단계의 학습을 요구합니다.
// TODO: 검색 => getter와 setter가 없는 객체

// TODO: 게터만 있는 객체를 보겠습니다.
// TODO: getter 을 선언 할 때는 함수의 이름 앞에 get 키워드를 사용합니다.

const add = {
    _a: 1,
    _b: 2,
    _result: 0,
    get sum() {
        console.log("get sum 함수가 실행됩니다.");
        return this._result = this._a + this._b; 
    }
}

// add.sum;
console.log(add.sum); // 3 

// TODO: 게터 사용시와 미사용시 함수를 호출하는 방법이 다릅니다.
// TODO: 우리는 일반적으로 함수를 호출할때 name(); 으로 호출해줍니다.
// TODO: 겟터가 있는 함수는 객체name.함수name 으로 () 없이 호출을 가능케 합니다.
// TODO: 게터 는 함수를 해당 object 의 프로퍼티 화(?) 합니다.

console.log(add._a); // 1
console.log(add.sum); // [Function: sum]

// 함수가 객체의 하나의 propetty 로 작동합니다.
// 일반적으로, 객체안에 함수를 선언 할때는 프로퍼티가 아닌가요 ?
// 또 이 질문을 맞지 않습니다. 일반적 방법으로 선언해도 그 함수는 해당 객체의 프로퍼티 입니다.
// 저는 똑같다고 생각하지만, 만들어낸 이유가 있기때문에, 언젠가 그 이유를 찾으면,
// 알려주시거나, 업데이트 하도록 하겠습니다.