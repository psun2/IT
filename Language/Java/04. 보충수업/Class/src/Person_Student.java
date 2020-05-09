
public class Person_Student extends Person_Person {
//	상속을 받을땐 extends(연장하다) 키워드와 상속할 부모 클래스의 이름을 적습니다.

	private String studentID;
	private int grade;
	private double GPA; // gpa 란 ? 외국식으로 학점을 표현할때 gpa 라 고 합니다.
	
//	우클릭 => Source => Constructor using .... tab을 이용하여,
//	변수를 초기화 할 수 있는 생성자 함수를 만들 수 있습니다
	
	public Person_Student(String name, int age, int height, int weight, String studentID, int grade, double gPA) {
		super(name, age, height, weight);
		// super 키워드를 통해 부모의 instans 를 복제(?) 합니다.
		this.studentID = studentID;
		this.grade = grade;
		GPA = gPA;
	}

//	우클릭 => Source => Genarate Getter and Setter 를 이용하면,
//	set 함수와 get 함수를 모두 한번에 작성 할 수 있습니다.
	
	public String getStudentID() {
		return studentID;
	}

	public void setStudentId(String studentID) {
		this.studentID = studentID;
	}

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public double getGPA() {
		return GPA;
	}

	public void setGPA(double gPA) {
		GPA = gPA;
	}

	// 학생 정보를 출력하는 show 메소드를 작성합니다.
	
	public void show() {
		System.out.println("----------------------");
		System.out.println("학생 이름 : " + getName());
		System.out.println("학생 나이 : " + getAge());
		System.out.println("학생 키 : " + getHeight());
		System.out.println("학생 몸무게 : " + getWeight());
		System.out.println("학번 : " + getStudentID());
		System.out.println("학년 : " + getGrade());
		System.out.println("학점 : " + getGPA());
	}
}
