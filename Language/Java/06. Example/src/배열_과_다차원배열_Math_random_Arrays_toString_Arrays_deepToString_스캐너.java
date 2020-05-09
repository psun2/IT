//		배열
//		데이터가 많을 때
//		배열은 쉽게 말해 데이터가 많을 때 사용하는 것 입니다. 
//		가장 간단한 프로그램 예제에서는 단순히 한 두 개의 변수만으로 프로그램을 작동시킬 수 있엇지만 
//		현실에서의 다양한 프로그램에는 아주 많은 양의 데이터가 사용되는 것이 일반적입니다.
//		따라서 데이터가 많을 때, 주로 배열을 이용랑 수 있습니다.
//		이 때 배열은 한없이 많을 수 있으면서도 그 데이터 개수가 변경될 수 있는 
//		데이터들의 집합을 지정해줄 수 있기에 효과적으로 대부분의 프로그램에 사용됩니다.
		
// array┌─────────────────┐
//　　　　　│　　│　　│　　│　　│　　│  => value
//　　　　　└─0──1───2───3──4─┘  => index

//		다차원 배열
//		배열의 활용
//		다차원 배열은 배열이 배열의 원소로 들어가는 구조를 말합니다.
//		흔히 이차원 배열은 M x N 형태의 지도를 나타내고자 할 때 많이 사용됩니다.
//		이러한 다차원 배열을 적절하게 활용하게 되면 
//		현실 세계의 다양한 문제에 보다 쉽게 접근 할 수 있습니다.
		
//		┌───────────────────────────────┐
//		│a[0][0]│a[0][1]│a[0][2]│a[0][3]│
//		│───────────────────────────────│
//		│a[1][0]│a[1][1]│a[1][2]│a[1][3]│
//		│───────────────────────────────│
//		│a[2][0]│a[2][1]│a[2][2]│a[2][3]│
//		└───────────────────────────────┘

import java.util.Arrays;
import java.util.Scanner;
public class 배열_과_다차원배열_Math_random_Arrays_toString_Arrays_deepToString_스캐너 {

	public static int min(int a, int b) {
		return (a > b) ? b : a;
	}
	
	public static int max(int a, int b) {
		return (a > b) ? a : b;
	}
	
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		//import 단축키 : ctrl + shift + o
		//사용자에게 배열의 길이를 받기위해 스캐너를 생성합니다.
		
		System.out.print("배열의 가로방향 크기를 입력해주세요 : ");
		int number = scanner.nextInt();
		
		System.out.print("배열의 세로방향 크기를 입력해주세요 : ");
		int number2 = scanner.nextInt();
		
		scanner.close();
		
		int [][] array = new int [number][number2];
		
		// 배열에 특별한 랜덤 값을 배정해주는 로직
		for(int i = 0; i < array.length; i++) {
			for(int j = 0; j < array[i].length; j++) {
				array[i][j] = (int)(Math.random() * 10 + 1); // 1 ~ 10 사이의 수를 생성
			}
		}
		
		// 배열의 담긴 값 을 찍어내는 로직
		for(int i = 0; i < array.length; i++) {
			for(int j = 0; j < array[i].length; j++) {
				System.out.print(array[i][j] + " ");
			}
			System.out.println();
		}
		
		// 배열의 인자중 최소값을 알아내는 로직
		int min = 100000000;
		for(int i = 0; i < array.length; i++) {
			for(int j = 0; j < array[i].length; j++) {
				min = min(min, array[i][j]);
			}
		}
		System.out.println("배열에서 가장 작은 값은 " + min + " 입니다.");
		
		// 배열의 인자중 최대값을 알아내는 로직
				int max = 0;
				for(int i = 0; i < array.length; i++) {
					for(int j = 0; j < array[i].length; j++) {
						max = max(max, array[i][j]);
					}
				}
				System.out.println("배열에서 가장 큰 값은 " + max + " 입니다.");
		
		// 배열의 인자의 총 합을 알아내는 로직
		int sum = 0;
		for(int i = 0; i < array.length; i++) {
			for(int j = 0; j < array[i].length; j++) {
				sum += array[i][j];
			}
		}
		System.out.println("배열 인자의 총 합은 " + sum + " 입니다.");
		
		// 배열의 인자의 총 합의 평균 알아내는 로직
		double average = sum / (number * number2);
		System.out.println("배열 인자의 총 합의 평균은 " + average + " 입니다.");
		
		// 배열의 생김새를 확인하는 로직
		String arr = Arrays.deepToString(array);
		System.out.print(arr);
	}

}
