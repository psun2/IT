// - [GitHub](https://github.com/leonardomso/33-js-concepts)
// - [Nomad Coders YouTube](https://www.youtube.com/watch?v=WHAfp-1JPMg&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=3)

// TODO:FIXME: 08. IIFE, Modules and Namespaces ( IIFE, 모듈 및 네임 스페이스)

// TODO: IIFE (Immediately-Invoked Function Expression) 즉시 호출 된 함수 표현식
console.log(
  'IIFE (Immediately-Invoked Function Expression) 즉시 호출 된 함수 표현식',
);

const secretUser = ['Nicolas', 'Lynn', 'Stevey', 'Autumn'];
console.log(secretUser);

(function () {
  const secretUser = ['Nicolas', 'Lynn', 'Stevey', 'Autumn'];
  console.log(secretUser);
})();

(() => {
  const secretUser = ['Nicolas', 'Lynn', 'Stevey', 'Autumn'];
  console.log(secretUser);
})();

// TODO: module
console.log('module');

let users = ['Nicolas', 'Lynn', 'Stevey', 'Autumn'];
console.log(users);

export const addUser = (user) => (users = [...users, user]);

export const getUsers = () => users;

// export const deleteUser = (user) =>
//   (users = users.filter((aUser) => aUser !== user));
// console.log(users);

export const deleteUser = (user) =>
  (users = users.filter((aUser) => aUser !== user));
