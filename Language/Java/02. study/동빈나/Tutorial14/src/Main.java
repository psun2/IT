//- 10 x 10의 정수 랜덤 데이터를 생성하여 전체 데이터를 분석합니다.

public class Main {

	public static void main(String[] args) {

		int N = 50; 
		
		int[][] array = new int[N][N];
		
		for(int i = 0; i < N; i++) {
			for(int j = 0; j < N; j ++) {
				array[i][j] = (int) (Math.random() * 10); // 0 ~ 9 의 정수
			}
		}
		
		for(int i =0; i < N; i++) {
			for(int j = 0; j < N; j++) {
				System.out.print(array[i][j] + " ");
			}
			System.out.println();
		}

	}

}
