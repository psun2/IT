//		추상(Abstract)
//		자바에서는 일종의 미완성의 클래스라고 할 수 있는 추상(Abstract) 클래스를 제공합니다. 
//		추상클래스는 직접적으로 객체 인스턴스를 생성할 수 없습니다.
//		하지만 새로운 클래스를 작성하는데 밑바탕이 되는 역할을 해준다는 것에서 의미가 있습니다. 
//		어느 정도 미리 설계로서 틀을 갖추고 클래스를 작성할 수 있게 한다는 기능적인 측면에서 의미가 있습니다.

//		추상(Abstract)
//		추상 클래스를 사용하려면 꼭 상속을 받아야 하며 상속받은 모든 추상 메소드는 반드시 구현을 해주어야 합니다.

//		- 추상의 개념을 이용하여 음악 플레이어 클래스를 구현합니다.

abstract class Player {
//	public 대신에 abstract 를 사용하여 추상화 클래스를 생성합니다.
	
	abstract void play(String songName);
	abstract void pause();
	abstract void stop();
}
