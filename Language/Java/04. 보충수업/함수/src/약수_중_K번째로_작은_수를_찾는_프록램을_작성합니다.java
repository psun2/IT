//- 약수 중 K번째로 작은 수를 찾는 프록램을 작성합니다.

public class 약수_중_K번째로_작은_수를_찾는_프록램을_작성합니다 {

	//k 번째 약수를 찾는 함수 작성
	public static int function(int number, int k) {
		for(int i = 1; i <= number; i++) {
			if(number % i == 0) {
				k--;
				if(k == 0) {
					return i;
				}
			}
		}
		return -1;
	}
	
	public static void main(String[] args) {
		
		int a = 100;
		int b = 3;
		
		int result = function(a, b);
		if(result == -1) {
			System.out.println(a + " 의 " + b + " 번째 약수가 업습니다.");
		} else {
			System.out.println(a + " 의" + b + " 번째 약수는 " + result + " 입니다.");
			
		}
		
		System.out.println("========================");
		
		int c = 100;
		int d = 99;
		
		int result2 = function(c, d);
		if(result2 == -1) {
			System.out.println(c + " 의 " + d + " 번째 약수가 업습니다.");
		} else {
			System.out.println(c + " 의" + d + " 번째 약수는 " + result2 + " 입니다.");
			
		}

	}

}
