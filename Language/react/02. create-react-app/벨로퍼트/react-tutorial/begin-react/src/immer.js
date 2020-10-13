// import immer from 'immer';
// 보통 import 시 produce(생기게 하다) 라는 단어를 많이 사용합니다.
// 물론 immer 로 불러와도 상관은 없습니다.

import produce from 'immer';

console.log(produce);

const state = {
  number: 1,
  donChangeMe: 2,
};

const nextState = produce(state, (draft) => {
  draft.number += 1; // 여기서 보시다 싶이 특정 값을 바꿀때
  // 불변성을 지키지 않았지만 값을 참조 할때 state가 아닌 draft 를 참조 하여 작성합니다.
});

console.log(nextState);
// {number: 2, donChangeMe: 2}

console.log(state); // 기존의 원본 object는 변경되지 않았습니다.
// {number: 1, donChangeMe: 2}

const array = [
  { id: 1, text: 'hello' },
  { id: 3, text: 'byeo' },
  { id: 3, text: 'lalala' },
];

const nextArray = produce(array, (draft) => {
  draft.push({ id: 4, text: 'blabla' });
  draft[0].text = draft[0].text + ' world';
});

console.log(nextArray);
// (4) [{…}, {…}, {…}, {…}]
// 0: {id: 1, text: "hello world"}
// 1: {id: 3, text: "byeo"}
// 2: {id: 3, text: "lalala"}
// 3: {id: 4, text: "blabla"}
// length: 4
// __proto__: Array(0)

console.log(array); // 원본 배열을 바뀌지 않았습니다.
// (3) [{…}, {…}, {…}]
// 0: {id: 1, text: "hello"}
// 1: {id: 3, text: "byeo"}
// 2: {id: 3, text: "lalala"}
// length: 3
// __proto__: Array(0)
