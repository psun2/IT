//- 하나의 점을 의미하는 Node 클래스를 생성할 수 있습니다.
//- Node 클래스를 이용하여 두 점 사이의 중점을 구하는 프로그램을 작성합니다.

public class Main {

	public static void main(String[] args) {
		
		Node one = new Node(10, 20);
		Node two = new Node(30, 40);
		Node result = one.getCenter(two);
		System.out.println("X : " + result.getX() + " y : " + result.getY());
		
		System.out.println(one.getY());
		one.setY(10);
		System.out.println(one.getY());

	}

}
