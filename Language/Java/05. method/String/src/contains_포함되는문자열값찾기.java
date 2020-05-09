
public class contains_포함되는문자열값찾기 {

	public static void main(String[] args) {
		
//		Title : String.contains()
		
		// contains 함수는  String 타입 함수로서, String 타입에서만 사용 가능하며,
		// 찾으려는 해당 문자열이 포함 되어있는 지 를 알려줍니다.
		// contains 함수는 대소문자를 구분 합니다.
		
		String tobacco = "HEETS PUPLE WAVE for IQOS";
		
		if(tobacco.contains("HEETS")) {
			System.out.println("contain 함수를 사용 하여 찾으시려는 문자열이 포함되어있습니다.[O]");
		} else {
			System.out.println("contain 함수를 사용 하여 찾으시려는 문자열이 포함되어있지 않습니다![X]");
		}
		
		if(tobacco.contains("heets")) {
			System.out.println("contain 함수를 사용 하여 찾으시려는 문자열이 포함되어있습니다.[O]");
		} else {
			System.out.println("contain 함수를 사용 하여 찾으시려는 문자열이 포함되어있지 않습니다![X]");
		}

	}

}
