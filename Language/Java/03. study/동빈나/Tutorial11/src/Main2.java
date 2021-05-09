//- 팩토리얼을 재귀 함수로 구현할 수 있습니다.

public class Main2 {

	public static int factorial(int number) {
		if(number == 1) {
			return 1;
		} else {
			return number * factorial(number -1);
			// 5! == 5 * 4! = 120
		}
	}
	
	public static void main(String[] args) {
		
		System.out.println("10 팩토리얼은 " + factorial(10));

		System.out.println(factorial(25));
		
	}

}
