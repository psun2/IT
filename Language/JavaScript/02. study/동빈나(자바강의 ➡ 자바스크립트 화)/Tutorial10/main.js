// TODO: Tutorial10
// TODO: 자바 기초 프로그래밍 강좌 10강 - 사용자 정의 함수 ② (Java ProgrammingTutorial 2017 #10)

// TODO: 자바 코드

// public class Main {

// 	// - 약수 중 K번째로 작은 수를 찾는 프로그램을 작성합니다.
// 	public static int function(int number, int k) {
// 		for (int i = 1; i < number; i++) {
// 			if (number % i == 0) {
// 				k--;
// 				if (k == 0) {
// 					return i;
// 				}
// 			}
// 		}
// 		return -1;
// 	}

// 	// - 문자열에서 마지막 단어를 반환하는 함수를 작성합니다.
// 	public static char function2(String input) {
// 		return input.charAt(input.length() - 1);
// 	}

// 	// - max()를 이용하여 최대값을 저장하는 프로그램을 작성합니다.
// 	public static int max(int a, int b) {
// 		return a > b ? a : b;
// 	}

// 	public static int function3(int a, int b, int c) {
// 		int result = max(a, b);
// //		return result > c ? result : c;
// 		result = max(result, c);
// 		return result;
// 	}

// 	public static void main(String[] args) {

// 		int a = 3050;
// 		int b = 10;

// 		int result = function(a, b);
// 		if (result == 1) {
// 			System.out.println(a + "의" + b + "번째 약수는 없습니다.");
// 		} else {
// 			System.out.println("function(" + a + "  , " + b + "); // " + result);
// 			System.out.println(a + "의 " + b + "번째 약수 : " + result + " 입니다.");
// 		}

// 		String str = "Hello Word";
// 		System.out.println(str + " 의 마지막 단어 : " + function2(str));

// 		int x = 345, y = 567, z = 789;
// 		System.out.println("(" + x + ", " + y + ", " + z + ") 중에서 가장 큰 값 : " + function3(z, y, z) + " 입니다.");

// 	}

// }

// TODO: 자바스크립트 코드

// 	// TODO: - 약수 중 K번째로 작은 수를 찾는 프로그램을 작성합니다.
console.log('- 약수 중 K번째로 작은 수를 찾는 프로그램을 작성합니다.');
function func(num, k) {
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      k--;
      if (k === 0) {
        return i;
      }
    }
  }
  return -1;
}

const a = 3050,
  b = 10;
console.log(`${a}의 ${b}번째 약수는 : ${func(a, b)} 입니다.`);

console.log('-------------------------------------------------------');

// 	// TODO: - 문자열에서 마지막 단어를 반환하는 함수를 작성합니다.
console.log('- 문자열에서 마지막 단어를 반환하는 함수를 작성합니다.');

function func2(input) {
  return input.charAt(input.length - 1);
}

const str = 'Hello Word';
// console.dir(String);
console.log(`${str} 의 마지막 단어는 : ${func2(str)} 입니다.`);

console.log('-------------------------------------------------------');

// 	// TODO: - max()를 이용하여 최대값을 저장하는 프로그램을 작성합니다.
console.log('- max()를 이용하여 최대값을 저장하는 프로그램을 작성합니다.');

function max(a, b) {
  return a > b ? a : b;
}

function func3(a, b, c) {
  result = max(a, b);
  result = max(result, c);
  return result;
}

const x = 345,
  y = 567,
  z = 789;
console.log(`${x}, ${y}, ${z} 중 최대값은 : ${func3(x, y, z)} 입니다.`);

console.log('-------------------------------------------------------');
