//- 약수 중 K번째로 작은 수를 찾는 프록램을 작성합니다

public class Main {
	
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
		
		int result = function(3050, 10);
		if(result == -1) {
			System.out.println("3050 의 10번째 약수는 없습니다.");
		} else {
			System.out.println("3050의 10번째 약수는 " + result + " 입니다.");
		}

	}

}
