//- 팩토리얼을 재귀 함수로 구현할 수 있습니다.

//	팩토리얼이란 ? 
//			팩토리얼을 나타내는 단위(?) 로는 !(느낌표)를 사용합니다.
//			5! 즉, 5팩토리얼을 예로 들면
//			5 * 4 * 3 * 2 * 1 과 같습니다.
//			5부터 시작해 1씩 줄어든 수를 모두 곱해줍니다.

//재귀란 무엇인가 ?
//		재귀 함수를 배우면서, 이해가 안가 재귀라는 뜻 부터 찾아보았습니다.
//		재귀의 사전적의미 : 본디의 곳으로 다시 올아오는 것
//		외국인 프로그래머들은 이런 단어가 있는 지 모르겠지만,
//		아무래도 한국인의 이해를 돕기위해 한글로 번역하는 과정에서 재귀란 단어가 생기지 않앗나
//		뇌피셜 입니다.
//		즉 본인이 본인을 호출한다(?) 라고 정의 하고싶습니다. 
//		함수를 작성하고 로직끝에 그함수를 통해 자신이 얻고자 하는 값의 로직을 추가해 
//		반복적인 작업의 로직을 조금 더 간단하게 할 수 있는 장점 이 있습니다.

import java.util.Scanner;

public class 팩토리얼_feat_재귀함수_scanner {

	public static int factorial(int number) {
		int result = 1;
		if(number == 1 || number == -1) {
			return number;
		} else {
			result = number * factorial(number -1);
			return result;
		}
	}
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("팩토리얼을 재귀함수로 구하는 프로그램 입니다.");
		System.out.println();
		
		System.out.print("구하실 팩토리얼의 정수를 적어주세요 : ");
		int number = sc.nextInt();
		sc.close();
		
		System.out.println();
		System.out.println(number + "!(팩토리얼은) " + factorial(number) + " 입니다.");

	}

}
