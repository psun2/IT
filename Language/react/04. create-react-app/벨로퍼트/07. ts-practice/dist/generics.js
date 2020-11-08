"use strict";
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 2 });
// Generics 를 사용하면 실제 파라미터의 값을 유추를 해서 merged . 으로 접근할때,
// 안에 무엇이 들어 있는지 볼 수 있습니다.
// 파라 미터로 들어오는 param 의 type 이 정해져 있지 않는 경우
function wrap(param) {
    return {
        param,
    };
}
const wrapped = wrap(10);
const wrappedS = wrap('문자열');
const imtes = {
    list: ['a', 'b', 'c'],
    value: 1,
};
const imtems2 = {
    list: [1, 2, 3],
    value: 'hello',
};
// Class 에서의 Generics
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
while (queue.length > 0) {
    console.log(queue.dequeue());
}
