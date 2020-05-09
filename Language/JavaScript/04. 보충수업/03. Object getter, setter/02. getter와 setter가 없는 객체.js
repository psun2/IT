// TODO: 본 설명은 매번 전단계의 학습을 요구합니다.
// TODO: 검색 => getter와 setter가 없는 객체

// TODO: 먼저 게터와 세터가 없는 객체를 보도록 하겠습니다.

const add = {
    _a: 1,
    _b: 2,
    _result: 0,
    sum() {
        console.log("sum 함수가 실행됩니다.");
        return this._result = this._a + this._b; 
    }
}

// add.sum();
console.log(add.sum()); // 3