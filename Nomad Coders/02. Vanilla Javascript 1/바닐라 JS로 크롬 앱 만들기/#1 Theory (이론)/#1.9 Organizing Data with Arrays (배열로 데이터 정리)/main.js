// TODO: #1.9 Organizing Data with Arrays (배열로 데이터 정리)

// TODO: camel case 란 ?
// 변수명을 언제나 소문자로 시작해서
// 만약에 변수명 중간에 스페이스가 필요하면, 변수명에 스페이스를 쓸수 없으니
// 스페이스 대신에 대문자를 사용합니다.
// const daysOfWeek =

const monday = 'Mon';
const tue = 'Tue';
const wed = 'Web';
const thu = 'Thu';
const fri = 'Fri';

console.log(monday, tue, wed, thu, fri); // Mon Tue Web Thu Fri

// TODO: Array
// Array는 여러 string들을 하나로 묶는 것 입니다.
// []의 의미가 Array 입니다.
// []의 사이에 무얼 넣으면 그게 Array가 됩니다.
// []의 사이엔 전시간에 공부한 데이터 타입만 들어 갈 수 있습니다. (text, true/false, number, floats)

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

console.log(daysOfWeek); // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

console.log(daysOfWeek[2]); // Wed
// TODO: 왜 3을 안쓰고 2를 쓰나요 ?
// 컴퓨터는 사람이 아닙니다.
// 그래서 0부터 세기 시작합니다.
// 월요일은 0, 화요일 1, 수요일 2, 이런식으로 읽습니다.

console.log(daysOfWeek[0]); // Mon
console.log(daysOfWeek[432]); // undefined

const something = 'Other Something';
const daysOfWeekOther = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
  54,
  true,
  'stuff',
  'lalala',
  something,
];

console.log(daysOfWeekOther);
// [
//     'Mon',    'Tue',
//     'Wed',    'Thu',
//     'Fri',    'Sat',
//     'Sun',    54,
//     true,     'stuff',
//     'lalala', 'Other Something'
// ]
