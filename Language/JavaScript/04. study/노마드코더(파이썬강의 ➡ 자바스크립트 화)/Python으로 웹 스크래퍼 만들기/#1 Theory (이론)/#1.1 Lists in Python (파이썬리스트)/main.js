// FIXME:TODO:  Lists in Python (파이썬리스트)

// TODO: python 과 같은방법으로 선언되지 않습니다.
(days = 'Mon'), 'Tue', 'Wed', 'Thur', 'Fri', 'Sat';
console.log(days); // Mon

// 원하는 요일의 출력은 어떻게 하나요?
day_one = 'Mon';
console.log(day_one); // Mon
// 위와 같은 방법은 않좋은 방법입니다.

// days_list = ["Mon", "Tue", "Wed", "Thur", "Fri"];
const days_list = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'];
// print(type(days_list)); # <class 'list'>
console.log(typeof days_list); // object
console.log(days_list instanceof Array); // true
// print(days_list);
// ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
console.log(days_list);
// (5) ["Mon", "Tue", "Wed", "Thur", "Fri"]
//  이제 days_list 는 더이상 string이 아닙니다.
//  list 입니다.

// TODO: 해당인자가 list 안에 포함 되어있는지 알아보는 방법
// print("Mon" in days_list); # True
// print("Man" in days_list); # False
// TODO: indexOf()
console.log(days_list.indexOf('Mon')); // 0

// print(days_list[3]); // Thur
console.log(days_list[3]); // Thur
// TODO: 왜 3번이 Wed 가 아니고, Thur 인가요?
// 컴퓨터는 숫자를 0 번부터 카운트를 합니다.
// Mon" 이 list 의 0번이 되기때문에 3번은 "Thur"이 됩니다.
// print(days_list[2]); // Web
console.log(days_list[2]); // Wed

// TODO: list의 길이(length) 를 알아보는 방법
// print(len(days_list)); // 5
console.log(days_list.length); // 5

// TODO: s.append(x) => list를 추가하는 function (append : 덧 붙이다)
// print(days_list);
// ['Mon', 'Tue', 'Wed', 'Thur', 'Fri']
// days_list.append("Sat");
// print(days_list);
// ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
// TODO: push(), unshif(); 배열의 요소 추가
console.log(days_list);
// (5) ["Mon", "Tue", "Wed", "Thur", "Fri"]
days_list.push('1');
console.log(days_list);
// (6) ["Mon", "Tue", "Wed", "Thur", "Fri", "1"]
days_list.unshift('2');
console.log(days_list);
// (7) ["2", "Mon", "Tue", "Wed", "Thur", "Fri", "1"]
// TODO: pop(), shift() 배열의 요소 삭제
console.log(days_list);
// (7) ["2", "Mon", "Tue", "Wed", "Thur", "Fri", "1"]
days_list.pop();
console.log(days_list);
// (6) ["2", "Mon", "Tue", "Wed", "Thur", "Fri"]
days_list.shift();
console.log(days_list);
// (5) ["Mon", "Tue", "Wed", "Thur", "Fri"]
// TODO: concat() 배열끼리 더하여 새로운 배열 생성
daysListSat = ['Sat'];
console.log(days_list);
// (5) ["Mon", "Tue", "Wed", "Thur", "Fri"]
const newArray = days_list.concat(daysListSat);
console.log(days_list);
// (5) ["Mon", "Tue", "Wed", "Thur", "Fri"]
console.log(newArray);
// (6) ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

// TODO: reverse() function
// days_list.reverse();
// print(days_list);
// 'Sat', 'Fri', 'Thur', 'Wed', 'Tue', 'Mon']
// TODO: reverse() 배열의 역순 정렬
console.log(days_list);
// (5) ["Mon", "Tue", "Wed", "Thur", "Fri"]
days_list.reverse();
console.log(days_list);
// (5) ["Fri", "Thur", "Wed", "Tue", "Mon"]
// TODO: sort() 배열의 정렬 함수
const numberList = [1, 2, 3, 4, 5];
console.log(numberList);
// (5) [1, 2, 3, 4, 5]
numberList.sort((a, b) => b - a);
console.log(numberList);
// (5) [5, 4, 3, 2, 1]
