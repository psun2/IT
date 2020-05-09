
//public class Main_Parent extends Parent{
//부모 클래스인 Parent 클래스에 final 키워드를 추가해줌으로써, 
//상속 받을 수 없는 클래스가 되어, 상속 받으려 할때 오류가 발생합니다.

public class Main_Parent {

//	부모 클래스의 show 함수를 
//	자식클래스에서 재정의 함으로써 
//	오버라이딩 합니다. (덮어 씌웁니다.)
//	public void show() {
//		System.out.println("World");
//	}
//	부모 클래스에서 show 함수에 final 키워드를 붙이는 순간
//	자식클래스에서 show는 더이상 오버라이딩 할 수 없습니다.
//	재정의가 불가능 합니다.
	
	public static void main(String[] args) {
		
		Main_Parent main = new Main_Parent();
		
//		main.show(); 부모클래스를 상속 받을 수 없음으로 오류가 됩니다.
//		부모의 show 메소드는 Hello 를 출력하지만,
//		자식에서 재정의 즉 오버라이딩 한 show 메소드는 World 를 출력합니다.


	}

}
