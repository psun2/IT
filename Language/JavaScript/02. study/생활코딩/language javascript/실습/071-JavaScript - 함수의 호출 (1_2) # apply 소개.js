함수의 호출
2014-04-14 17:28:52
함수호출
새창으로 열기
함수에 대한 기본 수업에서 함수를 호출하는 방법을 알아봤다. 아래는 함수를 호출하는 가장 기본적인 방법이다.


function func(){
}
func();
JavaScript는 함수를 호출하는 특별한 방법을 제공한다. 본 토픽의 시작에서 함수를 객체라고 했다. 위의 예제에서 함수 func는 Function이라는 객체의 인스턴스다. 따라서 func는 객체 Function이 가지고 있는 메소드들을 상속하고 있다. 지금 이야기하려는 메소드는 Function.apply과 Function.call이다. 이 메소드들을 이용해서 함수를 호출해보자. 결과는 3이다.


function sum(arg1, arg2){
    return arg1+arg2;
}
alert(sum.apply(null, [1,2]))
함수 sum은 Function 객체의 인스턴스다. 그렇기 때문에 객체 Function 의 메소드 apply를 호출 할 수 있다. apply 메소드는 두개의 인자를 가질 수 있는데, 첫번째 인자는 함수(sum)가 실행될 맥락이다. 맥락의 의미는 다음 예제를 통해서 살펴보자. 두번째 인자는 배열인데, 이 배열의 담겨있는 원소가 함수(sum)의 인자로 순차적으로 대입된다. Function.call은 사용법이 거의 비슷하다 여기서는 언급하지 않는다.