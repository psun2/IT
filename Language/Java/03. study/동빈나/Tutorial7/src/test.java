import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

//		- 파일에 차례대로 입력된 모든 정수에 100을 곱해 출력하는 프로그램을 작성해 봅시다.
		File file = new File("input.txt");
		try {
			Scanner sc2 = new Scanner(file);
			while(sc2.hasNextInt()) {
				System.out.println(sc2.nextInt() * 100);
			}
			sc2.close();
		} catch(FileNotFoundException e) {
			System.out.println("파일을 읽어오는 도중에 오류가 발생했습니다.");
		}
		
		
//		출력 값 
//		5000
//		4000
//		3000
//		2000
//		78000

		
	}

}

//has : 있다
//Next : 다음
//Int : 정수