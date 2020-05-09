
public class Hero {
	
	String name;
	
	public Hero(String name) {
		this.name = name;
	}

	public void print() {
		System.out.println(name);
	}
	
	public void attack() {
		System.out.println("기본공격");
	}

}
