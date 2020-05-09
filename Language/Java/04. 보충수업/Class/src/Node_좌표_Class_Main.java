//	- 하나의 점을 의미하는 Node 클래스를 생성할 수 있습니다.
//	- Node 클래스를 이용하여 두 점 사이의 중점을 구하는 프로그램을 작성합니다.

public class Node_좌표_Class_Main {

	public static void main(String[] args) {
		Node_좌표_Class_Node one = new Node_좌표_Class_Node(10, 20);
		Node_좌표_Class_Node two = new Node_좌표_Class_Node(30, 40);
		Node_좌표_Class_Node result = one.getCenter(two);
		
		System.out.println("x의 좌표는 : " + result.getX() + ", y의 좌표는 : " + result.getY());

	}

}
