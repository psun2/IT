//Arrays.toString      

//GeeksforGeks : https://www.geeksforgeeks.org/arrays-tostring-in-java-with-examples/

//자바 스크립트는 console.log(arrayName);
//을 통해 배열이 가지고 있는 인자 값과 생김새를 볼 수 있습니다.
//예) [1, 2, 3] <= 이런식으로 표현이 됩니다.

//자바도 위와 같이 출력할수 있는 배열의 내장함수 deepToString 과 toString 이 있습니다.

//일차원 배열에서 사용하는 Arrays.toString();
//다차원 배열에서 사용하는 Arrays.deepToString();

//구문
//Arrays.deepToString( name );
//Arrays.toString( name );
//과 같이 작성해 줍니다.

import java.util.Arrays;

public class toSting_배열값조회 {

	public static void main(String[] args) {
		
		int[] array = new int[] {10, 20, 30};
		
		System.out.println(Arrays.toString(array)); // [10, 20, 30]
//		또는
		String arrayPrint = Arrays.toString(array); // [10, 20, 30]
		System.out.println(arrayPrint);
//		과 같이 String 자료형으로 선언 후 사용할 수 있습니다.

	}

}
