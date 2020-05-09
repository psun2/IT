//- max()를 이용하여 최대값을 저장하는 프로그램을 작성합니다. 

public class Main3 {

	//최대값 비교를 위한 함수 작성
	public static int max(int a, int b) {
		return (a > b) ? a : b;
	}
	
	// 사용자에게 비교 값을 입력 받아 max 함수를 호출하는 함수 작성
	public static int function(int a, int b, int c) {
		int result = max(a, b);
		result = max(result, c);
		return result;
	}
	
	public static void main(String[] args) {
		
		System.out.println("(345, 567, 789) 중에서 가장 큰 값은" + function(345, 567, 789) + " 입니다.");

	}

}
