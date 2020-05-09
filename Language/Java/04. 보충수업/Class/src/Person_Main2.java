
public class Person_Main2 {

	public static void main(String[] args) {

		Person_Student[] students = new Person_Student[100];
		
		for(int i = 0; i < 100; i++) {
			students[i] = new Person_Student("홍길동", 20, 175, 70, i + "", 1, 4.5);
//			TODO
//			i + "" = 학생의 학번은 String 자료형 입니다.
//			하지만 i 는 정수형태 입니다.
//			정수 형태의 i 를 String 형태로 바꾸 기 위해서 뒤에 문자 열이라는 쌍따옴표 를 더해 줍니다.
			students[i].show();
		}

	}

}
