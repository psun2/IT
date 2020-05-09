// FIXME:TODO: #1.12 for in (에 대한 # 1.12)

// TODO: python 코드

// days = ("Mon", "Tue", "Wed", "Thu", "Fri");

// for x in days:
//   print(x);

// # Mon
// # Tue
// # Wed
// # Thu
// # Fri

// # x는 변수 이름입니다.
// # x는 Tuple에 있는 item을 하나씩 가집니다.
// # x 변수는 for문이 실행될때 생성됩니다.
// # 변수는 작업에 요구되는 list의 item을 가집니다.

// for potato in days:
//   print(potato);

// # Mon
// # Tue
// # Wed
// # Thu
// # Fri

// for day in [1, 2, 3, 4, 5]:
//   print(day);

// # 1
// # 2
// # 3
// # 4
// # 5

// for day in days:
//   if day == "Wed":
//     break;
//   else:
//     print(day);

// # Mon
// # Tue

// for day in days:
//   if day is "Wed":
//     break;
//   else:
//     print(day);

// # Mon
// # Tue

// # TODO: String 도 list 입니다.
// for letter in "nicolas":
//   print(letter);

// # n
// # i
// # c
// # o
// # l
// # a
// # s

// TODO: 자바스크립트 코드

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

for (let i = 0; i < days.length; i++) {
  console.log(`for : ${days[i]}`);
}
// Mon
// Tue
// Wed
// Thu
// Fri

// TODO: python에서의 for in 은 list나 Tuple에서 사용 가능하나,
// 자바스크립트의 for in 은 Object에서 사용 되며,
// 배열에서는 for of 를 사용합니다.
for (let i of days) {
  console.log(`for of : ${i}`);
}
// Mon
// Tue
// Wed
// Thu
// Fri

// TODO: forEach() 는 배열의 내장함수로서, 리턴값이 존재 하지 않은채 배열을
// 순회 하는 함수 입니다.
days.forEach((current) => {
  console.log(`forEach() : ${current}`);
});
// Mon
// Tue
// Wed
// Thu
// Fri

// TODO: map() 는 배열의 내장함수로서, 리턴값이 존재하고 배열을
// 순회 하면서 새로운 배열을 만들어 리턴 시켜줍니다.
const newDaysArray = days.map((current) => {
  return current;
});
console.log(newDaysArray);
// (5) ["Mon", "Tue", "Wed", "Thu", "Fri"]
console.log(`map: ${newDaysArray}`);
// map: Mon,Tue,Wed,Thu,Fri

const newDaysArray2 = days.reduce((acc, cur) => {
  acc.push(cur);
  return acc;
}, []);
console.log(newDaysArray2);
// (5) ["Mon", "Tue", "Wed", "Thu", "Fri"]
console.log(`reduce: ${newDaysArray2}`);
// reduce: Mon,Tue,Wed,Thu,Fri

for (let i = 0; i < days.length; i++) {
  if (days[i] === 'Wed') {
    break;
  } else console.log(`for if : ${days[i]}`);
}
// for if : Mon
// for if : Tue

for (let i of days) {
  if (i === 'Wed') {
    break;
  } else {
    console.log(`for in if : ${i}`);
  }
}
// for in if : Mon
// for in if : Tue

// TODO: forEach() 함수 에서 break 를 사용시 error가 나는데,
// 뇌피셜에 의하면 forEach() 는 배열을 전체적으로 순회하는데,
// 강제적으로 break 문을 걸어주어 stop시키려고 하니 에러가 나는 듯 합니다.
// for of 나 filter를 사용합니다.
days.forEach((current) => {
  if (current === 'Wed') {
    console.log('forEach() break시 error발생');
    // break;
    // return;
  } else {
    console.log(`forEach if : ${current}`);
  }
});
// forEach if : Thu
// forEach if : Fri

// TODO: map() 함수 에서 break 를 사용시 error가 나는데,
// 뇌피셜에 의하면 map() 는 배열을 전체적으로 순회하는데,
// 강제적으로 break 문을 걸어주어 stop시키려고 하니 에러가 나는 듯 합니다.
// for of 나 filter를 사용합니다.
const newDaysArray3 = days.map((current) => {
  if (current === 'Wed') {
    console.log('map() break시 error발생');
  } else {
    return current;
  }
});
console.log(`map if : ${newDaysArray3}`);
// map if : Mon,Tue,,Thu,Fri
console.log(newDaysArray3);
// (5) ["Mon", "Tue", undefined, "Thu", "Fri"]

const newDaysArray4 = days.filter((current) =>
  current !== 'Wed' ? current : console.log('filter() break시 error발생'),
);
console.log(`filter : ${newDaysArray4}`);
// filter : Mon,Tue,Thu,Fri
console.log(newDaysArray4);
// (4) ["Mon", "Tue", "Thu", "Fri"]

const newDaysArray5 = days.reduce((acc, cur) => {
  if (cur === 'Wed') {
    console.log('map() break시 error발생');
  } else {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(`reduce : ${newDaysArray5}`);
// reduce : Mon,Tue,Thu,Fri
console.log(newDaysArray5);
// (4) ["Mon", "Tue", "Thu", "Fri"]

const daysObj = { mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri' };
for (let i in daysObj) {
  console.log(i);
  console.log(daysObj[i]);
  // console.log(daysObj.i); // undefined
  console.log(`key: ${i}, value: ${daysObj[i]}`);
}
