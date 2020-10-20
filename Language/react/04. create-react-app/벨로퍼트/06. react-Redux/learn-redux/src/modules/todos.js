// Ducks 패턴 사용시 접두사를 붙이는데요, 이는 다른 모듈과 action 이름이
// 중복을 방지 합니다.

// 액션 type  설정
const ADD_TODO = 'todos/ADD_TOTO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 액션 생성함수 선언
let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    // todo 를 만들어 오는 방식이 아닌 text만 받아서 todo를 생성 해서 사용 하는 방법 채택
    id: nextId++,
    text,
  },
});
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

// 초기 상태선언
const initialState = [
  /*
        {
            id: 1,
            text: '예시',
            done: false or true
        }
    */
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    //   return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    default:
      return state;
  }
}
