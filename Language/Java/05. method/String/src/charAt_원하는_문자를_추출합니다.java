//참고 : https://blog.naver.com/tjddjs90/221884957162

//charictor : 문자 (번역기 검색결과)
//At : ~에, ~에서
//즉, 원하는 문자를 가져옵니다.
//구문 : String.charAt(argument)
//argument : 찾고 싶은 문자의 번호를 입력합니다.

public class charAt_원하는_문자를_추출합니다 {

	public static void main(String[] args) {
		
		String a = "Hello Woeld";
		String b = "Hello JAVA";
		String c = "Hello JavaScript";
		
		System.out.println(a.length()); // 11
		System.out.println(b.length()); // 10
		System.out.println(c.length()); // 16
		
		int cLength = c.length() - 1;
		
		char _a = a.charAt(a.length() -1);
		char _b = b.charAt(6);
		char _c = c.charAt(cLength);
		
		System.out.println(_a); // d
		System.out.println(_b); // j
		System.out.println(_c); // t

	}

}
