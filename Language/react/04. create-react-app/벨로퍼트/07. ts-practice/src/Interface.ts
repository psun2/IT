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
