// # 반복문 Iteration Statements

// while(조건) {
//     조건이 거짓이 될 때까지 반복 실행
// }

// while 무한 루프
while(true) {
    console.log('안녕하세요');
    if(Math.random() * 100 > 90){
        break;
    }
}

// do {
//     조건이 거짓이 될 떄까지 반복 실행
// } while (조건);   // 무조건 한번은 실행 된다.

// do while 반복문
do {
    console.log('안녕하세요');
} while (Math.random() * 100 <= 90);

// for of 
// iterable
// 배열만 ... ?

// for in
// 모든 프로퍼티
// 배열 + 객체 까지 ...?

// for of
for (const i of [1,2,3]) {
    console.log(i);
}

// for in
Object.prototype.test = function () {} ;
for (const i in {a: 1, b: 2, c: 3}) {
    console.log(i);
}