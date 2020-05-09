
public class Node2_Main {

	public static void main(String[] args) {
		
//		Node2 클래스를 활용하여, one라는 변수를 만들고 값은 Node 클래스를 활용하여,
//		x 와 y 좌표를 입력합니다.
		Node2 one = new Node2(10, 20);
		
		Node2 two = new Node2(30, 40);
		
		Node2 result = one.getCenter(two);
		
		System.out.println("x 좌표 : " + result.getX() + ", y좌표 : " + result.getY());

	}

}
