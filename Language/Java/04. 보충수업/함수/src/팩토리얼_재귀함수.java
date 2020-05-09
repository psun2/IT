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

public class 팩토리얼_재귀함수 {

//	배운걸 바탕으로 커스터마이징한 재귀함수
	public static int myFactorial(int number) {
		int result = 1;
		if(number == 1 || number == -1) {
			return number;
		} else {
			result = number * myFactorial(number - 1);
			return result;
		}
	}
	
//	5! 을 예로 들자면, 
//		5! = 5 * 4 * 3 * 2 * 1 이 됩니다.
//		또 다르게 표현하자고 하면 5! = 5 * 4! (4! = 4 * 3 * 2 * 1) 이 되므로 결국 같은 값을 구하게 되는 
//		똑같은 로직이 생성 됩니다.
//	다시 본론으로 돌아와 위 myFactorial 함수 내부의 else 부분에서 myFactorial 즉 본인을 호출합니다. 이것을 본디의 곳으로 다시 돌아온다
//	재귀함수라 표현 할 수 있습니다.
//	else 내부의 로직을 5!로 예를 들어 살펴보면
//	받은 인자 * 재귀함수호출(받은인자 - 1) 즉 아래와 같은 로직이 완성됩니다.
//	5 * myFactorial(4) => 그럼 다시 맨 위로 돌아가 if 의 조건인 1이 아니게 되어 else 로 오게 됩니다.
//	전에 받은 number 가 4가 되었으므로,
//	그럼 (5 * 4) * myFactorial(3) 와 같이 진행된다고 할 수 있습니다.
//	myFactorial(3) 은 3 * 2 * 1(if의 return 값) 까지 진행 되는 3! 이라고도 말 할 수 있습니다.
//	최종적으로 우리는 아래와 같은 로직이 됨을 알 수 있습니다.
//	5 *4!(4 * 3 * 2 * 1)
//	5 * 4 * 3!(3 * 2 * 1)
//	5 * 4 * 3 * 2!(2 * 1)
//	5 * 4 * 3 * 2 * 1!(1 * 1);
//	우리는 먼저 if 의 조건으로 number 의 값이 1이면, 1을 return 해주는 로직을 짯습니다.
//	그래서 결론 적으로 5 * 4 * 3 * 2 * 1 과 같은 로직이 되어,
//	재귀 함수를 통해서 반복적인 작업을 반복문 없이 사용 할 수 있게 됩니다.
	
	
//	본 강의식 재귀함수
	public static int factorial(int number) {
		if(number == 1) {
			return 1;
		} else {
			return number * factorial(number -1);
			// 5! == 5 * 4! = 120
		}
	}
	
	public static void main(String[] args) {
		
		System.out.println("강의시간에 배운 재귀함수 : 10 팩토리얼은 " + factorial(10));
		System.out.println("배운걸 바탕으로 커스터마이징한 재귀함수 : 10 팩토리얼은 " + myFactorial(10));
		
	}

}
