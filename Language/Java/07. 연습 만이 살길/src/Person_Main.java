
public class Person_Main {

	public static void main(String[] args) {
//		Student 클래스를 활용하여, 새로운 학생 변수를 만들고 값은 Student 클래스를 활용하여,
//		학생 정보를 입력합니다.
		Student student1 = new Student("홀길동", 18, 175, 70, "20200410", 2, 1);
	
		student1.show();
		
//		Teacher 클래스를 활용하여, 새로운 선생님 변수를 만들고 값은 Teacher 클래스를 활용하여,
//		선생님 정보를 입력합니다.
		
		Teacher teacher1 = new Teacher("호랑이", 38, 180, 90, "ASD13", 2400000, 1);
	
		teacher1.show();
		
	}
}
