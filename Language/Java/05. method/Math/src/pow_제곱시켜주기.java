
public class pow_제곱시켜주기 {

	public static void main(String[] args) {
		
//		Title : Math.pow(a, b)
		
		// Math.pow() 는 double 타입으로서, 실수로 넣어 주어야 한다.!!
		System.out.println(Math.pow(3.0, 20.0));
		// 3.486784401E9
		// 출력결과 값이 섞여 있는 E는 10진수를 의미합니다.
		
		System.out.println((int)Math.pow(3.0, 20.0));
		// 2147483647
		// 정수형 타입의 값이 필요한 경우 형변형을 하면 됩니다.
		
	}

}
