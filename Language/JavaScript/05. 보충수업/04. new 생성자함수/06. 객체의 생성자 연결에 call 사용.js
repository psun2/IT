// TODO: call : 요구하다.!!!
// TODO: call 함수를 학습합니다.

// TODO: 객체의 생성자 연결에 call 사용

function Juice(fruit, quantity) {
    this.fruit = fruit;
    this.quantity = quantity;

    if (quantity <= 0) {
        throw RangeError(`${this.fruit} 의 현재 수량이 ${this.quantity} 이므로 주스 생산을 중단합니다.`);
    }
}

function Orange(fruit, quantity) {
    Juice.call(this, fruit, quantity)
    this.origin = "USA";
}

function Grape(fruit, quantity, origin) {
    Juice.call(this, fruit, quantity)
    this.origin = origin;
}

const orange = new Orange("오렌지", 0);
console.log(orange);
// TODO: RangeError: 오렌지 의 현재 수량이 0 이므로 주스 생산을 중단합니다.
const grape = new Grape("포도", 10, "스페인");
console.log(grape);
// TODO: Grape { fruit: '포도', quantity: 10, origin: '스페인' }