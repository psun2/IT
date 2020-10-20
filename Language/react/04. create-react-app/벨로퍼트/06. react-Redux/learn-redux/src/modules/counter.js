// Ducks 패턴 사용시 접두사를 붙이는데요, 이는 다른 모듈과 action 이름이
// 중복을 방지 합니다.

// 액션 type  설정
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action 생성 함수
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// reducer 에서 관리할 초기 상태 선언
const initialState = {
  number: 0, // counter
  diff: 1, // + 또는 - 시 몇씩 증가를 나타내는 변수
};

// reducer // 모듈이름으로 reducer 을 작성합니다.
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
