//final 키워드는 클래스, 함수등의 값을 변경하는 것을 방지 합니다.

//Parent 클래스에 final 키워드를 붙이는 순간 상속도 불가능하게 됩니다.
//public class Main extends Parent
public class Main{
	
//	Parent 클래스에서 show 함수에 final 키워드를 붙이는 순간 바꿀수 없는 
//	함수가 되므로 오버라이딩이 불가능 합니다.
//	public void show() {
//		System.out.println("Hello");
//	}

	public static void main(String[] args) {
		
		final int number = 10;
		System.out.println(number);
		
//		number = 5;
//		System.out.println(number);
		
		Parent parent = new Parent();
		parent.show(); // hi
		
		Main main = new Main();
//		main.show(); // Hello

	}

}
