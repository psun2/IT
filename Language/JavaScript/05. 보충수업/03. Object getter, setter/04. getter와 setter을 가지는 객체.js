// TODO: 본 설명은 매번 전단계의 학습을 요구합니다.
// TODO: 검색 => getter만 있는 객체

// TODO: 게터 와 세터를 함께 보겠습니다.
// TODO: setter 함수를 선언 할때는 set 키워드와 함께 반드시 parameter을 받습니다.

const add = {
    _a: 1,
    _b: 2,
    _result: 0,
    get sum() {
        console.log("get sum 함수가 실행됩니다.");
        return this._result = this._a + this._b; 
    },
    set a(value) {
        console.log("set a 함수가 실행되어 _a값을 변경합니다.")
        return this._a = value;
    },
    set b(value) {
        console.log("set b 함수가 실행되어 _b값을 변경합니다.")
        return this._b = value;
    }
}

add.a = 5; // set a 함수가 실행되어 _a값을 변경합니다.
add.b = 5; // set b 함수가 실행되어 _b값을 변경합니다.

add.sum; // get sum 함수가 실행됩니다.

console.log(add.sum); // 10