//학생과 마찬가지로 선생님 클래스를 Perosn 을 상속 받습니다.
public class Teacher extends Person{

//	외부에서 접근하지 못하게 private 형태로 변수를 생성합니다.
	private String TeacherID;
	private int monthSalary; // 월급
	private int workedYear; // 연차
	
//	우클릭 => Source => Constructor using .... tab을 이용하여,
//	변수를 초기화 할 수 있는 생성자 함수를 만들 수 있습니다.
	public Teacher(String name, int age, int height, int weight, String teacherID, int monthSalary, int workedYear) {
		super(name, age, height, weight);
//		super 키워드로 부모의 변수를 복제(?) 합니다.
		TeacherID = teacherID;
		this.monthSalary = monthSalary;
		this.workedYear = workedYear;
	}

//	우클릭 => Source => Genarate Getter and Setter 를 이용하면,
//	set 함수와 get 함수를 모두 한번에 작성 할 수 있습니다.
//	외부 접근과 값 변경이 가능한 get,set 함수를 작성합니다.
	public String getTeacherID() {
		return TeacherID;
	}

	public void setTeacherID(String teacherID) {
		TeacherID = teacherID;
	}

	public int getMonthSalary() {
		return monthSalary;
	}

	public void setMonthSalary(int monthSalary) {
		this.monthSalary = monthSalary;
	}

	public int getWorkedYear() {
		return workedYear;
	}

	public void setWorkedYear(int workedYear) {
		this.workedYear = workedYear;
	}
	
//	선생님 정보를 출력하는 함수를 작성합니다.
	public void show() {
		System.out.println("-------------------------");
		System.out.println("선생님 이름 : " + getName());
		System.out.println("선생님 나이 : " + getAge());
		System.out.println("선생님 키 : " + getHeight());
		System.out.println("선생님 몸무게 : " + getWeight());
		System.out.println("교직원 번호 : " + getTeacherID());
		System.out.println("월급 : " + getMonthSalary());
		System.out.println("연차 : " + getWorkedYear());
	}
	
	
}
