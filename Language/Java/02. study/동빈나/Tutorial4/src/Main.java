public class Main {
	
	final static int SECOND = 1000;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		- 초를 입력 받아 몇 분 몇 초인지 계산하는 프로그램을 작성해봅시다.
		int minute = SECOND / 60; // SECOND 를 나눈 몫 을 가짐!
		int second = SECOND % 60; // SECOND 를 나눈 나머지 를 가짐!
		
		System.out.println(minute + "분" + second + "초");
		// 16분40초
		
//		- ++ 와 -- 증감연산의 개념을 바르게 이해하고 프로그램을 작성해 봅시다.
		int a = 10 ;
		System.out.println("현재의 a는" + a + "입니다.");
		// 현재의 a는10입니다.
		a++;
		System.out.println("현재의 a는" + a + "입니다.");
		// 현재의 a는11입니다.
		System.out.println("현재의 a는" + ++a + "입니다.");
		// 현재의 a는12입니다.
		System.out.println("현재의 a는" + a++ + "입니다.");
		// 현재의 a는12입니다.
		// 출력이 먼저 되고, 빠져나가면서 1을 더해 줍니다. 그래서 현재 a값은 13이 되었습니다.
		System.out.println("현재의 a는" + a + "입니다.");
		// 현재의 a는13입니다.
		// 위 의 말대로 현재 a의 값은 13이 되었네요.!!
		
//		- % 연산자의 사용법을 숙지하고 프로그램을 작성해봅시다.
		System.out.println(1 % 3); // 1   => 1을 3으로 나눈 나머지가 나온다.
		System.out.println(2 % 3); // 2   => 2를 3으로 나눈 나머지가 나온다.
		System.out.println(3 % 3); // 0   => 3을 3으로 나눈 나머지가 나온다.
		System.out.println(4 % 3); // 1   => 4를 3으로 나눈 나머지가 나온다.
		System.out.println(5 % 3); // 2   => 5를 3으로 나눈 나머지가 나온다.
		System.out.println(6 % 3); // 0   => 6을 3으로 나눈 나머지가 나온다.
		
		System.out.println(1 / 3); // 0   => 1을 3으로 나눈 몫이 나온다. (0.33...)
		System.out.println(2 / 3); // 0   => 2를 3으로 나눈 몫이 나온다. (0.66...)
		System.out.println(3 / 3); // 1   => 3을 3으로 나눈 몫이 나온다. (1)
		System.out.println(4 / 3); // 1   => 4를 3으로 나눈 몫이 나온다. (1.33...)
		System.out.println(5 / 3); // 1   => 5를 3으로 나눈 몫이 나온다. (1.66...)
		System.out.println(6 / 3); // 2   => 6를 3으로 나눈 몫이 나온다. (2)
		
//		- ==, >, <, &&, ||, ! 연산자의 개념을 바르게 이해하고 프로그램을 작성해봅시다.
		int b = 50;
		int c = 50;
		
		System.out.println("b와 c가 같은가요?" + (b == c));
		// b와 c가 같은가요?true
		System.out.println("b가 c보다 큰 가요?" + (b > c));
		// b가 c보다 큰 가요?false
		System.out.println("b가 c보다 작은 가요?" + (b < c));
		// b가 c보다 작은 가요?false
		System.out.println("b가 c와 같으면서 b가 30보다 큰 가요?" + ((b == c) && (b > 30)));
		// b가 c와 같으면서 b가 30보다 큰 가요?true
		System.out.println("b가 50이 아닌가요?" + !(b==50));
		// b가 50이 아닌가요?false
		
//		- '조건 ? 참 : 거짓' 연산자의 형태를 숙지하고 프로그램을 작성해봅시다. (삼항 연산자)
		//92번 줄 에 정의 되어있는 함수 참고
		int x = 50;
		int y = 60;
		
		System.out.println("최대 값은" + max(x,y) + "입니다.");
		// 최대 값은60입니다.
		
//		- pow()를 이용한 거듭제곱 연산 프로그램을 작성해봅시다.
		double powTest = Math.pow(3.0, 20.0);
		System.out.println("3의 20제곱은" + (int) powTest + "입니다.");
		// 3의 20제곱은2147483647입니다.
		
//		i++ 와 ++i 의 비교
		int i = 20;
		System.out.println(i); // 20
//		System.out.println(100<i<200); // 오류 문법
		System.out.println((100 < i) && (i < 200)); // flase
		System.out.println((100 < i) || (i < 200)); // true
		
		int test = 20;
		test++;
		System.out.println(test); // 21
		
		int test2 = 20;
		test2 = test2 + 1; // 우항을 좌항에 대입한다는 의미!! 수학과는 다름!
		System.out.println(test2); // 21
		
		int test3 = 20;
		test3 += 1; // test2와 같은 결과 발생 test2 와 같은 식이다.
		System.out.println(test3); // 21
		
//		i = i + 1; === i += 1;
	}
	
	// 함수의 생성은 메인 함수의 밖에서 이루어 진다.
	// 따라서 클래스 내부에 작성해준다.
	// 반환형, 함수 이름, 매개 변수
	static int max(int a, int b) {
		int result = (a > b) ? a : b;
		return result;
	}

}