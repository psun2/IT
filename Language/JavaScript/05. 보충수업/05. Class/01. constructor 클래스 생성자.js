// TODO: 클래스의 객체 생성자는 객체생성자 함수보다 보다 간결하고, 비슷한 문법입니다.

// TODO: class 도 function 의 일종입니다. 그래서 constructor 라는 생성자 합수를 통해 생성자 함수를 생성합니다.

class Object {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(this.name);
    }
}

const person = new Object("홍길동");

person.say(); // 홍길동