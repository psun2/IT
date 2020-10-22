const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

// increaseAscnc : thunk 함수를 만들어서 반환 하는 함수
// 반환된 함수를 thunk 함수 라고 합니다.

export const decreaseAsync = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

// 문제 없음
// 왜 클로저 패턴으로 보내주어야 하는지 모르겠지만...
// 클로저 패턴을 이용하여 함수를 리턴하는 함수를 만들길...!
export const examThunkBody = (dispatch, getState) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
