import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class File을활용한_숫자와문자열을file을입력받아_본인확인프로그램 {

	public static void main(String[] args) {
		
		File name = new File("name.txt"); // 이름 텍스트 파일을 받아오는 객체생성
		File age = new File("age.txt"); // 나이 텍스트 파일을 받아오는 객체생성
		
		try {
			Scanner namesc = new Scanner(name);
			System.out.println("이름 정보가 담긴 파일을 가져오는데 성공했습니다.");
			while(namesc.hasNextLine()) {
				System.out.print(namesc.nextLine() + " ");
			}
			System.out.println();
			System.out.println();
			
		} catch (FileNotFoundException e) {
			System.out.println("이름 정보가 담긴 파일을 가져오는데 실패했습니다.");
			System.out.println();
		}
		try {
			Scanner agesc = new Scanner(age);
			System.out.println("나이 정보가 담긴 파일을 가져오는데 성공했습니다.");
			System.out.println("개인정보 보호 목적으로 나이의 절반만 표시 됩니다.");
			while(agesc.hasNextInt()) {
				System.out.print((agesc.nextInt() / 2 ) + " ");
			}
			System.out.println();
			System.out.println();
		} catch (FileNotFoundException e) {
			System.out.println("나이 정보가 담긴 파일을 가져오는데 실패했습니다.");
			System.out.println();
		}

	}

}
