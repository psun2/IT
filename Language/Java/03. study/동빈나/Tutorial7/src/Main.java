import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner; // 스캐너 객체 생성시 꼭 필요한 부분 없을시 에러 발생

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

//		- 특정한 정수를 입력 받아서 그대로 출력하는 프로그램을 작성해봅시다.
		
		Scanner sc = new Scanner(System.in);
		System.out.print("정수를 입력하세요.");
//		System.out.println("정수를 입력하세요.");
		int i = sc.nextInt();
		System.out.println("입력된 정수는 " + i + " 입니다.");
		sc.close();
		
//		- 파일에 차례대로 입력된 모든 정수에 100을 곱해 출력하는 프로그램을 작성해 봅시다.
		File file = new File("input.txt");
		try {
			Scanner sc2 = new Scanner(file);
			while(sc2.hasNextInt()) {
				System.out.println(sc2.nextInt() * 100);
			}
		} catch(FileNotFoundException e) {
			System.out.println("파일을 읽어오는 도중에 오류가 발생했습니다.");
		}
		
		//has : 있다
		//Next : 다음
		//Int : 정수
		
		
	}

}
