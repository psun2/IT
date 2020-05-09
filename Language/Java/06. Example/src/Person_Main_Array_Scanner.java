import java.util.Scanner;

public class Person_Main_Array_Scanner {

	public static void main(String[] args) {
	
		Scanner scan = new Scanner(System.in);
//		ctrl + shift + o => import 단축키
		
//		배열의 크기를 입력 받습니다.
		System.out.print("학생 수를 입력 하세요 : ");
		int number = scan.nextInt();
		
//		입력 받은 만큼의 크기로 배열을 생성합니다.
		Student[] students = new Student[number];
		
		for(int i = 0; i < number; i++) {
			String name;
			int age;
			int height;
			int weight;
			String studentID;
			int grade;
			int gPA;
			
			System.out.print("학생의 이름을 입력해 주세요 : ");
			name = scan.next();
			System.out.print("학생의 나이를 입력해 주세요 : ");
			age = scan.nextInt();
			System.out.print("학생의 키를 입력해 주세요 : ");
			height = scan.nextInt();
			System.out.print("학생의 몸무게를 입력해 주세요 : ");
			weight = scan.nextInt();
			System.out.print("학생의 학번을 입력해 주세요 : ");
			studentID = scan.next();
			System.out.print("학생의 학년을 입력해 주세요 : ");
			grade = scan.nextInt();
			System.out.print("학생의 성적을 입력해 주세요 : ");
			gPA = scan.nextInt();
			
//			next() => char
//			nextLine() => String
			
			scan.close();
			
			students[i] = new Student(name, age, height, weight, studentID, grade, gPA);
		}

		for(int i = 0; i < number; i++) {
			students[i].show();
		}
		
	}

}
