//interface 는 abstract 와 달리 extends 를 쓰지 않고
//implements 를 사용하여, 상속 받습니다.

public class Main implements Dog, Cat {
//public class Main extends Dog {
//	abstract 는 다중상속이 되지 않는 반면,
//	interface 는 다중상속을 가능하게 합니다.

	public static void main(String[] args) {
		
		Main main = new Main();
		main.crying();
		main.show();
		main.one();
		main.two();
		

	}

	@Override
	public void crying() {

		System.out.println("월 ~ 월!");
		
	}

	@Override
	public void show() {

		System.out.println("Hello World");
		
	}

	@Override
	public void two() {

		System.out.println("Cat.two");
		
	}

	@Override
	public void one() {

		System.out.println("Dog.one");
		
	}

}
