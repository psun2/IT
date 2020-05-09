//public class Archer extends Object{
//	extends Object 가 생략되어 있지만,
//	자바는 암묵적으로 extends Object 즉, Object를 상속 받고 있습니다.

public class Archer {

	String name;
	String power;
	
	public Archer(String name, String power) {
		this.name = name;
		this. power = power;
	}
	
	public boolean equals(Object obj) {
//		argument 로 받는 Object 타입의 obj를 Archer 형태로 형변환 합니다.
		Archer temp = (Archer) obj;
		if(name == temp.name && power == temp.power) {
			return true;
		} else {
			return false;
		}
	}
	
}
