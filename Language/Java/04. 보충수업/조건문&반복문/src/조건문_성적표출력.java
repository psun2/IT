
public class 조건문_성적표출력 {

	public static void main(String[] args) {
		
//		점수에 따라서 다른 메세지를 출력하는 프로그램을 작성해봅니다.
		int score = 66;
		
		if(score >= 90) {
			System.out.println("당신의 점수는 " + score + "점 A+ 입니다.");
			System.out.println("축하합니다!");
		} else if(score >= 80) {
			System.out.println("당신의 점수는 " + score + "점 B 입니다.");
			System.out.println("A+ 눈앞에 있네요...");
		} else if(score >= 70) {
			System.out.println("당신의 점수는 " + score + "점 C 입니다.");
			System.out.println("잠이 오십니까?");
		} else if(score >= 60) {
			System.out.println("당신의 점수는 " + score + "점 D 입니다.");
			System.out.println("F학점이 눈앞에 있네요...");
		} else {
			System.out.println("당신의 점수는 " + score + "점 F 입니다.");
			System.out.println("다음학기에 노력하세요!");
		}

	}

}
