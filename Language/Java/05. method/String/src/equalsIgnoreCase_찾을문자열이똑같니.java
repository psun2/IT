
public class equalsIgnoreCase_찾을문자열이똑같니 {

	public static void main(String[] args) {

//		Title : String.equalsIgnoreCase()
		
		// equalsIgnoreCase 함수는 조회하는 변수에 들어 있는 값이 같은 값 인지 조회합니다.
		// equalsIgnoreCase 는 대소문자를 구분하지 않습니다.
		
		String tobacco = "IQOS";
		
		if(tobacco.equalsIgnoreCase("IQOS")) {
			System.out.println("equalsIgnoreCase 함수를 사용 하여 찾는 문자열이 과 같은 문자열입니다. [O]");
		} else {
			System.out.println("equalsIgnoreCase 함수를 사용 하여 찾는 문자열과 다릅니다! [X]");
		}
		
		if(tobacco.equalsIgnoreCase("iqos")) {
			System.out.println("equalsIgnoreCase 함수를 사용 하여 찾는 문자열이 과 같은 문자열입니다.  [O]");
		} else {
			System.out.println("equalsIgnoreCase 함수를 사용 하여 찾는 문자열과 다릅니다! [X]");
		}
		

	}

}
