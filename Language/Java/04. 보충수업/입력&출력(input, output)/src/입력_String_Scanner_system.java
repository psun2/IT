import java.util.Scanner;
// Scanner 객체 import 구문.

public class 입력_String_Scanner_system {

	public static void main(String[] args) {
		
		// system 에서 입력값을 String으로 받는 경우
		Scanner namesc = new Scanner(System.in);
		// scanner 객체를 import 해주어야 된다.
		
		System.out.print("이름 : ");
		
		String name = namesc.nextLine();
		
		System.out.println("이름이 " + name + "맞나요?");
		
		namesc.close();
		//Scanner 을 종료시켜줌으로써, 더이상의 입력은 받지 않는다.
		
	}

}
