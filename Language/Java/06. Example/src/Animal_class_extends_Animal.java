//		상속
//		클래스 간의 상호작용
//		상속이란 쉽게 말해서 다른 클래스가 가지고 있는 정보를 자신이 포함하겠다는 의미입니다. 
//		즉, 다른 클래스에 대한 정보를 상속받아 자신이 그대로 사용할 수 있도록 합니다.
//		상속을 적절히 활용할 때 불필요한 코드의 수를 줄일 수 있어서 상당히 효율적인 개발이 이루어질 수 있습니다. 

//		상속
//		클래스 간의 상호작용
//		상속을 바르게 이해하고 이를 프로그램에 적용합니다.
//		- 하나의 사람을 의미하는 Person 클래스를 생성합니다.
//		- Person을 상속받아 하나의 학생을 의미하는 Student 클래스를 의미합니다.
//		- Student 클래스를 이용하여 객체를 생성합니다.
		
//		상속이 이해가 가지 않는 다면, 
//		https://www.youtube.com/watch?v=iYW83DF6MHk&list=PLRx0vPvlEmdBjfCADjCc41aD4G0bmdl4R&index=16
//		이 동영상을 참고 하 실 것을 추천 드립니다.

public class Animal_class_extends_Animal {

	private String name;
	private int age;
	private String sound;
	
//	우클릭 => Source => Constructor using .... tab을 이용하여,
//	변수를 초기화 할 수 있는 생성자 함수를 만들 수 있습니다.
	
	public Animal_class_extends_Animal(String name, int age, String sound) {
		super();
		this.name = name;
		this.age = age;
		this.sound = sound;
	}

//	우클릭 => Source => Genarate Getter and Setter 를 이용하면,
//	set 함수와 get 함수를 모두 한번에 작성 할 수 있습니다.
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getSound() {
		return sound;
	}

	public void setSound(String sound) {
		this.sound = sound;
	}
	
	
}
