
public class Person_Main_Array {

	public static void main(String[] args) {
		
//		Student 자료형의 배열을 생성합니다.
		Student[] students = new Student[100];
		
//		학번만 0 ~ 99 까지 바뀌는 Student 를 생성합니다.
		for(int i = 0; i < 100; i ++) {
			students[i] = new Student("홀길동", 18, 175, 70, i + "", 2, 1);
//			학번은 String 의 자료형으로서 i는 int 이므로 + "" 해 줌으로써 문자열화(?) 됩니다.
			students[i].show();
		}

	}

}
