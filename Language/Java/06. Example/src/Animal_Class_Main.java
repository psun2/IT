//		클래스
//		객체 지향의 기본
//		클래스는 객체 지향 프로그래밍에 있어서 가장 기본이 되는 것입니다.
//		클래스를 이용하여 현실 세계의 특정한 물건을 지칭할 수 있습니다.
//		가장 대표적으로 많이 사용되는 것이 Node 클래스 입니다.
//		이는 하나의 장소나 위치를 의미할 수도 있으며 자료구조에서
//		말하는 이진 탐색 트리의 하나의 서브 트리가 될 수 있습니다.
//		또한 개발 프로젝트에서는 종종 Student 클래스와 같이 
//		하나의 처리할 데이터 단위를 명시 하는데 사용이 됩니다.

public class Animal_Class_Main {

	public static void main(String[] args) {
		
		// 강아지의 이름, 울음소리, 나이를 차래대로 입력해주세요
		Animal_Class_Example Dog = new Animal_Class_Example("멍멍이", "멍멍!", 3);
		
		// 고양이의 이름, 울음소리, 나이를 차래대로 입력해주세요
		Animal_Class_Example Cat = new Animal_Class_Example("고양이", "야~오오옹", 2);
		
		System.out.println(Dog.getName());

	}

}
