//- 원하는 개수만큼의 배열 생성 및 최댓값 구하는 프로그램을 작성합니다.

// array┌─────────────────┐
//　　　　　│　　│　　│　　│　　│　　│  => value
//　　　　　└─0──1───2───3──4─┘  => index

 
import java.util.Scanner;

public class Main {

	public static int max(int a, int b) {
		return (a > b) ? a : b;
	}
	
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
//		스캐너 import 단축키 : ctrl + shift + o (컨트롤 + 쉬프트 + o)

		System.out.print("생성할 배열의 크기를 입력하세요 : ");
		int number = scanner.nextInt();
		
		int [] array = new int[number];

		for(int i = 0; i < number; i++) {
			System.out.print("배열에 입력할 정수를 하나씩 입력하세요(양수) : ");
			array[i] = scanner.nextInt();
		}
	
		scanner.close();
		
		int result = -1;
		for(int i = 0; i < number; i++) {
			result = max(result, array[i]);
		}
		
		System.out.println("입력한 모든 정수중에서 가장 큰 값은 : " + result + " 입니다.");
		
	}

}
