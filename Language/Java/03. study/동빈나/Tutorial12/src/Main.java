//- 피보나치 수열을 반복 함수로 구현할 수 있습니다.

public class Main {

//	피보나치 수열이란 ? 
//			초기값 예를들어, 1
//			초기값(1) + 초기값(1) = 2  => 1 + 2 = 3 => 2 + 3 = 5 .....
	public static int fibonacci (int number) {
		int one = 1;
		int two = 1;
		int result = -1;
		if(number == 1) {
			return one;
		} else if(number == 2) {
			return two;
		} else {
			for(int i = 2; i < number; i++) {
				result = one + two;
				one = two;
				two = result;
			}
		}
		return result;
	}
	
	public static void main(String[] args) {
		System.out.println("피보나치 수열의 10번째 원소는 " + fibonacci(10) + " 입니다.");
//		55
		System.out.println("피보나치 수열의 100번째 원소는 " + fibonacci(100) + " 입니다.");
//		여기서 피보나치의 100번째 원소는 int 자료형의 최대값인 2147483647 을 초과 하여,
//		[오버플로] 현상으로 음의 숫자가 나옵니다.
		
	}

}
