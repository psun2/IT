public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String a = "I Love You.";
		if(a.contains("Love")) { // contains = String 자료형에서 제공하는 특별한 함수
			// 포함하는 경우 실행되는부분	// contains = a라는 변수에 담긴 값이 특정한 문자열 "Love" 를 포함하는 지 검사해주는 함수 (대소문자 를 구분한다!!)
			System.out.println("Mee Too.");
		} else {
			// 포함되지 않는 경우 실행되는 부분
			System.out.println("I Hate You.");
		}
		
//		출력 결과 : Mee Too.
		
		String b = "I Want You.";
		if(b.contains("Love")) { // contains = String 자료형에서 제공하는 특별한 함수
			// 포함하는 경우 실행되는부분	// contains = a라는 변수에 담긴 값이 특정한 문자열 "Love" 를 포함하는 지 검사해주는 함수 (대소문자 를 구분한다!!)
			System.out.println("Mee Too.");
		} else {
			// 포함되지 않는 경우 실행되는 부분
			System.out.println("I Hate You.");
		}
		
//		출력 결과 : I Hate You.
		
	}

}