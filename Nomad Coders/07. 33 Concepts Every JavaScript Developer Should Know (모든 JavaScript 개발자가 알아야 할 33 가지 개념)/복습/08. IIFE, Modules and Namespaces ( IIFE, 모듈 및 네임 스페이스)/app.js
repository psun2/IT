import { addUser, getUsers, deleteUser } from './main.js';

console.log(getUsers());
addUser('Park');
console.log(getUsers());
deleteUser('Park');
console.log(getUsers());
