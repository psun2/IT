
public class test {
	
	final static int C = 15;
	
	public static void main(String[] args) {

//		for문을 이용하여 원을 출력하는 프로그램을 작성해봅시다.
		//원의 방정식 : x^2 + y^2 = r^2
		for(int j = -C; j <= C; j++) {
			for(int k = -C; k <= C; k++) {
				if(j * j + k * k <= C * C) {
					System.out.print("★");
				} else {
					System.out.print(" ");
				}
			}
			System.out.println();
		}
		
	}

}
