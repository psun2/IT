// FIXME:TODO: 08. IIFE, Modules and Namespaces (IIFE, 모듈 및 네임 스페이스)

const secretUsers = ['Nioolas', 'Lynn', 'Stevey', 'Autumn'];
console.log(secretUsers); // (4) ["Nioolas", "Lynn", "Stevey", "Autumn"]

secretUsers.push('Me');
console.log(secretUsers); // (5) ["Nioolas", "Lynn", "Stevey", "Autumn", "Me"]

// 위의 variable은 공개 되어 있습니다. Private가 아닙니다.
// 위 variable들은 브라우저에 있고, 접근이 가능 합니다. 하지만 이를 원하지 않을 때도 있습니다.

// TODO: IIFE (Immediately-Invoked Function Experssion) : 즉시 호출 된 함수 Experssion
(function () {
  const privateUser = ['Nioolas', 'Lynn', 'Stevey', 'Autumn'];
  console.log(privateUser);
})(); // (4) ["Nioolas", "Lynn", "Stevey", "Autumn"]

// console.log(privateUser);
// Uncaught ReferenceError: privateUser is not defined
// ReferenceError : privateUser가 정의되지 않았습니다

// TODO: IIFE 의 내부의 값은 변경이 불가능 합니다.
// privateUser.push('Me');
// Uncaught ReferenceError: privateUser is not defined
// ReferenceError : privateUser가 정의되지 않았습니다
// console.log(privateUser);
// Uncaught ReferenceError: privateUser is not defined
// ReferenceError : privateUser가 정의되지 않았습니다

// TODO: Modules
export let users = ['Nioolas', 'Lynn', 'Dal'];

export const addUser = (user) => (users = [...users, user]);

// function addUserTest(user) {
//     users = [...users, user];
// }

export const getUsers = () => users;

// function getUsersTest() {
//   users;
// }

export const deleteUser = (user) =>
  (users = users.filter((aUser) => aUser !== user));

// function deleteUserTest(user) {
//   users = users.filter(function (aUser) {
//     aUser !== user;
//   });
// }
