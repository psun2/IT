//참고 : https://blog.naver.com/tjddjs90/221884832215

//- max함수를 작성하여 최대값을 저장하는 프로그램을 작성합니다 feat scanner

import java.util.Scanner;
//스캐너를 import 하는 구문 입니다.

public class max함수를_작성하여_최대값을_저장하는_프로그램을_작성합니다_feat_scanner {

//	먼저 두 수의 크기를 비교하는 함수를 작성합니다.
	public static int max(int a, int b) {
		int result = (a > b) ? a : b;
//		삼항연산자를 활용해 a 와 b 를 비교해서 a 가 크면 a를 반환하고 b가 크면 b 를 반환 하는 로직을 짭니다.
		
		return result;
	}
	
//	사용자에게 입려을 받아 max 함수를 호출하여, 비교할수 있는 또 다름 함수를 작성합니다.
	public static int function(int a, int b, int c) {
		int result = max(a, b);
//		먼저 max 함수를 호출해 인자를 a 와 b 를 넣어주고 둘을 비교해 result 변수에 대입합니다.
		
		result = max(result, c);
//		다음으로, result 에 반환된 값과 c 를 비교하여, result에 재할당 해줍니다.
		
		return result;
	}
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
//		사용자에게 입력 받을수 있게 스캐너를 작성합니다.
		
		System.out.println("이 프로그램은 사용자에게 3개의 정수를 입력 받아 가장 큰 수 를 구하는 프로그램입니다.");
		System.out.println();
		
		System.out.print("첫 번째 비교값을 입력하세요 : ");
		int a = sc.nextInt();
//		첫 번째 비교값을 입력 받아 변수 a 에 대입합입니다.
		
		System.out.print("두 번째 비교값을 입력하세요 : ");
		int b = sc.nextInt();
//		두 번째 비교값을 입력 받아 변수 b 에 대입합입니다.
		
		System.out.print("세 번째 비교값을 입력하세요 : ");
		int c = sc.nextInt();
//		세 번째 비교값을 입력 받아 변수 c 에 대입합입니다.
		
		sc.close();
//		입력을 종료합니다.
		
		int result = function(a, b, c);
		
		System.out.println("(" + a + ", " + b + ", " + c + ") 의 가장 큰 수 는 " + result + " 입니다.");
	}

}
