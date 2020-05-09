// TODO: Tutorial9
// TODO: 자바 기초 프로그래밍 강좌 9강 - 사용자 정의 함수 ① (Java Programming Tutorial 2017 #9)

// TODO: 자바 코드

// public class Main {

//     //	반환형, 함수명, 매개변수
//         public static int function(int a, int b, int c) {
//             int min;
//             if (a > b) {
//                 if (b > c) {
//                     min = c;
//                 } else {
//                     min = b;
//                 }
//             } else {
//                 if (a > c) {
//                     min = c;
//                 } else {
//                     min = a;
//                 }
//             }
//             for (int i = min; i > 0; i--) {
//                 if (a % i == 0 && b % i == 0 && c % i == 0) {
//                     return i;
//                 }
//             }
//             return -1; // 최대 공약수가 없을 시 -1 반환
//         }

//         public static void main(String[] args) {

//             System.out.println("(400, 300, 750)의 최대 공약수 : " + function(400, 300, 750));
//         }

//     }

// TODO: 자바스크립트 코드

const func = (a, b, c) => {
  let min;
  if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    if (a > b) {
      if (b > c) {
        min = c;
      } else {
        min = b;
      }
    } else {
      if (a > c) {
        min = c;
      } else {
        min = a;
      }
    }
    for (let i = min; i > 0; i--) {
      if (a % i === 0 && b % i === 0 && c % i === 0) {
        return i;
      }
    }
  } else {
    console.log('인자의 타입을 확인하세요.');
  }
  return -1;
};

console.log(`(400, 300, 750)의 최대 공약수 : ${func(400, 300, 750)}`);
console.log(func(400, '300', 750));
