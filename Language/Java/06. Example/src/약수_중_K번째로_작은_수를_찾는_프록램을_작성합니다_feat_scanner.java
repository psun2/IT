//참고 : https://blog.naver.com/tjddjs90/221884830942
//- 사용자에게 scanner로 입력받은 약수 중 K번째로 작은 수를 찾는 프록램을 작성합니다

import java.util.Scanner;
//스캐너를 import 하는 구문 입니다.

public class 약수_중_K번째로_작은_수를_찾는_프록램을_작성합니다_feat_scanner {

	public static int function(int number, int k) {
		// 약수를 구할 number 와  몇번쨰? 가 될 k 를 인자로 받습니다.
		
		for(int i = 1; i <= number; i++) {
//			number 는 1 부터 시작해 1씩 늘어나면서, number 까지 
//			즉, 본인의 수만큼 반복 되는 반복 문 입니다.
			
			if(number %  i == 0) {
//				number 을 i 로 나눈 나머지가 0 이면,
				
				k--;
//				k 만약 내가 10번째를 찾기로 했으면, 9,8,7,. 하나씩 줄면서,
//				10번째 까지 도달 하는 조건문을 작성 합니다.
				
				if(k == 0) {
//					그리고 k 가 0 우리가 찾던 번째 수에 도착을 하면
					
					return i;
//					반환 해줍니다. k번째 나눠서 나머지가 0 이 나왔으므로 
//					i가 1씩 늘면서 나누어 주었기 때문에 k 번째의 공약수는 현재의 i 입니다.
				}
			}
		}
		return -1;
//		공약수를 찾지 못했을 경우 -1 을 반환 합니다.
		
	}
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
//		콘솔 창으로 사용자에게 입력을 받습니다.
		
		System.out.print("공약수를 구하고자 하는 값을 입력 하세요 : ");
		int number = sc.nextInt();
//		정수 자료형으로 사용자에게 입력을 받아 number 라는 변수에 대입합니다.
		
		System.out.print("몇 번째 공약수를 구할것인지 입력 하세요 : ");
		int k = sc.nextInt();
//		몇 번째 약수를 구할 것인지 입력을 받아 k의 변수에 대입합니다.
		
		sc.close();
//		스캐너 사용이 종료 되어, 입력을 받지 않겟금 종료시켜 줍니다.
		
		int result = function(number, k);
//		위에 생성된 함수에 사용자에게 입력받은 number 변수와 k 변수를 인자값으로 주어 호출하고
//		결과 값을 result 변수에 대입합니다.
		
		System.out.println(number + " 의 " + k + " 번째 공약수는 " + result + " 입니다.");

	}

}
