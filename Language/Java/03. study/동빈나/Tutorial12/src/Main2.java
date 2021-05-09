//- 피보나치 수열을 재귀 함수로 구현할 수 있습니다.

public class Main2 {
	
	public static int fibonacci(int number) {
		int one = 1;
		int two = 1;
		int result = -1;
		if(number == 1) {
			return one;
		} else if(number == 2) {
			return two;
		} else {
			return fibonacci(number - 1) + fibonacci(number - 2);
		} 
	}

	public static void main(String[] args) {
		
		System.out.println("피보나치 수열의 10번째 원소는 " + fibonacci(10) + " 입니다.");
		System.out.println("피보나치 수열의 100번째 원소는 " + fibonacci(100) + " 입니다.");
	}

}
