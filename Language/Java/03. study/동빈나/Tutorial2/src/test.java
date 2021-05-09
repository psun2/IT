
public class test {

	final static int INT_MAX = 2147483647;
	// 2147483647 = int 형 자료형이 가지는 가장 큰 값
	
	public static void main(String[] args) {
	
		int a = INT_MAX;
		System.out.println(a); // 2147483647
		
		System.out.println(a + 1); // -2147483648 => 오버플로 현상
		// 오버플로 : 가장 큰 값에서 +1 을해주면 가장 작은 값으 로 돌아가는 
		// 순환되는 현상

	}

}
