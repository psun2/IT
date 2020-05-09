import java.io.File;
import java.io.FileNotFoundException;
// File 객체를 import 즉, 가져오는 구문
import java.util.Scanner;
// Scanner 객체를 import 즉, 가져오는 구문


public class 입력_int_Scanner_File {

	public static void main(String[] args) {
		
		File agefile = new File("age.txt");
		// File 객체의 이름은 agefile로 할 것이며, File 객체는 age.txt파일을 참조한다.
		// scanner 와 마찬가지로 생성자로 File을 사용할시 import 해주어야 한다.
		
//		Scanner ageScanner = new Scanner(agefile);
		// scanner 객체를 사용할 것이며, 스캐너 객체를 import 해주어야 한다.
		// scanner 로 입력을 해줄것이며, 입력은 age라는 txt 파일로 입력 받을 것이다.
		// 아직 까지 빨간줄이 있는 이유는 파일을 가져 오지 못했을때, 예외처리를 기본적으로
		// 해줘야 하는데 아직까지 예외처리가 되지 않아 빨간 줄이 그어져 있습니다.
		
		try { // 정상 작동 될 경우 실행
			Scanner ageScanner = new Scanner(agefile);
			while(ageScanner.hasNextInt()) { // 반복적인 작업을 수행 할 것이며, hasNextInt() => 다음으로 가져올 정수가 있다면, 이라는 조건을 걸었다.
				System.out.println("당신 나이의 절반은 " + ageScanner.nextInt() / 2 + " 살 이며, 정수형태로 나타나게 됩니다.");
			}
		} catch (FileNotFoundException e) { // 예외, 즉 오류 발생시 실행
			System.out.println("파일을 가져오는데 실패했습니다.");
		}
		// try catch 문을 사용 하여, 예외처리름 해줍니다.
		
		// 마지막으로 참조할 file 을 만들었는지 확인하자!
		//has : 있다
		//Next : 다음
		//Int : 정수

	}

}
