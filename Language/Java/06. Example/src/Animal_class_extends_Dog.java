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

public class Animal_class_extends_Dog extends Animal_class_extends_Animal {
//	상속 받을 클래스 name extends(연장하다) 키워드와 상속 할 부모 클래스(Animal_class_extends_Animal) 로 상속 받을 수 있습니다.

	private String nickName;
//	상속 받을 Dog 클래스에 nickName 변수를 추가 합니다.

//	생성자 메소드를 추가합니다.
	public Animal_class_extends_Dog(String name, int age, String sound, String nickName) {
		super(name, age, sound);
//		super 키워드로 부모 클래스의 변수를 복제(?) 해옵니다.
		this.nickName = nickName;
	}

//	getter 메소드를 추가합니다.
	public String getNickName() {
		return nickName;
	}

//	setter 메소드를 추가합니다.
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	
//	울음 소리를 출력하는 메소드를 만들어 줍니다.
	public void cry() {
		System.out.println(getSound());
	}
}
