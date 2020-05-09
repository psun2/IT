
public class for문_삼각형그리기_이중for문 {

	final static int N = 30;
	
	public static void main(String[] args) {

//		for문을 이용하여 삼각형을 출력하는 프로그램을 작성해봅시다.
		//for문 : 초기화 부분, 조건 부분, 연산 부분
		
		for(int i = N; i > 0; i--) {
			for(int j = i; j > 0; j--) {
				System.out.print("▼");
			}
			System.out.println();
		}
	}

}
