
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// 평균 구하기
		double a = 10.3;
		double b = 9.6;
		double c = 10.1;
		
		System.out.println("평균" + (a + b + c) / 3);
		// 형변환을 적용해 봅니다.
		System.out.println("평균" + (int)(a + b + c) / 3);
		
		// 반복문 사용해보기
		for(char i = 'a'; i <= 'z'; i++ ) {
			System.out.print(i + " ");
		}
		System.out.println(" ");
//		for(String i = "a"; i <= "z"; i++ ) {
//			System.out.print(i + " ");
//		} 
		// 같은 문자 선언 방식인 String 을 써 보았지만.
		// String 으로 했을땐 오류가 발생한다.
		
		// 8, 10, 16 진수 사용하기!
		int d = 200;
		
		System.out.println("10진수 : " + d);
		System.out.format("8진수 : %o\n", d);
		// %o => 8진수의 형식 지정자 
		// \n 줄바꿈을 의미.!!! enter과 같은 의미.
		System.out.format("16진수 : %x\n", d);
		// %x => 16진수의 형식 지정자
		System.out.format("16진수 : %x\n", d);
		
		// String 함수 사용하기!
		String name = "Kims Dog";
		System.out.println(name);
		System.out.println(name.substring(0, 1));
		// 0 : 첫번째 문자를 의미!!!!!! i = 1번의 문자
		// 1 : 마지막 문자가 몇번째 자리인지를 알려줌
		// 0번째 부터 시작해서 1번째 전까지 출력하라(?)
		System.out.println(name.substring(3, 6));
		// 3번째 부터 시작해서 6번째 전까지 출력하라(?)
		// s D
		System.out.println(name.substring(5, 8));
		// Dog
		System.out.println(name.substring(0, 4));
		// Kims
	}

}
