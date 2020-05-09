//- 하나의 점을 의미하는 Node 클래스를 생성할 수 있습니다.
//- Node 클래스를 이용하여 두 점 사이의 중점을 구하는 프로그램을 작성합니다.

public class Node {
	
	private int x; // 자바의 객치지향의 경우 보안을 중시하기 때문에 private 으로 만들어 줘야 합니다.
	private int y; // 그러므로, 외부에서 한번에 접근 할 수 없게 됩니다.
	
	// 외부에서 x 에 접근 할 수 있도록 따로 함수 를 만들어 줘야 합니다.
	public int getX() {
		return x;
	}
	
	// x의 값을 설정하기 위해 반환 값이 없는 void 형식의 setX 함수를 만들어 줍니다.
	public void setX(int x) {
		this.x = x;
	}
	
	// 외부에서  y 에 접근 할 수 있도록 따로 함수 를 만들어 줘야 합니다.
	public int getY() {
		return y;
	}
		
	// x의 값을 설정하기 위해 반환 값이 없는 void 형식의 setX 함수를 만들어 줍니다.
	public void setY(int y) {
		this.y = y;
	}

	// 생성자를 만듭니다. 생성자는 클래스와 동일한 이름을 가지고 있습니다.
	// x 와 y 의 값을 초기화 합니다.
	public Node(int x, int y) {
		this.x = x;
		this.y = y;
	}
	
	//x 좌표의 정중앙값, y좌표의 정중앙 값을 반환하는 함수를 생성합니다.
	// 반환형으로 Node를 넣어 줍니다.
	public Node getCenter(Node other) {
		return 	new Node((this.x + other.getX()) / 2, (this.y + other.getY()) / 2);
	}
}
