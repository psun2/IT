
public class Main {

	public static void main(String[] args) {
		
		Student student1 = new Student("홍길동", 20, 175, 70, "20200408", 1, 4.5);
		Student student2 = new Student("이순신", 20, 175, 70, "20200408", 1, 4.5);
		
		student1.show();
		student2.show();
		
		Teacher teacher1 = new Teacher("홍길동", 20, 175, 70, "ABC201", 3000000, 5);
		teacher1.show();
	}

}
