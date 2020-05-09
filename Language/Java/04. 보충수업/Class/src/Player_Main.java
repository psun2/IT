//		추상(Abstract)
//		자바에서는 일종의 미완성의 클래스라고 할 수 있는 추상(Abstract) 클래스를 제공합니다. 
//		추상클래스는 직접적으로 객체 인스턴스를 생성할 수 없습니다.
//		하지만 새로운 클래스를 작성하는데 밑바탕이 되는 역할을 해준다는 것에서 의미가 있습니다. 
//		어느 정도 미리 설계로서 틀을 갖추고 클래스를 작성할 수 있게 한다는 기능적인 측면에서 의미가 있습니다.

//		추상(Abstract)
//		추상 클래스를 사용하려면 꼭 상속을 받아야 하며 상속받은 모든 추상 메소드는 반드시 구현을 해주어야 합니다.

// abstract : 추상화 
// abstract 로 추상화 클래스를 선언 합니다.
// 추상화 클래스란 ? 공통적인 부분만을 모아서 기본적인 구조(?) 틀(?) 을 만드는 역할을 합니다.

// 예를들어, 자동차 클래스들 만든다는 가정하에.. 어떠한 자동차 이던
// 바퀴는 존재할 것이고, 사이드미러, 룸미러 등 공통적인 부분을 따로 이름만 정의 해놓는 것이 
// 추상화 클래스입니다.

//- 추상의 개념을 이용하여 음악 플레이어 클래스를 구현합니다.

public class Player_Main extends Player{
//	추상화 클래스를 상속 받으면 오류 메세지가 나타납니다.
//	Add unimplemented methods
//	구현되지 않은 메소드 추가
//	즉, 추상화 클래스에서 내용없이 만든 메소드의 내용을 채워 정의해 줘야 합니다.

	public static void main(String[] args) {
		
		Player_Main main = new Player_Main();
//		main 클래스에서 추상화 클래스를 바로 상속 받았으므로, 객체를 생성후
//		사용해야 합니다.
		main.play("Joakim karud - mighty Love");
		main.pause();
		main.stop();

	}

	@Override
	void play(String songName) {
		
		System.out.println(songName + " 음악이 재생됩니다. ");
		
	}

	@Override
	void pause() {
		
		System.out.println("음악이 일시정지 됩니다.");
		
	}

	@Override
	void stop() {
		
		System.out.println("음악이 정지 됩니다.");
		
	}


}
