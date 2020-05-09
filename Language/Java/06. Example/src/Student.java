//Person클래스를 상속받아 Student 클래스를 작성합니다.
public class Student extends Person{
	
//	외부에서 접근하지 못하게 private 형태로 변수를 생성합니다.
	private String studentID;
	private int grade;
	private int GPA;
	
//	우클릭 => Source => Constructor using .... tab을 이용하여,
//	변수를 초기화 할 수 있는 생성자 함수를 만들 수 있습니다.
	public Student(String name, int age, int height, int weight, String studentID, int grade, int gPA) {
		super(name, age, height, weight);
//		super 키워드로 부모의 변수를 복제(?) 합니다.
		this.studentID = studentID;
		this.grade = grade;
		GPA = gPA;
	}

//	우클릭 => Source => Genarate Getter and Setter 를 이용하면,
//	set 함수와 get 함수를 모두 한번에 작성 할 수 있습니다.
//	외부 접근과 값 변경이 가능한 get,set 함수를 작성합니다.
	public String getStudentID() {
		return studentID;
	}

	public void setStudentID(String studentID) {
		this.studentID = studentID;
	}

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public int getGPA() {
		return GPA;
	}

	public void setGPA(int gPA) {
		GPA = gPA;
	}
	
//	학생정보를 출력하는 함수를 작성합니다.
	public void show() {
		System.out.println("-------------------------");
		System.out.println("학생 이름 : " + getName());
		System.out.println("학생 나이 : " + getAge());
		System.out.println("학생 키 : " + getHeight());
		System.out.println("학생 몸무게 : " + getWeight());
		System.out.println("학번 : " + getStudentID());
		System.out.println("학년 : " + getGrade());
		System.out.println("학점 : " + getGPA());
	}
}
