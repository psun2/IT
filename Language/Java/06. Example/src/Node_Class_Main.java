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

public class Node_Class_Main {

	public static void main(String[] args) {
		
		// 내가 작성한 클래스의 자료형으로 one 이라는 변수에 new 키워드를 사용해 
		// 생성자 메소드에  x, y의 좌표를 넣어 호출합니다.
		// one 라는 내가 정의한 변수의 이름과 같은 class 또 다른 클래스가 생성됩니다.
		Node_Class_Example one = new Node_Class_Example(10, 20);
		
		Node_Class_Example two = new Node_Class_Example(30, 40);
		
		// 클래스 내부에 있는 getCenter 메소드를 호출해 인자로 two class 를 사용해 호출합니다. 
		Node_Class_Example result = one.getCenter(two);
		
		System.out.println("one 와 two 의 중간 x 좌표는 : " + result.getX() + ", one 와 two 의 중간 y 좌표는 : " + result.getY() + " 입니다.");

	}

}
