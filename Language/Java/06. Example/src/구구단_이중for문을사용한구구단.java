
public class 구구단_이중for문을사용한구구단 {

	public static void main(String[] args) {

		for(int i = 2; i <10; i++) {
			System.out.println(i + " 단의 실행결과");
			for(int j = 1; j < 10; j++) {
				System.out.println(i + " * " + j + " = " + (i * j));
			}
			System.out.println();
		}
		

	}

}
