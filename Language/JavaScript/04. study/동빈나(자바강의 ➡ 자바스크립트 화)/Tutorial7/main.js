// TODO: Totorial7
// TODO: 자바 기초 프로그래밍 강좌 7강 - 기본 입출력(Input & Output) (Java Programming Tutorial 2017 #7)

// TODO: 자바 코드

// import java.util.Scanner;
// import java.io.File;
// import java.io.FileNotFoundException;

// public class Main {

// 	public static void main(String[] args) {

// 		int count = 0;
// 		for (;;) {
// 			System.out.print(count + " ");
// 			count++;
// 			if (count == 10) {
// 				break;
// 			}
// 		}
// 		System.out.println();

// 		Scanner sc = new Scanner(System.in);

// 		System.out.print("정수를 입력하세요 : ");
// 		int i = sc.nextInt();
// 		System.out.println("입력된 정수는 " + i + " 입니다.");
// 		sc.close();

// 		File file = new File("input.txt");
// 		try {
// 			Scanner scanner = new Scanner(file);
// 			while (scanner.hasNextInt()) {
// 				System.out.println("file 인자들에게 100을 곱한 값 : " + scanner.nextInt() * 100);
// 			}
// 			scanner.close();
// 		} catch (FileNotFoundException e) {
// 			// TODO Auto-generated catch block
// //			e.printStackTrace();
// 			System.out.println("파일을 읽어오는 도중에 오류가 발생했습니다.");
// 		}

// 	}

// }

// TODO: 자바스크립트 코드

let count = 0;
for (;;) {
  console.log(count);
  count++;
  if (count === 10) {
    break;
  }
}

const i = prompt('정수를 입력하세요');
const int = parseInt(i);
console.log(int, typeof int);
try {
  console.log(`입력된 정수는 ${i} 입니다.`);
} catch {
  throw Error('정수를 받아오지 못 했습니다.');
} finally {
  setTimeout(() => {
    console.log('로직 끝!');
  }, 3000);
}
