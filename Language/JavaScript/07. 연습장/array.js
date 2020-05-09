const array = [1, 2, 3, 4, 5];
const pusharray = [];
const pusharraykeys = [];
const pusharrayvalue = [];
const pusharrayall = [];
for (let i of array) {
  pusharray.push(i);
}
console.log(array);
console.log(pusharray);

const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};
const keys = [];
const value = [];
for (let i in object) {
  keys.push(i);
  value.push(object[i]);
}
for (let i in array) {
  pusharraykeys.push(i);
  pusharrayvalue.push(array[i]);
  pusharrayall.push(i);
  pusharrayall.push(array[i]);
}

console.log(object);
console.log(keys);
console.log(value);
console.log(pusharraykeys);
// ["0", "1", "2", "3", "4"] index 값
console.log(pusharrayvalue);
// [1, 2, 3, 4, 5] value 값
console.log(pusharrayall);
// ["0", 1, "1", 2, "2", 3, "3", 4, "4", 5]

const arrayforeach = [];
array.forEach(i => {
  return arrayforeach.push(i);
});

console.log(arrayforeach);
