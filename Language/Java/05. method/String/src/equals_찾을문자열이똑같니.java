
public class equals_찾을문자열이똑같니 {

	public static void main(String[] args) {

//		Title : String.equals()
		
		// equals 함수는 조회하는 변수에 들어 있는 값이랑 완벽하게 일치 하나 확인 하는 역할을 하는 함수입니다.
		// equals 는 대소문자를 구분합니다.
		
		String tobacco = "IQOS";
		
		if(tobacco.equals("IQOS")) {
			System.out.println("equals 함수를 사용 하여 찾는 문자열이 완벽하게 똑같습니다. [O]");
		} else {
			System.out.println("equals 함수를 사용 하여 찾는 문자열과 다릅니다! [X]");
		}
		
		if(tobacco.equals("iqos")) {
			System.out.println("equals 함수를 사용 하여 찾는 문자열이 완벽하게 똑같습니다.  [O]");
		} else {
			System.out.println("equals 함수를 사용 하여 찾는 문자열과 다릅니다! [X]");
		}
		

	}

}
