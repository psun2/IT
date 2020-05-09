// TODO: #1.10 Organizing Data with Objects (객체로 데이터 정리)

// TODO: Array 와 Object 의 다른점
// Object에는 각 value에 이름을 줄 수 있습니다.

const nicoInfo = ['Nicolas', '55', true, 'Seoul'];

console.log(nicoInfo); // [ 'Nicolas', '55', true, 'Seoul' ]

// 누구나 nicoInfo Array에 접근 할 수 있습니다.
// 하지만, 누구나 그 Array에 담은 list가 무엇을 의미하는지 알 수 없습니다.

const parkInfo = {
  name: 'Nico',
  age: 33,
  gender: 'Male',
  isHandsome: true,
};
// Object는 실제 객체를 만드는 것 입니다.
// label을 저장하고 싶은 data에 줄 수 있습니다.

console.log(parkInfo); // { name: 'Nico', age: 33, gender: 'Male', isHandsome: true }
console.log(parkInfo.gender); // Male

// TODO: value 는 변경이 가능합니다.
parkInfo.gender = 'Female';
console.log(parkInfo.gender); // Female

// TODO: 데이터 정렬 방법.
// 1. Array
//     만약 DB에서 가져온 리스트 데이터라면, Array를 선택하고,
// 2. Object
//     근데 만약 데이터를 합쳐서 만들어야 한다면, 만약에 많은 사람들을 Array로 만든다고 한다면
//     많은 변수를 생성해서 Array를 만들어야 할 것 입니다.
//     Object안에 Array를 넣을 수 도 있습니다.

const kimInfo = {
  name: 'Nico',
  age: 33,
  gender: 'Male',
  isHandsome: true,
  favMovies: ['Along the gods', 'LOTR', 'Oldboy'],
  favFood: [
    {
      name: 'Kimchi',
      fatty: false,
    },
    {
      name: 'Cheeseburger',
      fatty: true,
    },
  ],
};

console.log(kimInfo);
// {
//     name: 'Nico',
//     age: 33,
//     gender: 'Male',
//     isHandsome: true,
//     favMovies: [ 'Along the gods', 'LOTR', 'Oldboy' ],
//     favFood: [
//       { name: 'Kimchi', fatty: false },
//       { name: 'Cheeseburger', fatty: true }
//     ]
//  }

// TODO: Javascript 문법 규칙
// Object 또는 Array 에서 ,(콤마)를 빼먹지 않습니다. (매우 중요합니다.)
// String 사용시 ''(홀따옴표) 또는 ""(따옴표) 를 꼭 사용합니다.

// TODO: JS가 오류나도 HTML/CSS 은 영향을 받지 않습니다.

console.log(kimInfo.favFood[0].fatty); // false
