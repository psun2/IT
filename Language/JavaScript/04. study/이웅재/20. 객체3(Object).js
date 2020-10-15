// # 객체 Object

// 프로토타입을 이용한 객체 확장
// .prototype

// prototype 상속
// 부모의 객체를 자식의 객체 어딘가에 property 로 할당하는법
function Person () {}

Person.prototype.hello = function () {
    console.log('hello');
}

function Korean (region) {
    this.region = region;
    this.where = function () {
        console.log('where', this.region)
    }
}

Korean.prototype = Person.prototype;

const k = new Korean('seoul');
k.hello(); // hello 
k.where(); // where seoul 
console.log(k);
// Person {region: "seoul", where: function (), constructor: Object}
// region: "seoul"
// where: function () {}
// <constructor>: "Function"
// <constructor>: "Person"
// name: "Person"
console.log(k instanceof Korean); // true
console.log(k instanceof Person); // true
console.log(k instanceof Object); // true

// 객체 리터럴
const a = {};
console.log(a, typeof a);

const b = {
    name: 'Mark',
};
console.log(b, typeof b);

const c = {
    name: "mark",
    hello1() {
      console.log("hello1", this);
      console.log("hello1", this.name);
    },
    hello2: function() {
      console.log("hello2", this);
      console.log("hello2", this.name);
    }
    // hello3 = () => { // 맞지 않는 문법
    //     console.log('hello3', this);
    // },
    //   hello4: () => {
    //       console.log('hello4', this.name); // arrow 함수는 this를 접근 하지 못한다.
    //   }
  };
  
  console.log(c);
  // Object {name: "mark", hello1: function hello1(), hello2: function hello2()}
  // name: "mark"
  // hello1: function hello1() {}
  // <constructor>: "Function"
  // name: "Function"
  // hello2: function hello2() {}
  // <constructor>: "Function"
  // name: "Function"
  
  c.hello1();
  // hello1
  // Object {name: "mark", hello1: function hello1(), hello2: function hello2()}
  // name: "mark"
  // hello1: function hello1() {}
  // <constructor>: "Function"
  // name: "Function"
  // hello2: function hello2() {}
  // <constructor>: "Function"
  // name: "Function"
  // hello1 mark
  
  c.hello2();
  // hello2
  // Object {name: "mark", hello1: function hello1(), hello2: function hello2()}
  // name: "mark"
  // hello1: function hello1() {}
  // <constructor>: "Function"
  // name: "Function"
  // hello2: function hello2() {}
  // <constructor>: "Function"
  // name: "Function"
  // hello2 mark