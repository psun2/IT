let count = 0; // 타입스크립트를 쓴다고 해서 무조건 뒤에 :자료형 을 붙이는 것이 아닙니다.
count += 1;
// count = '문자열'; // number타입의 변수에 문자열을 넣을시 에러
// 컴파일시 컴파일이 안되는 것은 아니지만 js 파일로 변경되는 순간 error 이 아닙니다.

const message: string = 'hello world';
const done: boolean = false;
const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];
// message.push(1); // 문자열 배열에 숫자 push 시 에러
// 컴파일시 컴파일이 안되는 것은 아니지만 js 파일로 변경되는 순간 error 이 아닙니다.

let mightBeUndefined: string | undefined = undefined;
mightBeUndefined = '문자열';

let nullableNumber: number | null = null;
nullableNumber = 10;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
// color = 'green'; // 목록에 없는 문자열 에러
// 컴파일시 컴파일이 안되는 것은 아니지만 js 파일로 변경되는 순간 error 이 아닙니다.

//--------------------------------function------------------------------------------------

// function sum(x: any, y:any) { // any => 어떠한 타입이든 받을 수 있음
function sum(x: number, y: number): number {
  // :number 함수의 return 결과 물의 type 설정
  //   return '악~'; // error
  return x + y;
}

const result = sum(1, 2); // sum 의 값을 반환 받는 result 의 type은 예측이 됩니다.

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

function returnNothing(): void {
  console.log('void');
}

returnNothing();

function returnStringOrNumber(): string | number {
  return '문자열';
  return 7;
}

const functionResut = returnStringOrNumber();
console.log(functionResut);

//--------------------------------interface------------------------------------------------

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  // radius: number;

  // constructor(radius: number) {
  //   this.radius = radius;
  // }

  constructor(public radius: number) {
    // 맴버 변수 자동 등록
    // public, private 는 ts 에서 제한을 둘수 있지만,
    // 자바스크립트로 변환 되면 의미가 없습니다....
  }

  getArea() {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}

class Ractangle implements Shape {
  // width: number;
  // height: number;

  // constructor(width: number, height: number) {
  //   this.width = width;
  //   this.height = height;
  // }

  constructor(private width: number, private height: number) {
    // 맴버 변수 자동 등록
    // public, private 는 ts 에서 제한을 둘수 있지만,
    // 자바스크립트로 변환 되면 의미가 없습니다....
  }

  getArea() {
    return this.width * this.height;
  }
}

const circle: Circle = new Circle(5);
const ractangle: Ractangle = new Ractangle(2, 5);
const shape: Shape[] = [circle, ractangle];

shape.forEach((shape) => {
  console.log(shape.getArea());
});

interface Person {
  name: string;
  age?: number; // 있을 수도 있고 없을 수 도 있습니다.
}

interface Developer extends Person {
  // 인터페이스의 상속
  name: string;
  age?: number;
  skills: string[];
}

const person: Person = {
  name: '김사람',
  // 아 interface 가 object 의 형식으로도 사용 가능 하구나...
  // 클래스는 결국 object 를 만들어서 두 자료형은 호환이 되나 ?

  // age 가 있거나, 또는 없거나 오류가 나지 않습니다.

  // skills: ['javascript']; // interface 에 존재 하지 않는 필드명은 생성 할 수 없습니다.
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react', 'typescript'],
};

//--------------------------------Type Alias------------------------------------------------

type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  // Person 상속
  name: string;
  age?: number;
  skills: string[];
};

const person: Person = {
  name: '김사람',
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react', 'typescript'],
};

// interface 에선 불가능 한 작업을 할 수 있습니다.
type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'orange';
// const color: Color = 'green'; // error

//--------------------------------Generics------------------------------------------------
function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2 });
// Generics 를 사용하면 실제 파라미터의 값을 유추를 해서 merged . 으로 접근할때,
// 안에 무엇이 들어 있는지 볼 수 있습니다.

// 파라 미터로 들어오는 param 의 type 이 정해져 있지 않는 경우
function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);
const wrappedS = wrap('문자열');

// Generics 를 사용하면 실제 파라미터의 값을 유추를 해서 wrapped . , wrappedS . 으로 접근할때,
// 안에 무엇이 들어 있는지 볼 수 있습니다.

// interface 에서의 Generics
interface Items<T, V> {
  list: T[];
  value: V;
}

const imtes: Items<string, number> = {
  list: ['a', 'b', 'c'],
  value: 1,
};

// Type Alias 에서의 Generics
type Items2<T, V> = {
  list: T[];
  value: V;
};

const imtems2: Items2<number, string> = {
  list: [1, 2, 3],
  value: 'hello',
};

// Class 에서의 Generics
class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (queue.length > 0) {
  console.log(queue.dequeue());
}
