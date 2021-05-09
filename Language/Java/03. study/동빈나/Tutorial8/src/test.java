
public class test {

	public static void main(String[] args) {

//		문제1> 본인의 이름 출력
		String name = "박성언";
		System.out.println("My name is " + name);
		
		System.out.println();
		
//		문제2> 아래문제 계산
		System.out.println(10 + 10); // 20
		System.out.println(30 * 30); // 900
		System.out.println(20 - 5); // 15
		System.out.println(40 / 3); // 13
		System.out.println(395 % 18); // 17
		
		System.out.println();
		
//		문제3> 사각형 출력
		for(int i = 0; i <= 10; i++) {
			for(int j =0; j <= 10; j++) {
				System.out.print("■");
			}
			System.out.println();
		}
		

	}

}
