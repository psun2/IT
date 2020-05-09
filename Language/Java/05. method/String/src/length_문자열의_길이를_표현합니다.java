//참고 : https://blog.naver.com/tjddjs90/221884949632
//length : 길이
//알아두고 가자! 컴퓨터의 숫자는 인간의 숫자(?) 와는 다릅니다.
//보통 사람들이 1부터 세는 반면, 컴퓨터는 0부터 셉니다.
//하지만 또 length() 함수는 1부터 셉니다.
//즉 length() 함수로 문자열의 길이를 세어낸뒤 -1 을 해줘야 컴퓨터가 알아 들을수(?) 있게 됩니다.
//﻿이해가 안가신다면, 다음에 나오는 charAt() 함수와 같이 쓰는 length 의 모습을 보시면 되겠습니다.

public class length_문자열의_길이를_표현합니다 {

	public static void main(String[] args) {

		String a = "Hello World";
		String b = "Hello JAVA";
		String c = "Hello JavaScript";
		
		System.out.println(a.length()); // 11
		System.out.println(b.length()); // 10
		System.out.println(c.length()); // 16

	}

}
