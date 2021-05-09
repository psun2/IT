//- 팩토리얼을 반복 함수로 구현할 수 있습니다.

public class Main {

//	factorial 이란 ? 
//	예) 5! = 5 * 4 * 3 * 2 * 1 = 120
//	6! = 720
	public static int factorial(int number) {
		int sum = 1;
		for(int i = 2; i <= number; i++) {
			sum *= i;
		}
		return sum;
	}
	
	public static void main(String[] args) {
		
		System.out.println("10 팩토리얼은 " + factorial(10));

	}

}
