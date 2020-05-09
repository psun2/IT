const add = {
    _a: 1,
    _b: 2,
    _c: 3,
    _sum: 0,
    sum() {
        console.log("this.sum 함수가 호출 됩니다.");
        this._sum = this._a + this._b + this._c;
        // console.log(this._sum);
        return this._sum;
    },
    get a() {
        console.log("get a함수가 호출되어 실행됩니다.");
        return this._a;
    },
    get b() {
        console.log("get b함수가 호출되어 실행됩니다.");
        return this._b;
    },
    get c() {
        console.log("get c함수가 호출되어 실행됩니다.");
        return this._c;
    },
    set a(value) {
        console.log("set a함수가 호출되어 실행됩니다.");
        this._a = value;
        this.sum();
    },
    set b(value) {
        console.log("set b함수가 호출되어 실행됩니다.");
        this._b = value;
        this.sum();
    },
    set c(value) {
        console.log("set c함수가 호출되어 실행됩니다.");
        this._c = value;
        this.sum();
    }
};


add.c = 5;
// TODO: setter c 함수로 5을 입력받아 c의 값을 parameter로 받아온
// TODO: value 값으로 대체 해주고, 내부에있는 sum 함수를 호출해 결과 값을 반환 하게 됩니다. 
console.log(add._sum);
