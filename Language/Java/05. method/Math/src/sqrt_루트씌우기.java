
public class sqrt_루트씌우기 {

	public static void main(String[] args) {
		
//		Title : Math.sqrt()
		
		// sqrt 함수는 double 타입으로서 실수의 값이 반환 됩니다.
		System.out.println(Math.sqrt(9));
		// 3.0
		
		// sqrt 함수에 음수를 입력하면 NaN 값을 반환합니다.
		System.out.println(Math.sqrt(-9));
		// NaN
		
		// sqrt 함수에 음수를 입력시 정수형으로 형 변환시 case
		System.out.println((int)Math.sqrt(-9));
		// 0
		

	}

}
