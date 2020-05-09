//- 피보나치 수열을 반복 함수로 구현할 수 있습니다.

//피보나치 수열 이란?
//		저는 수학과 영어를 제일 싫어 합니다. 그래서 약수, 공약수, 최대공약수, 최소공약수, 팩토리얼 등등.. 아무것도 몰라서
//		꼭 이렇게 저만의 공부법처럼 하나하나 알아갈때마다 조사해서 적어놓는 습관을 가지고 있습니다.
//		피보나치 수열을 구글, 네이버 등 포털사이트의 백과사전을 참고해보면.....음.... 모르겠습니다.
//		다만, 이미지등 여러 사람들의 글을 보고 피보나치 수열의 생김새를 보고 알 수 있엇습니다.
//		
//피보나치 수열 의 구조
//1 + 1 + (1 + 1 = 2) + (1 + 2 = 3) + (2 + 3 = 5) + (3 + 5 = 8) + (5 + 8 = 13).......
//a + b + (a + b = c) + (b + c = d) + (c + d = e)....... 
//즉, a 와 b 를 더해 새로운 c 를 만들고, b 와 c 를 더해 새로운 d 를 만들고 한칸씩 밀려 나면서 새롭게 만들어 진것과 더해 줍니다.
//처음보면 이해도 안가고 어렵고 복잡한 구조 입니다. 
//결국은 아래와 같은 수열이 됩니다.
//1 + 1 + 2 + 3 + 5 + 8 + 13 ....
//1, 1, 2, 3, 5, 8, 13......

//반복 함수란?
//		사실 이 과목을 공부하기 전에 반복함수라는 뭔가 내장되어 있는 함수 인지 알았습니다.
//		아직 짧은 지식이지만, 반복 함수를 보니, 한마디로 아 ~ 그냥 함수 안에서 반복문을 사용했구나,
//		아마 조건문도 같이 껴잇으니, 조건반복 함수(?) 라고 부르지 않을까? 그냥 농담삼아 하고싶은말은
//		단어적, 명칭적 그런 것들이 생소하고 어려워도 그냥 부르는 이름만 길고 어렵다. 라고 생각하고 싶습니다.

public class 피보나치수열_반복함수 {

	public static int fibonacci(int number) {
		int one = 1; 
		int two = 1; 
		int result = 0;
		if(number == 1) { // number = 1 == i의 0번째 인덱스 1입니다.
			return one;
		} else if(number == 2) { // number = 2 == i의 1번째 인덱스 1입니다.
			return two;
		} else {
			for(int i = 2; i < number; i++) { // 0 과 1번 index는 같은 값이므로, 초기값 2를 설정합니다.
				result = one + two;
				one = two;
				two = result;
			}
			return result;
		}
	}
	
	public static void main(String[] args) {
		
		System.out.println("피보나치 수열의 10번째 원소는 " + fibonacci(10) + " 입니다.");
		System.out.println("피보나치 수열의 100번째 원소는 " + fibonacci(100) + " 입니다.");
//		여기서 피보나치의 100번째 원소는 int 자료형의 최대값인 2147483647 을 초과 하여,
//		[오버플로] 현상으로 음의 숫자가 나옵니다.

	}

}
