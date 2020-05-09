import java.util.Scanner;
// Scanner import 구문.

public class 입력_int_Scanner_System {

	public static void main(String[] args) {
		
		// system 에서 입력값을 int로 받는 경우
		Scanner agesc = new Scanner(System.in);
		// Scanner 객체를 import 즉 받아와야 사용이 가능하므로 import해준다.
		
		System.out.print("나이를 입력해 주세요 : ");
		
		int age = agesc.nextInt();
		
		System.out.println("당신의 나이가 " + age + " 살이 맞나요?");
		

	}

}
