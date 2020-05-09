
public class Person_main {

	public static void main(String[] args) {
		
//		Person을 상속 받은 학생 클래스를 생성합니다.
		
		Person_Student student1 = new Person_Student("홍길동", 20, 175, 70, "20200408", 1, 4.5);
//		tpye 변수명 = new type(argument);
		
//		학생정보 출력을 위해 Person_Studnet의 내장 메소드 show를 사용합니다.
		student1.show();
		
//		----------------------
//		학생 이름 : 홍길동
//		학생 나이 : 20
//		학생 키 : 175
//		학생 몸무게 : 70
//		학번 : 20200408
//		학년 : 1
//		학점 : 4.5
		
		Person_Teacher teacher1 = new Person_Teacher("홍길동", 20, 175, 70, "asdf12", 1, 12);
		
		teacher1.show();
		
	}

}
