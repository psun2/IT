
public class Node2 {

//	변수를 외부에서 접근 하지 못하게 private 형식으로 생성 합니다.
	private int x;
	private int y;
	
//	생성자(constructor) 을 생성하여 변수를 초기화 합니다.
	public Node2(int x, int y) {
		this.x = x;
		this.y = y;
	}
	
//	외부에서 x 변수에 접근을 허용하는 getX함수를 생성하고 반환값을 x로 해줍니다.
//	get 함수는 인자를 받을 수 없습니다.
	public int getX() {
		return x;
	}
	
//	내부의 x값을 변경 할 수 있는 set 함수를 생성합니다.
//	set함수는 내부의 값을 변경시킬뿐 반환되는 값이 없음으로 void 로 생성합니다.
	public void setX(int x) {
		this.x = x;
	}
	
	public int getY() {
		return y;
	}
	
	public void setY(int y) {
		this.y = y;
	}
	
//	x, y 좌표를 입력받아 중앙 좌표를 출력하는 함수를 생성합니다.
	public Node2 getCenter(Node2 other) {
		return new Node2((this.x + other.getX()) / 2, (this.y + other.getY()) / 2);
	}
}
