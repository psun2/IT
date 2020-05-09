//	- 하나의 점을 의미하는 Node 클래스를 생성할 수 있습니다.
//	- Node 클래스를 이용하여 두 점 사이의 중점을 구하는 프로그램을 작성합니다.

public class Node_좌표_Class_Node {

	private int x;
	private int y;
	
	public  Node_좌표_Class_Node(int x, int y) {
		this.x = x;
		this.y = y;
	}
	
	public int getX() {
		return x;
	}
	
	public void setX(int x) {
		this.x = x;
	}
	
	public int getY() {
		return y;
	}
	
	public void setY(int y) {
		this.y = y;
	}
	
	public Node_좌표_Class_Node getCenter(Node_좌표_Class_Node other) {
		return new Node_좌표_Class_Node((this.x + other.getX()) / 2, (this.y + other.getY()) / 2); 
	}
}
