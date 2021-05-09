
final class Parent {
//	public 대신 final 을 쓰면, Parent 클래스는 더이상 상속이 불가능한 클래스가 됩니다.

	public final void show() {
		System.out.println("Hello");
	}
//	메소드에 final 키워드를 붙임 으로써, 상속받는 자식클래스는
//	메소드의 오버라이딩이 불가능 합니다.
}
