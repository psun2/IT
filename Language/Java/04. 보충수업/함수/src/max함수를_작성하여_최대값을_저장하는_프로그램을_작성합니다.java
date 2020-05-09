//- max()를 이용하여 최대값을 저장하는 프로그램을 작성합니다.

public class max함수를_작성하여_최대값을_저장하는_프로그램을_작성합니다 {

	//최대값 비교를 위한 함수 작성
	public static int max(int a, int b) {
		int result = (a > b) ? a : b;
		return result;
	}
	
	// 사용자에게 비교 값을 입력 받아 max 함수를 호출하는 함수 작성
	public static int function(int a, int b, int c) {
		int result = max(a, b);
		result = max(result, c);
		return result;
	}
	
	public static void main(String[] args) {
		
		int a = 100;
		int b = 200;
		int c = 250;
		
		int result = function(a, b, c);
		
		System.out.println("(" + a + ", " + b + ", " +  c + ") 의 최대 값은 " + result + " 입니다.");

	}

}
