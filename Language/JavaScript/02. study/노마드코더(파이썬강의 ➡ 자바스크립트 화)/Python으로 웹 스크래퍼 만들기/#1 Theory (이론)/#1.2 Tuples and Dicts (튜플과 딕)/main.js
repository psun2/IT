// FIXME:TODO: #1.2 Tuples and Dicts (튜플과 딕)

// TODO: Tuples;
days_list = ['Mon', 'Tue', 'Web', 'Thur', 'Fri'];

// # Tuples 는 list(배열) 과는 다르게 변경이 불가능 합니다.
// days_tuples = ("Mon", "Tue", "Web", "Thur", "Fri")
// # list(배열) 은 [] 로 감싸주는 반면 tuples 는 () 로 감싸 줍니다.
// print(type(days_list)); # <class 'list'>
// print(type(days_tuples)); # <class 'tuple'>

// # Tuples은 값의 변경이 불가능한 list 입니다.
// # 즉 변수 가 아닌 상수 입니다.

// TODO: dictionary = js의 Object

// name = 'Nico';
// age = 29;
// korean = True;
// fav_Food = ['kimchi', 'Sashimi'];

// nico = {
//   name: 'Nico',
//   age: 29,
//   korean: True,
//   fav_Food: ['kimchi', 'Sashimi'],
// };

// print(type(nico)); # <class 'dict'>
// print(nico);
// # {'name': 'Nico', 'age': 29, 'korean': True, 'fav_Food': ['kimchi', 'Sashimi']}
// print(nico["name"]); # Nico
// print(nico["fav_Food"]); # ['kimchi', 'Sashimi']
// nico["handsome"] = True;
// print(nico);
// # ['kimchi', 'Sashimi']
// # {'name': 'Nico', 'age': 29, 'korean': True, 'fav_Food': ['kimchi', 'Sashimi'], 'handsome': True}
// print(nico["handsome"]); # True

name = 'Nico';
age = 29;
korean = true;
fav_Food = ['kimchi', 'Sashimi'];

const nico = {
  name: 'Nico',
  age: 29,
  korean: true,
  fav_Food: ['kimchi', 'Sashimi'],
};

console.log(nico);
// {name: "Nico", age: 29, korean: true, fav_Food: Array(2)}
console.log(nico.name); // Nico
console.log(nico['name']); // Nico
console.log(nico[name]); //

nico.handsome = true;
console.log(nico);
// {name: "Nico", age: 29, korean: true, fav_Food: Array(2), handsome: true}
console.log(nico.handsome); // true
console.log(nico['handsome']); // true

nico['height'] = '160cm';
console.log(nico);
// {name: "Nico", age: 29, korean: true, fav_Food: Array(2), handsome: true, height: "160cm"}
console.log(nico.height); // 160cm
console.log(nico['height']); // 160cm
