
public class for_무한루프 {

	public static void main(String[] args) {

//		조건문 & 반복문
//
//		- 하나의 비교 연산자는 true 혹은 false 를 반환하게 됩니다.
//		- 모든 조건문, 반복문에서 왠만해서 무조건 괄호를 적용하세요.
//		- for문 혹은 whil문은 얼마든지 중첩될 수 있습니다.
//		- for(;;;)는 while(true)와 똑같이 무한 루프라는 의미로 동작합니다.
//		- berak;를 이용하여 반복문을 즉시 빠져나올 수 있습니다.
		
		int count = 0;
		for(;;) {
			count++;
			if(count == 10) {
				break;
			}
			System.out.println("무한루프 출력");
		}
		
		System.out.println("정수형 변수 count 에 담긴 값 : " + count + " 입니다.");
		
	}

}
