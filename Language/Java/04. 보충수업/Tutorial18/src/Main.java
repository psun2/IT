
public class Main extends Player{

	public static void main(String[] args) {
 
		String songName = "뜨래요 - 배치기";
		
		Main main = new Main();
		main.play(songName);
		main.pause();
		main.stop();

	}

	@Override
	void play(String songName) {
		
		System.out.println(songName + " 곡을 재생합니다.");
		
	}

	@Override
	void pause() {
		
		System.out.println("곡을 일시정지 합니다.");
		
	}

	@Override
	void stop() {
		
		System.out.println("곡을 정지 합니다.");
		
	}

}
