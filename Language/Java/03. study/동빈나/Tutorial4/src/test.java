
public class test {		
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double powTest = Math.pow(3.0, 20.0);
		System.out.println("3의 20제곱은" + (int) powTest + "입니다.");
		// 3의 20제곱은2147483647입니다.
		
//		int powTest2 = Math.pow(3, 20);
//		System.out.println("3의 20제곱은" + powTest2 + "입니다.");
		// 오류가 납니다. 여기서 알수 있는 사실은 Math.pow() 는
		// double 의 내장 함수 임을 알 수 있습니다.
	}

}
