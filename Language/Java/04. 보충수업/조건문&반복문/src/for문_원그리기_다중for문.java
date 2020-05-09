
public class for문_원그리기_다중for문 {

	final static int R = 15;
	
	public static void main(String[] args) {
		
//		for문을 이용하여 원을 출력하는 프로그램을 작성해봅시다.
		//원의 방정식 : x^2 + y^2 = r^2
		
		for(int i = -R; i <= R; i++) {
			for(int j = -R; j <=R; j++) {
				if(i * i + j * j <= R * R) {
					System.out.print("●");
				} else {
					System.out.print("○");
				}
				
			}
			System.out.println();
		}

	}

}
