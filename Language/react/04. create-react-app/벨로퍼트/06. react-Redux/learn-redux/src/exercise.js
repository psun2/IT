import { createStore } from 'redux';

const initialState = {
  counter: 0,
  text: '',
  list: [],
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEST = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEST,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEST:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: [...state.list, action.item],
        // list: state.list.concat(action.item),
      };
    default:
      //   throw Error(`Unhandled action type: ${action.type}`);
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

// 구독
const unsubscribe = store.subscribe(listener);

// 구독 해제
// unsubscribe();

// 구독후 dispatch 를 하게 되면 업데이트가 되는 상태가 보여 알 수 있습니다.
// 반면 구독하지 않으면 내부적으로 값은 바뀌는데, 업데이트 값을 확인 할 수 없습니다.
// 즉 확인 할때마다 계속 store.getState()를 해야합니다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요.'));
store.dispatch(addToList({ id: 1, text: '와우!' }));

// {counter: 0, text: "", list: Array(0)}
// {counter: 1, text: "", list: Array(0)}
// {counter: 0, text: "", list: Array(0)}
// {counter: 0, text: "안녕하세요.", list: Array(0)}

window.store = store;
window.unsubscribe = unsubscribe;
