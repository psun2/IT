//	인터페이스의 상속은 extends를 사용하지 않고, implements 를 사용하여 상속 받습니다.
//	extends 와 implements 는 단어만 다를뿐 역할을 똑같습니다.
//	implements (구현하다)
public class Main implements Dog, Cat{
//	추상화 클래스인 경우 : public class Main extends Dog, Cat
//					 으로 다중 상속 받으려 할때, 오류가 납니다.
//					 자바는 기본적으로 다중 상속을 못하게 합니다.
//	인터페이스 : public class Main implements Dog, Cat
//			 implements 뒤에 클래스이름을 콤마로 구분지어
//			  다중 상속을 가능하게 합니다.

	public static void main(String[] args) {

//		crying 함수와 show 함수를 사용하기 위에서는
//		메인메소드의 인스턴스를 만들어 사용 할 수 있습니다.
		
		Main main = new Main();
		main.crying();
		main.show();
		main.one();
		main.two();

	}

	@Override
	public void crying() {
		
		System.out.println("월 월 ~!");
		
	}

	@Override
	public void show() {
		
		System.out.println("Hello World!");
		
	}

	@Override
	public void one() {

		System.out.println("One!");
		
	}
	
	@Override
	public void two() {

		System.out.println("Two!");
		
	}


}
