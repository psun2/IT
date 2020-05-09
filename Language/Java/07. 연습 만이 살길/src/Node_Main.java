
public class Node_Main {

	public static void main(String[] args) {
		
		Node one = new Node(10, 20);
		Node two = new Node(30, 40);
		
		Node result = one.getCenter(two);
		
		System.out.println("x 좌표 : " + result.getX() + ", y 좌표 : " + result.getY());

	}

}
