type Person = {
  name: string;
  age?: number; // ? 있을 수 도 있고 없을 수 도 있다는 의미 입니다.
};

type Developer = Person & {
  // Person 상속
  name: string;
  age?: number; // ? 있을 수 도 있고 없을 수 도 있다는 의미 입니다.
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
