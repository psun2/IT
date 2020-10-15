아래의 예제는 클로저와 관련해서 자주 언급되는 예제다. 

새창으로 열기

var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
함수가 함수 외부의 컨텍스트에 접근할 수 있을 것으로 기대하겠지만 위의 결과는 아래와 같다.


위의 코드는 아래와 같이 변경해야 한다.


var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}
결과는 아래와 같다.


클로저 참고
https://developer.mozilla.org/ko/docs/JavaScript/Guide/Closures
http://ejohn.org/apps/learn/#48
http://blog.javarouka.me/2012/01/javascripts-closure.html