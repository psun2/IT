//참고 : https://blog.naver.com/tjddjs90/221876839528

import java.util.Scanner;

public class 구구단_scanner_이중포문_사용 {

	public static void main(String[] args) {

		//console 에서 실행시키고 싶은 구구단의 단을 받아서 실행시키는 구구단 프로그램
				
		System.out.println("학습하실 구구단의 단을 입력해주세요.");
		
		//단을 입력받기위한 scanner 생성
		Scanner scanner = new Scanner(System.in);
		int dan = scanner.nextInt();
		
		for(int i = dan; i <= dan; i++) {
			System.out.println(dan + " 단의 실행결과");
			for(int j = 1; j < 10; j++) {
				System.out.println(dan + " * " + j + " = " + (i * j));
			}
		}
		
		scanner.close();
		
	}

}
