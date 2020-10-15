class Animal {
    constructor(nmae, sound) {
        this.name = nmae;
        this.sound = sound;
    }
    cry() {
        console.log(this.sound);
    }
}

// TODO: 상속 받을 땐 extends 키워드를 사용 합니다.
// TODO: 클래스 상속으로 작성된 클래스는 부모 클래스의 모든 메소드를 상속합니다.

class Dog extends Animal {
    constructor(name, sound, type, age) {
        super(name, sound);
        this.type = type;
        this.age = age;
    }
}

// TODO: super의 역할 !!!
// super 키워드는 부모클래스를 호출(?) 해 부모의 인자(?) 를 요구합니다.
// 생성자 함수에서의 call 함수와 비슷 한 기능을 합니다.
// super 키워드는 부모를 직접적으로 호출하기 때문에, call 과 다르게 this 키워드를 생략합니다.
// 즉 super(name, sound)는 부모에 있는 name 과 sound 즉 this.name 과 this.sound 를 가져옵니다.

const dog = new Dog("멍멍이", "멍멍!", "강아지", 3);

dog.cry(); // 멍멍 !!
console.log(dog); // { name: '멍멍이', sound: '멍멍!', type: '강아지', age: 3 }