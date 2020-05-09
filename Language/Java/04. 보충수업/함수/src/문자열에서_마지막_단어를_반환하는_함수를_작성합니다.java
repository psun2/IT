//- 문자열에서 마지막 단어를 반환하는 함수를 작성합니다.

public class 문자열에서_마지막_단어를_반환하는_함수를_작성합니다 {

	//문자열에서 마지막 단어를 반환하는 함수
	public static char function(String input) {
		char result = input.charAt(input.length() - 1);
		return result;
	}
	
	public static void main(String[] args) {
		
		String a = "Hello World";
		int b = a.length() - 1;
		
		char result = function(a);
		
		System.out.println(a + " 의 문자열 에서 " + b + " 번째의 단어를 추출합니다 : " + result);
		

	}

}
