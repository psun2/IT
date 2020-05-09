//참고 : https://blog.naver.com/tjddjs90/221884831659
//- 문자열에서 마지막 단어를 반환하는 함수를 작성합니다.

import java.util.Scanner;
//스캐너의 import 구문

public class 문자열에서_사용자가원하는_번째의_단어를_반환하는_함수를_작성합니다_feat_scanner_charAt_length {

	public static char function(String a, int b) {
//	반환은 문자 이기때문에 char 로 작성합니다.
//	문자열과 x번째를 찾기 위해 x 정수를 입력 받습니다.
		
		char result = a.charAt(b);
//		String의 내장함수인 charAt() 함수를 사용하여, 인자로는 x를 넣어 찾고자 하는 단어를 찾습니다.
		
		return result;
	}
	
	public static void main(String[] args) {
	
		Scanner sc = new Scanner(System.in);
//		사용자에게 입력 받을 스캐너 생성
		
		System.out.println("이 프로그램은 사용자에게 문자열을 입력 받아, 사용자가 원하는 위치에 무슨 단어가 있는지 알려주는 프로그램 입니다.");
		System.out.println();
		
		System.out.print("문자열을 입력해 주세요 : ");
		String a = sc.nextLine();
//		사용자에게 입력 받는 문자열을 a 변수에 대입합니다.
		
		sc.close();
//		스캐너 사용을 종료합니다.
		
		int len = a.length() - 1;
//		문자열의 길이를 담는 변수를 생성합니다
		
		System.out.println();
		System.out.println("문자열의 총 길이는 " + len + " 입니다.");
		System.out.println();
		
		System.out.print("문자열에서 x번째 있는 단어는 무엇인지 알려줍니다.");
		System.out.println();
		
		System.out.print("x를 입력 받습니다 : ");
		int b = sc.nextInt();
//		사용자에게 찾을 단어의 번호를 받습니다.
		
		System.out.println();
		
		char result = function(a, b);
		
		System.out.println(a + " 문자열에서 " + b + " 번째에 있는 단어는 " + result + " 입니다.");

	}
}
