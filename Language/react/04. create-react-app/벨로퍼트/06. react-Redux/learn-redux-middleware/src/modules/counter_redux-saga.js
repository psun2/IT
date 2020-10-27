import {
  delay,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
  yield delay(1000); // 1초 딜레이
  yield put(increase()); // put은 dispatch 의 역할을 합니다.
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // yield takeLatest(DECREASE_ASYNC, decreaseSaga);
  // takeLatest: 가장 마지막에 있는 async 만 처리 하게 됩니다.
  // delay 로 걸어둔 1초를 대기 하는 과정에서 새로운 것 이 들어온다면,
  // 기존의 것 은 무시하고 가장 마지막으로 온 것 만 처리 합니다.

  yield takeLeading(DECREASE_ASYNC, decreaseSaga);
  // 가장 먼저 들어 온 것을 처리하고 처리할때까지 기달렸다가,
  // 다음을 실행 합니다.

  // takeEvery, takeLatest, takeLeading 의 차이점을 알아 보시려면  + 와 - 를 연속적으로
  // 눌러보면 그 차이가 확연해 집니다.
}

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
