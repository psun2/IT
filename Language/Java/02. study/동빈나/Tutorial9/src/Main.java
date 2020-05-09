//	- 약수란 ?
//		약수(約數, 영어: divisor) 또는 인수(因數, 영어: factor)는 어떤 수로 정수가 나누어떨어지는것을 대하여 이르는 말이다. 
//		다항식의 약수나 가환환의 원소의 약수를 정의할 수도 있다.
//
//	- 공약수란 ?
//		공약수란, 이름에서 알 수 있듯이 두 수, 혹은 그 이상의 여러 수의 공통인 약수라는 뜻이다.
//
//	- 최대 공약수란 ?
//		12: 1, 2, 3, 4, 6, 12
//		18: 1, 2, 3, 6, 9, 18
//		여기서 위아랫줄 모두 같이 있는 숫자가 공약수가 된다. 
//		즉, 이 경우에는 1, 2, 3, 6이 공약수가 된다. 최대공약수는, 찾은 공약수 중 가장 큰 것, 
//		즉 이 경우에는 6이 최대공약수가 된다.
	
public class Main {
	
//	- 3개의 수 최대 공약수를 찾는 프로그램을 작성합니다.
	
	//반환형, 함수명, 매개변수
	public static int function(int a, int b, int c) {
		int min;
		if(a > b) {
			if(b > c) {
				min = c;
			} else {
				min = b;
			}
		} else {
			if (a > c) {
				min = c;
			} else {
				min = a;
			}
		}
		for(int i = min; i > 0; i--) {
			if(a % i == 0 && b % i == 0 && c % i == 0) {
				return i;
			}
		}
		return -1; // 최대 공약수가 없을시 -1 출력
	}

	public static void main(String[] args) {
		
		System.out.print("(400, 300, 750)의 최대 공약수 : ");
		System.out.println(function(100, 300, 750) + " 입니다.");

	}

}
