
public class Abstract_Mian {

	public static void main(String[] args) {
	
		Abstract_Dog dog = new Abstract_Dog();
		Abstract_Cat cat = new Abstract_Cat();
//		dog 또는 cat에 추상화 클래스를 상속 받았으므로 cry라는 메소드를 사용을 하려면,
//		먼저 dog 또는 cat을 생성 해야 사용 할 수 있습니다.
		
		dog.cry(); // 멍 ! 멍 !
		cat.cry(); // 야 ~ 옹 !
	}

}
