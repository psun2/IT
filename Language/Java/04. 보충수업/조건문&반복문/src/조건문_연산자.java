
public class 조건문_연산자 {

	public static void main(String[] args) {
		
//		다양한 연산자를 활용하여, 문자열과 정수형을 각각 조건문을 이용해 활용해보고 그 차이점을 공부합니다.
		
		String name = "박성언";
		int age = 31;
		
		// Case1
		if(name == "박성언") { // equals 함수로 대체 가능
			System.out.println("[Case1] 당신의 이름이 맞습니다.");
		} else {
			System.out.println("[Case1] 입력하신 이름이 다릅니다.");
		}
		
		// Case2
		if(name.equals("박성언")) { // 위 상황을 equals 함수로 활용
			System.out.println("[Case2] 당신의 이름이 맞습니다.");
		} else {
			System.out.println("[Case2] 입력하신 이름이 다릅니다.");
		}
		
		// Case3
		if(age == 31) { // equals 함수로 대체 가능
			System.out.println("[Case3] 당신의 나이가 맞습니다.");
		} else {
			System.out.println("[Case3] 입력하신 나이가 다릅니다.");
		}
		
		// Case4
		if(name.equals("박성언") && age == 31) {
			System.out.println("[Case4] 당신의 이름과 나이가 맞습니다.");
		} else {
			System.out.println("[Case4] 입력하신 이름과 나이가 다릅니다.");
		}
		
		// Case5
		if(name.equals("박성언") && age == 30) {
			System.out.println("[Case5] 당신의 이름과 나이가 맞습니다.");
		} else {
			System.out.println("[Case5] 입력하신 이름 또는 나이 다르거나 둘다 다릅니다.");
		}
		
		// Case6
		if(name.equals("vscode") || age == 31) {
			System.out.println("[Case6] 당신의 이름 또는 나이가 맞거나 둘 다 맞습니다.");
		} else {
			System.out.println("[Case6] 입력하신 이름 또는 나이 또는 이름과 나이가 다릅니다.");
		}
		
	}

}
