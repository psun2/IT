
public class Main {

	final static double PI = 3.141592;
	// 상수 같은 경우 메인 함수 밖에서 선언이 된다.
	// final = 한번 선언되면 절때 바뀔수 없다 ===const
	
	final static int INT_MAX = 2147483647;
	// 2147483647 = int 형 자료형이 가지는 가장 큰 값
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int intType = 100;
		// int = 정수를 선언할때 사용
		double doubleType = 150.5;
		// double = 실수를 선언할때 사용
		String stringType = "김영재";
		// String = 문자열을 선언할때 사용
		
		System.out.println(intType);
		System.out.println(doubleType);
		System.out.println(stringType);
		
		// JavaScript 의 var 또는 let 키워드를 사용하여 선언할때와 같음.
		
		
		int r = 30;
		System.out.println(r * r * PI);
		// 원의 넓이 2PIR
		
		int a = INT_MAX;
		System.out.println(a);
		System.out.println(a + 1); // -2147483648 => 오버플로 현상
		// 오버플로 : 가장 큰 값에서 +1 을해주면 가장 작은 값으 로 돌아가는 
		// 순환되는 현상
		
		
		// 사칙연산 프로그램
		
		int c = 1;
		int d = 2;
		
		System.out.println("a + b = " + (c + d));
		System.out.println("a - b = " + (c - d));
		System.out.println("a * b = " + (c * d));
		System.out.println("a / b = " + (c / d));
		// 나누기 같은 경우 목 의 값만 나타낸다.
		
		
		// 형 변 환
		// int e = 0.5; => 오류 발생 e라는 값은 정수의 형태로 선언하는
		// int 가 사용 되므로, 실수의 값을 사용하면 오류가 난다.
		
		int e = (int)0.5; // 실수 (doble)type 을 정수(int)type로 형변환
		System.out.println(e); // 0
		
		// 반올림 형 변환
		double f = 0.7;
		int g = (int) (f + 0.5); // 반올림을 해주어 형변환을 원할때 0.5 를 더해준다.
		System.out.println(g); // 1
	}

}
