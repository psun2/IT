//- 100개의 랜덤 정수의 평균을 구하는 프로그램을 작성합니다.

// array┌─────────────────┐
//　　　　　│　　│　　│　　│　　│　　│  => value
//　　　　　└─0──1───2───3──4─┘  => index


public class Main2 {

	public static void main(String[] args) {
		
		int [] array = new int[100];
		for(int i = 0; i < 100; i++) {
			array[i] = (int) (Math.random() * 100 + 1);
		}
		
		int sum = 0;
		for(int i =0; i < 100; i++) {
			sum += array[i];
		}
		
		int result = sum / 100;
		
		System.out.println("100개의 랜덤 정수의 평균 값은 : " + result + " 입니다.");
		
	}

}
