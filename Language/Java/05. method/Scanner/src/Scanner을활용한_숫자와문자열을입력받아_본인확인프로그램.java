import java.util.Scanner;

public class Scanner을활용한_숫자와문자열을입력받아_본인확인프로그램 {

	public static void main(String[] args) {
		
		Scanner namesc = new Scanner(System.in); // 이름을 입력 받습니다.
		
		System.out.print("이름을 입력해 주세요 : ");
		String name = namesc.nextLine(); // name 을 입력 받습니다.
		System.out.println("당신의 이름이 " + name + " 이 맞습니까?");
		
		String yes = "Yes";
		String no = "No";
		
		Scanner confirmsc = new Scanner(System.in); // 옳고 그름의 입력을 받습니다.
		
		System.out.print("맞으면 " + yes + " 틀리면 " + no + "를 입력해 주세요 : ");
		String nameconfirm = confirmsc.nextLine();
		
		if(nameconfirm.equalsIgnoreCase(yes)) {
			System.out.println("다음 단계로 넘어가도록 하겠습니다.");
		} else {
			System.out.println("잘 못입력 하셧네요");
			System.out.println("처음부터 다시 시작해주세요.");
			System.out.println("프로그램을 종료합니다");
		}
	
		
		Scanner agesc = new Scanner(System.in); // 나이를 입력 받습니다.
		
		System.out.print("나이를 입력해 주세요 : ");
		int age = agesc.nextInt(); // age 을 입력 받습니다.
		System.out.println("당신의 나이가 " + age + " 가 맞습니까?");
		
		
		System.out.print("맞으면 " + yes + " 틀리면 " + no + "를 입력해 주세요 : ");
		String ageconfirm = confirmsc.nextLine();
		
		
		if(ageconfirm.equalsIgnoreCase(yes)) {
			System.out.println("개인 정보 입력이 끝났습니다.");
			System.out.println("당신의 이름은 : " + name + " 이고, 나이는 : " + age + " 입니다.");
			System.out.println("홈페이지에 접속을 시도 중입니다.");
		} else {
			System.out.println("잘 못입력 하셧네요");
			System.out.println("처음부터 다시 시작해주세요.");
			System.out.println("프로그램을 종료합니다");
		}
		
		
		namesc.close(); // 이름입력 종료.
		agesc.close(); // 나이 입력 종료
		confirmsc.close(); // 입력 종료
		
		
	}

}
