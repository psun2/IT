// # 객체 Object

// new Function ()

// new Object()
// Object 로 객체 만들기

// new Object
const a = new Object();
console.log(a, typeof a); // Object {} "object"

const b = new Object(true);
console.log(b, typeof b);
// Boolean {constructor: Object}
// <constructor>: "Boolean"
// name: "Boolean"
// "object" 
{
    const b = new Object('mark', 3, 'tz');
    console.log(b, typeof b);
    // String {0: "m", 1: "a", 2: "r", 3: "k", constructor: Object}
    // 0: "m"
    // 1: "a"
    // 2: "r"
    // 3: "k"
    // <constructor>: "String"
    // name: "String"
    // "object" 
}

const c = new Object({name: 'Mark'});
console.log(c, typeof c);
// Object {name: "Mark"}
// name: "Mark"
// "object" 

// 프로토타입 체인
// .prototype

// prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
      console.log("hello", this.name, this.age);
    };
  }
  
  const p = new Person("Mark", 37);
  p.hello(); // hello Mark 37
  p.toString();
  console.log(p.toString()); // [object Object]
  console.log(Person.prototype); // Object {}
  console.log(Person.prototype.toString);
  // function toString() {}
  // <constructor>: "Function"
  // name: "Function"
  console.log(Person.prototype.toString()); // [object Object]
  console.log(Person.prototype.constructor); // constructor : Person 이라는 함수 자체를 의미
  // function toString() {}
  // <constructor>: "Function"
  // name: "Function"
  console.log(Person.hello); // undefined 객체로 생성이 되어야 hello라는 함수를 사용 할 수 있다.
  console.log(Person.prototype.hello); // undefined
  console.log(Person.prototype.name); // undefined
  console.log(Person.name); // Person
  console.log(p); // Person {name: "Mark", age: 37, hello: function (), constructor: Object}
  console.log(p.name); // Mark
  console.log(p.prototype); // undefined
  
  {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
  
    Person.prototype.hello = function() {
      console.log("hello", this.name, this.age);
    };
  
    const p = new Person("Mark", 37);
    p.hello(); // hello Mark 37
  
    console.log(Object); // function Object() {}
    console.log(Object.prototype); // null
    console.log(Object.prototype.toString); // function toString() {}
    console.log(Object.prototype.constructor); // function Object() {}
    console.log(p instanceof Person); // true
    console.log(p instanceof Object); // true
  }
  