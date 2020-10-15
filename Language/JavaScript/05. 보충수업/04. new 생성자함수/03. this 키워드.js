// 본 내용에 모르는 개념이 있으시다면,
// 검색 => function과 method, window, 브라우저, 전역객체 를 참고 하시면 됩니다.

// TODO: this 란 무엇일까요 ?

// TODO: 저는 지금 현재 vscode를 사용 중이나, this를 표현하기엔 이 에디터가
// TODO: 맞지 않아 크롬 을키고 개발자 모드로 진행 하겠습니다.
// TODO: 꼭!! 개발자 모드에서 진행 하시길 바랍니다.

// TODO:  함수 에서의 this 와 메소드 에서의 this의 차이점을 알아 보겠습니다.

// TODO: 함수에서의 this!!!!!

function thisTest() {
    console.log(this, typeof this); // window "object"
    if (this === window) {
        console.log("this 는 window 입니다.")
    } else {
        console.log("this 는 window가 아닙니다.")
    }
}
thisTest(); // this 는 window 입니다.

// TODO: 보통의 프로그래밍 언어에서 this 키워드는 자기 자신을 가르 킵니다.
// TODO: 그렇다면 위 예제에서 this 는 당연히 thisTest라는 함수 본인을 가르켜야 됩니다.
// TODO: 하지만 자바스크립트의 함수에서 this는 전역 객체 즉 Window를 가르킵니다.

// TODO: 메소드에서의 this!!!!!

const Object = {
    thisTest: function () {
        console.log(this, typeof this); // {thisTest: ƒ}
        if (this === window) {
            console.log("this 는 window 입니다.")
        } else {
            console.log("this 는 window가 아닙니다.")
        }
    }
}
Object.thisTest(); // this 는 window가 아닙니다.

// TODO: 세번째, 줄의 console.log(); 의 결과가 보이시나요?
// TODO: this는 window가 아니고, thisTest method 를 가진 object 를 가르킵니다.
