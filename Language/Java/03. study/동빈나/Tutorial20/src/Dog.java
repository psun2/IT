
public interface Dog {
//	Interface 의 선언은 class 대신 interface 를 적어주면 됩니다.

	abstract void crying();
	
//	public void show() {
//		System.out.println("Hello World!");
//	}
	
//	abstract class Dog(추상클래스) 는 일반 메소드에 코드를 넣어도 오류가 발생하지 않지만,
//	public interface Dog(인터페이스) 는 설계만을 하기 때문에 
//	어떠한 메소드, 함수에 코드를 넣으면 에러가 발생합니다. 
//	추상클래스는 추상화의 정도가 인터페이스보다 낮고, 
//	인터페이스는 추상화의 정도가 추상화 클래스보다 높기 때문에
//	인터페이스 안에서 어떠한 코드가 작성되는 것을 절대적으로 금기하고 있기 때문에
//	어떠한 함수가 존재 한다고만 알려줘야 합니다.
	
	public void show();
	
	public void one();
}
