// TODO: 본 내용에 앞서 검색 => new키워드란 생성자 함수란 을 확인 하고 오시면 한결 수월하게 나아가실 수 있습니다.

// TODO: 전단계의 과정을 진행 하셨으면, 무리 없이 따라오실수 있으며, 새로운 개념만 집고 넘어가겠습니다.

function Dog(name, sound) {
  this.name = name;
  this.sound = sound;
  this.cry = function() {
    console.log(this.sound);
  }
}

const dog = new Dog("멍멍이", "멍멍!!");
dog.cry(); // 멍멍!!

// TODO: 여기서 잠깐!!!

// TODO: 사실 객체생성자 함수 안에 cry 처럼 함수를 넣는 방법 은 
// TODO: 생성자로 객체를 생성할때마다 함수도 같이 생성되어 굉장히 비효율 적이라고 합니다.
// TODO: 그러므로, 밖으로 빼서 다른방법으로 집어 넣어주는 방법으로 바꿔 주로록하 겠습니다.

function Cat(name, sound) {
  this.name = name;
  this.sound = sound;
}

Cat.prototype.cry = function() {
  console.log(this.sound);
}

const cat = new Cat("야옹이", "야옹~야옹");
cat.cry(); // 야옹~야옹

// TODO: 차이점이 느껴지시나요 ?! 만약 내가 cry 함수를 쓰지 않을 것이라면,
// TODO: 굳이 쓸때없이, 객체를 생성 할때마다 cry 함수가 같이 생성될 필요가 있을까요?!


