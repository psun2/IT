//- 팩토리얼을 반복 함수로 구현할 수 있습니다.

//	팩토리얼이란 ? 
//			팩토리얼을 나타내는 단위(?) 로는 !(느낌표)를 사용합니다.
//			5! 즉, 5팩토리얼을 예로 들면
//			5 * 4 * 3 * 2 * 1 과 같습니다.
//			5부터 시작해 1씩 줄어든 수를 모두 곱해줍니다.

//반복 함수란?
//		사실 이 과목을 공부하기 전에 반복함수라는 뭔가 내장되어 있는 함수 인지 알았습니다.
//		아직 짧은 지식이지만, 반복 함수를 보니, 한마디로 아 ~ 그냥 함수 안에서 반복문을 사용했구나,
//		아마 조건문도 같이 껴잇으니, 조건반복 함수(?) 라고 부르지 않을까? 그냥 농담삼아 하고싶은말은
//		단어적, 명칭적 그런 것들이 생소하고 어려워도 그냥 부르는 이름만 길고 어렵다. 라고 생각하고 싶습니다.

import java.util.Scanner;

public class 팩토리얼_feat_반복함수_scanner {

	public static int factorial(int number) {
		int result = 1;
		if(number == 1 || number == -1) {
			return number;
		} else {
			for(int i = number; i >= 1; i--) {
				result *= i;
			}
			return result;
		}
	}
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("팩토리얼을 반복함수로 구하는 프로그램 입니다.");
		System.out.println();
		System.out.print("구하실 팩토리얼의 정수를 적어주세요 : ");
		int number = sc.nextInt();
		sc.close();
		System.out.println();
		System.out.println(number + "!(팩토리얼은) " + factorial(number) + " 입니다.");

	}

}
