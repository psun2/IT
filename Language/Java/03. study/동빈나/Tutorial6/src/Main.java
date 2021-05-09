
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		점수에 따라서 다른 메세지를 출력하는 프로그램을 작성해봅니다.
		int score = 40;
		
		if(score >= 90) {
			System.out.println("A+ 입니다.");
		} else if(score >= 80) {
			System.out.println("B+ 입니다.");
		} else if(score >= 80) {
			System.out.println("A+ 입니다.");
		} else if(score >= 70) {
			System.out.println("C+ 입니다.");
		} else  {
			System.out.println("F 입니다.");
		} 
		
//		문자열과 정수형을 각각 조건문을 이용해 활용해보고 그 차이점을 공부합니다.
		String a = "Man";
		int b = 0;
		
		// 자바는 String을 비교할때 equal()을 이용합니다
		// 그 이유는 String은 다른 자료형과 다른 문자열 자료형이기 때문입니다.
		// equals() 함수는 대소문자를 구분 합니다.
		// equalsIgnoreCase() 기본적인 equals() 기능에 대소문자 를 구분 하지 않습니다.
		if(a.equals("Man")) {
			System.out.println("남자 입니다.");
		} else {
			System.out.println("남자가 아닙니다.");
		}
		
		if(b == 3) {
			System.out.println("b는 3입니다.");
		} else {
			System.out.println("b는 3이 아닙니다.");
		}
		
		if(a.equalsIgnoreCase("man")) {
			System.out.println("대소문자 구분하지 않고 남자 입니다.");
		} else {
			System.out.println("대소문자 구분하지 않고 남자가 아닙니다.");
		}
		
		if(a.equalsIgnoreCase("man") && b == 0) {
			System.out.println("참 입니다.");
		} else {
			System.out.println("거짓 입니다.");
		}
		
//		while을 이용하여 1부터 100까지의 합을 출력하는 프로그램을 작성해봅시다.
		int i = 1, sum = 0;
		while(i <= 1000) {
			sum += i++;
		}
		System.out.println("1부터 1000까지의 합은" + sum + "입니다.");
		
//		for문을 이용하여 삼각형을 출력하는 프로그램을 작성해봅시다.
		//for문 : 초기화 부분, 조건 부분, 연산 부분
		for(int j = N; j > 0; j--) {
			for(int k = j; k > 0; k--) {
				System.out.print("★");
			}
			System.out.println("＊" + j);
		}
		
//		for문을 이용하여 원을 출력하는 프로그램을 작성해봅시다.
		//원의 방정식 : x^2 + y^2 = r^2
		for(int j = -C; j <= C; j++) {
			for(int k = -C; k <= C; k++) {
				if(j * j + k * k <= C * C) {
					System.out.print("★");
				} else {
					System.out.print(" ");
				}
			}
			System.out.println();
		}
		
//		무한루프 for 문 
		int count = 0;
		for(;;) {
			if(count == 10) {
				break;
			}
			System.out.println("출력");
			count++;
		}
		
		System.out.println(count);
		
	}
	
	final static int N = 30; 
	final static int C = 15;
	
}


