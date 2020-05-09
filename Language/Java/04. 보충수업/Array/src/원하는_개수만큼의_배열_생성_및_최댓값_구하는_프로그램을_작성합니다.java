//		배열
//		데이터가 많을 때
//		배열은 쉽게 말해 데이터가 많을 때 사용하는 것 입니다. 
//		가장 간단한 프로그램 예제에서는 단순히 한 두 개의 변수만으로 프로그램을 작동시킬 수 있엇지만 
//		현실에서의 다양한 프로그램에는 아주 많은 양의 데이터가 사용되는 것이 일반적입니다.
//		따라서 데이터가 많을 때, 주로 배열을 이용랑 수 있습니다.
//		이 때 배열은 한없이 많을 수 있으면서도 그 데이터 개수가 변경될 수 있는 
//		데이터들의 집합을 지정해줄 수 있기에 효과적으로 대부분의 프로그램에 사용됩니다.
		
//		배열
//		데이터가 많을 때
//		배열을 적절히 사용하여 많은 데이터를 처리합니다.
//		- 원하는 개수만큼의 배열 생성 및 최댓값 구하는 프로그램을 작성합니다.
//		- 100개의 랜덤 정수의 평균을 구하는 프로그램을 작성합니다.

// array┌─────────────────┐
//　　　　　│　　│　　│　　│　　│　　│  => value
//　　　　　└─0──1───2───3──4─┘  => index

//		- 원하는 개수만큼의 배열 생성 및 최댓값 구하는 프로그램을 작성합니다.

import java.util.Arrays;
import java.util.Scanner;

public class 원하는_개수만큼의_배열_생성_및_최댓값_구하는_프로그램을_작성합니다 {

	public static int max(int a, int b) {
		return (a > b) ? a : b;
	}
	
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
//		스캐너의 import 단축키 ctrl + shift + o
		
		System.out.print("생성할 배열의 크기를 입력하세요 : ");
		int number = scanner.nextInt();
		
		int [] array = new int [number];
		
		for(int i = 0; i < number; i++) {
			System.out.print("배열에 입력할 정수를 하나씩 입력하세요(양수) : ");
			array[i] = scanner.nextInt();
		}
		
		scanner.close();
		
		int result = -1;
		for(int i = 0; i < number; i++) {
			result = max(result, array[i]);
		}
		
		System.out.println("입력하신 배열은 " + Arrays.toString(array) + " 이며,");
		System.out.println("배열 요소중 최대 값은 " + result + " 입니다.");

	}

}
