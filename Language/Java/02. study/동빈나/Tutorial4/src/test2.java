
public class test2 {
	
	static int max(int a, int b) {
		int result = (a > b) ? a : b;
		return result;
	}
	// 함수는 메인 함수 밖에서 정의가 됩니다.

	public static void main(String[] args) {
		
//		- '조건 ? 참 : 거짓' 연산자의 형태를 숙지하고 프로그램을 작성해봅시다. (삼항 연산자)
		
		int x = 50;
		int y = 60;
		
		System.out.println("최대 값은" + max(x,y) + "입니다.");
		// 최대 값은60입니다.
		

	}

}
