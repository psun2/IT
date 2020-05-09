클로저

클로저

클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다. 클로저는 자바스크립트를 이용한 고난이도의 테크닉을 구사하는데 필수적인 개념으로 활용된다.  

내부함수
자바스크립트는 함수 안에서 또 다른 함수를 선언할 수 있다. 아래의 예제를 보자. 결과는 경고창에 coding everybody가 출력될 것이다.


function outter(){
    function inner(){
        var title = 'coding everybody'; 
        alert(title);
    }
    inner();
}
outter();
위의 예제에서 함수 outter의 내부에는 함수 inner가 정의 되어 있다. 함수 inner를 내부 함수라고 한다.

내부함수는 외부함수의 지역변수에 접근할 수 있다. 아래의 예제를 보자. 결과는 coding everybody이다.


function outter(){
    var title = 'coding everybody';  
    function inner(){        
        alert(title);
    }
    inner();
}
outter();
위의 예제는 내부함수 inner에서 title을 호출(4행)했을 때 외부함수인 outter의 지역변수에 접근할 수 있음을 보여준다.