// TODO: Totorial4
// TODO: 자바 기초 프로그래밍 강좌 4강 - 연산자(Operator) (Java Programming Tutorial 2017 #4)

// TODO: 자바 코드
// public class Main {

// 	final static int SECOND = 1000;

// 	public static void main(String[] args) {

// 		int minute = SECOND / 60;
// 		int second = SECOND % 60;

// 		System.out.println(minute + "분 " + second + "초");

// 		System.out.println("-----------------------------");

// 		int num = 10;
// 		System.out.println("현재의 a는 " + num + " 입니다.");
// 		num++;
// 		System.out.println("현재의 a는 " + num + " 입니다.");
// 		System.out.println("현재의 a는 " + ++num + " 입니다.");
// 		System.out.println("현재의 a는 " + num++ + " 입니다.");
// 		System.out.println("현재의 a는 " + num + " 입니다.");

// 		System.out.println("-----------------------------");

// //		나눈 나머지를 출력합니다.
// 		System.out.println(1 % 3);
// 		System.out.println(2 % 3);
// 		System.out.println(3 % 3);
// 		System.out.println(4 % 3);
// 		System.out.println(5 % 3);
// 		System.out.println(6 % 3);

// 		System.out.println("-----------------------------");

// 		int a = 50;
// 		int b = 50;

// 		System.out.println("a와 b가 같은가요? " + (a == b));
// 		System.out.println("a가 b보다 큰가요? " + (a > b));
// 		System.out.println("a가 b보다 작은가요? " + (a < b));
// 		System.out.println("a가 b와 같으면서 a가 30보다 큰가요? " + ((a == b) && (a > 30)));
// 		System.out.println("a가 50이 아닌가요? " + !(a == 50));

// 		System.out.println("-----------------------------");

// 		int x = 50;
// 		int y = 60;

// 		System.out.println("최댓값은 " + max(x, y) + " 입니다.");

// 		System.out.println("-----------------------------");

// 		double c = Math.pow(3.0, 20.0);
// 		System.out.println("3의 20제곱은 " + c + " 입니다.");
// 		System.out.println("3의 20제곱은 " + (int)c + " 입니다.");

//  int i = 20;
//    System.out.println(i); // 20
//     i++;
//    System.out.println(i); // 21
//      i = i + 1;
//    System.out.println(i); // 22
//    i += 1;
//  System.out.println(i); // 23
//    // System.out.println(100 < i < 200);
//	  // The operator < is undefined for the argument type(s) boolean, int
//	  // 인수 유형에 대해 <연산자가 정의되지 않았습니다. 부울, int
//  System.out.println((i > 100) && (i < 200)); // false
//  System.out.println((i > 100) || (i < 200)); // true

// 	}

// //	반환형, 함수이름, 매개 변수
// 	static int max(int a, int b) {
// 		int result = a > b ? a : b; // 삼항연산자
// 		return result;
// 	}

// }

// TODO: 자바스크립트 코드

const SECOND = 1000;
const minute = Math.floor(SECOND / 60);
const second = SECOND % 60;
console.log(`${minute}분 ${second}초`);

console.log('------------------------------');

let num = 10;
console.log(`현재의 num의 값은 ▶ ${num} ◀ 입니다`); // 10
num++;
console.log(`현재의 num의 값은 ▶ ${num} ◀ 입니다`); // 11
console.log(`현재의 num의 값은 ▶ ${++num} ◀ 입니다`); // 12
console.log(`현재의 num의 값은 ▶ ${num++} ◀ 입니다`); // 12
console.log(`현재의 num의 값은 ▶ ${num} ◀ 입니다`); // 13

console.log('------------------------------');

console.log(1 % 3); // 1
console.log(2 % 3); // 2
console.log(3 % 3); // 0
console.log(4 % 3); // 1
console.log(5 % 3); // 2
console.log(6 % 3); // 0

console.log('------------------------------');

const a = 50;
const b = 50;

console.log(`a와 b가 같은가요? ▶ ${a === b} ◀`);
console.log(`a가 b보다 큰가요? ▶ ${a > b} ◀`);
console.log(`a가 b보다 작은가요? ▶ ${a < b} ◀`);
console.log(`a가 b와 같으면서 a가 30보다 큰가요? ▶ ${a == b && a > 30} ◀`);
console.log(`a가 50이 아닌가요? ▶ ${!a === 50} ◀`);

console.log('------------------------------');

const x = 50;
const y = 60;
function max(a, b) {
  result = a > b ? a : b;
  return result;
}
console.log(`두 수의 최대값 은 ▶ ${max(x, y)} ◀`);

console.log('------------------------------');

const c = Math.pow(3, 20);
console.log(`3의 20제곱은 ▶ ${c} ◀ 입니다.`);

console.log('------------------------------');

let i = 20;
console.log(i); // 20
i = i + 1;
console.log(i); // 21
i += 1;
console.log(i); // 22
i++;
console.log(i); // 23

console.log(100 < i < 200); // true
console.log(i > 100 && i < 200); // false
console.log(i > 100 || i < 200); // true
