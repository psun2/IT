
public class while_반복문 {

	public static void main(String[] args) {

//		while을 이용하여 1부터 100까지의 합을 출력하는 프로그램을 작성해봅시다.
		
		int i = 1;
		int sum = 0;
		
		while(i <= 1000) {
			sum += i;
			i++;
		}
		
		System.out.println("1~1000까지의 합은 : " + sum + " 입니다.");

	}

}
