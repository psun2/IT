// TODO: 본 설명은 매번 전단계의 학습을 요구합니다.
// TODO: 검색 => call

// TODO: 객체 생성자로 상속받아 새로운 객체 생성자를 만드는 과정을 보여드리겠습니다.

function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
  }

Animal.prototype.cry = function() {
  console.log(this.sound);
}

function Dog(name, type, age) {
    Animal.call(this, name, "멍멍!!");
    // TODO: Animal 생성자 함수에게 요구 합니다. 
    // this를 제일 첫 인자로 넣는 것은 this 를 요구 하기 위해 this 키워드를 사용합니다.
    // TODO: this.name = name;
    // TODO: this.type = "멍멍";
    this.type = type;
    this.age = age;
    // TODO: sound 는 고정적으로 직접 입력해주었고, 부모와 마찬가지로 name 을받고,
    // TODO: 상속받은 생성자 함수 에서는 type 과 age 도 parameter로 받아 보았습니다.
}

Dog.prototype = Animal.prototype;
// TODO: 이 코드의 의미는 잘 모르겠으나, 아마도 cry 함수를 가져오는 작업이 아닐까 싶습니다.

const dog = new Dog("멍뭉이", "강아지", 5);
dog.cry(); // 멍멍!