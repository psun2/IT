import { addUser, getUsers, deleteUser } from './main.js';

console.log(getUsers()); // (3) ["Nioolas", "Lynn", "Dal"]
addUser('Autumn');
console.log(getUsers()); // ["Nioolas", "Lynn", "Dal", "Autumn"]

// TODO: 브라우저는 import Export를 이해하지 못합니다.
// Uncaught SyntaxError: Unexpected token 'export'
// 잡히지 않은 구문 오류 : 예기치 않은 토큰 '내보내기'

// Uncaught SyntaxError: Cannot use import statement outside a module
// Uncaught SyntaxError : 모듈 외부에서 import 문을 사용할 수 없습니다

// 위와 같은 경우 웹팩, gulp 같은 것을 사용합니다.

{
  /* <script src=""></script> 의 property로 type="module" 속성 값을 부여합니다
<script type="module" src=""></script> 그럼 브라우저는 import 와 export를 이해 할 수 있게 됩니다.

<script type="module" src="main.js"></script>
<script type="module" src="app.js"></script> */
}

console.log(getUsers()); // (4) ["Nioolas", "Lynn", "Dal", "Autumn"]
deleteUser('Autumn');
console.log(getUsers()); // (3) ["Nioolas", "Lynn", "Dal"]
