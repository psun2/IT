
public class Main {

	public static void main(String[] args) {

		Archer archer1 = new Archer("궁수1", "상");
		Archer archer2 = new Archer("궁수2", "중");
		System.out.println(archer1 == archer2); // false
		
//		TODO 두개의 인스턴스는 내부적인 값이 같더라도, 다른 인스턴스이기 때문에 false를 반환 합니다.
		Archer archer3 = new Archer("궁수1", "상");
		System.out.println(archer1 == archer3); // false
		
//		TODO 두 인스턴스의 내부적인 값이 같은지 를 비교 합니다.
		System.out.println(archer1.equals(archer3)); //true
		boolean equals = archer1.equals(archer3);
		System.out.println(equals); // true
		
//		TODO 핵심요약
//		두 인스턴스를 단순 비교했을땐 false 값이 나오고,
//		내부의 값을 비교하는 메소드를 생성하여 비교하였을땐 내부의 값만을 보기때문에
//		true 를 반환합니다.

	}

}
