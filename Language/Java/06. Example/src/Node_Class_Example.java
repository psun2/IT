//		클래스
//		객체 지향의 기본
//		클래스는 객체 지향 프로그래밍에 있어서 가장 기본이 되는 것입니다.
//		클래스를 이용하여 현실 세계의 특정한 물건을 지칭할 수 있습니다.
//		가장 대표적으로 많이 사용되는 것이 Node 클래스 입니다.
//		이는 하나의 장소나 위치를 의미할 수도 있으며 자료구조에서
//		말하는 이진 탐색 트리의 하나의 서브 트리가 될 수 있습니다.
//		또한 개발 프로젝트에서는 종종 Student 클래스와 같이 
//		하나의 처리할 데이터 단위를 명시 하는데 사용이 됩니다.

//		클래스
//		객체 지향의 기본
//		- 하나의 점을 의미하는 Node 클래스를 생성할 수 있습니다.
//		- Node 클래스를 이용하여 두 점 사이의 중점을 구하는 프로그램을 작성합니다.

public class Node_Class_Example {

	private int x ; // 자바는 보안을 중요시 하기때문에  private로 외부에서 한번에 접근할 수 없는 x좌표를 받는 변수를 선언해 줍니다.
	private int y ; // 자바는 보안을 중요시 하기때문에  private로 외부에서 한번에 접근할 수 없는 y좌표를 받는 변수를 선언해 줍니다.
	
	// new키워드를 이용해 생성할 생정자 합수를 만들어 줍니다.
	// 생성자 함수는 클래스의 이름과 똑같아야 합니다.
	// 생성자 함수는 반환형이 들어가지 않습니다.
	public Node_Class_Example(int x, int y) { 
		this.x = x; 
		this.y = y;
	}
	
	// 외부에서 변수에 접근할 수 있는 get 메소드를 생성합니다.
	// 이 함수에서의 get 메소드는 x라는 정수를 반환하기 때문에 int type을 반환형으로 사용합니다.
	// get 메소드는 read-only 이기 때문에, 인자를 받을 수 없습니다.
	public int getX() {
		return this.x;
	}
	
	// 내부의 x 값을 변경할수 있는 set 메소드를 생성합니다.
	// set 메소드는 get과는 달리 사용자의 값을 정수형태로 받아오는 int 형의 반환형이 사용되고,
	// 사용자의 값을 가져오기위해 인자 또한 받을 수 있습니다.
	public void setX(int x) {
		this.x = x;
	}
	
	public int getY() {
		return this.y;
	}
	
	public void setY(int y) {
		this.y = y;
	}
	
	// 반환형 : Node_Class_Example (내가 만든 클래스 형으로 반환 됩니다.)
	// Node_Class_Example other => Node_Class_Example 타입의 자료형의 other 이라는 인자를 받습니다.
	// 즉, 내가 만든 Node_Class_Example 타입의 메소드가 인자로 들어 옵니다.
	// 이 메소드의 other 은 main 의 two 와 같습니다.
	public Node_Class_Example getCenter(Node_Class_Example other) {
		return new Node_Class_Example((this.x + other.getX()) / 2, (this.y + other.getY()) / 2 );
	}
	
}
