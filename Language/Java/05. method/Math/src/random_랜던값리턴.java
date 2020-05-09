//Math.random(); 함수는 0 ~ 1 사이의 수를 랜덤하게 반환합니다.

public class random_랜던값리턴 {

	public static void main(String[] args) {
		
		// 기본 사용법
		for(int i = 0; i < 10; i++) {
			System.out.print(Math.random() + " ");
		}
		System.out.println();
		
		// 정수형을 반환 받고 싶을땐 (int) 형변환 사용
		// 0 과 1 사이의 수임으로 모두 0 이 반환됩니다.
		for(int i = 0; i < 10; i++) {
			System.out.print((int)Math.random() + " ");
		}
		System.out.println(); 
		
		// 0 ~ 100 까지의 랜덤한 수를 반환 합니다.
		for(int i = 0; i < 10; i++) {
			System.out.print((int)(Math.random() * 100) + " ");
		}
		System.out.println();
		
		// 1 ~ 10 까지의 랜덤한 수를 반환합니다.
		for(int i = 0; i < 10; i++) {
			System.out.print((int)(Math.random() * 10 + 1) + " ");
		}

	}

}
