// # 함수 function

// function hello() {}
// 함수를 만들때 사용하는 키워드

// function
// 이름이 hello 인 함수를 선언
function hello1() {
    console.log("hello1");
  }
  console.log(hello1, typeof hello1);
  
  // 함수의 매개 변수
  // 함수를 호출할 때 값을 지정
  function hello2(name) {
    console.log("hello2", name);
  }
  hello2("mark");
  
  // 함수의 리턴
  // 함수를 실행하면 얻어지는 값
  function hello3(name) {
    return `hello3 ${name}`;
  }
  console.log(hello3("mark"));
  
// function
// 이름이 world1 인 함수를 선언
const world1 = function () {
    console.log('world1');
};
console.log(world1, typeof world1);

// 함수의 매개변수
// 함수를 호출할 때 값을 지정
const world2 = function (name) {
    console.log('world2', name);
}

// 함수의 리턴
// 함수를 실행하면 얻어지는 값
const world3 = function (name) {
    return `world3 ${name}`;
}

// 선언적 function 과 익명 함수를 만들어 변수에 할당
// 차이점
helloWorld1(); // 호이스팅이 되어도 정상작동 한다.
function helloWorld1 () {
    console.log('helloWorld1');
}
helloWorld1();

// helloWorld2(); // console.log(helloWorld2) 로 호출이 되어 에러 발생, helloWorld가 뭔지는 알지만 함수로 인식을 못해서 undefined로 출력
var helloWorld2 = function () { // helloWorld2 = function(){} 이렇게 인식한다. 
    console.log('helloWorld2');
}
helloWorld2();

helloWorld3(); // helloWorld3이라는 변수를 모른다 defined 선언한적 없는 변수라 생각한다.
const helloWorld3 = function () {
    console.log('helloWorld3');
}
helloWorld3();
