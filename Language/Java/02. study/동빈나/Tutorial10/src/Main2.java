//- 문자열에서 마지막 단어를 반환하는 함수를 작성합니다.

public class Main2 {

	//문자열에서 마지막 단어를 반환하는 함수
	public static char function(String input) {
		return input.charAt(input.length() - 1);
	}
	
	public static void main(String[] args) {
		
		String word = "Hello World";
		char result = function(word);
		
		System.out.println(word + "의 마지막 단어는 " + result + " 입니다.");

	}

}
