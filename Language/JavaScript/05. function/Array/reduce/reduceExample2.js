// 출처 : https://www.youtube.com/watch?v=8te83LNpSUE
// title : reduce

const arr = [10, 20, 30, 40, 50];

arr.reduce(function(acc, cur, inx, src) {
    return acc + cur + inx + src;
}, 0);

arr.reduce((acc, cur) => acc.push(cur *2), []);


// 각 원소들을 순회 할때 마다 정의한 방법에 따라서 acc 값에 리턴 값이 오게된다.
// 리턴 값을 받을 acc 를 초기 값을 정해 주어여 한다  = 0
// if 초기값을 정해주지 않으면 