import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

const CounterContainer = () => {
  // 여기서의 state 는 redux 의 현재 상태를 의미 합니다.
  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));

  // useSelector 부분에서 state 의 값으로 새로운 Object를 계속 생성해서
  // Todos 가 업데이트 될때마다 쓸데없이 counter container 도 같이 랜더링 됩니다.

  // 방법1. 값을 하나하나 빼옵니다.
  // 간단한 해결 방법으론 아래와 같이 하나 하나 값만 빼오는 방법이 있습니다.
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);

  // 방법2. useSelector 의 두번째 paramater 로 equalityFn 함수를 작성하여 사용 합니다.
  // const { number, diff } = useSelector(
  //   (state) => ({
  //     number: state.counter.number,
  //     diff: state.counter.diff,
  //   }),
  //   (left, right) => {
  //     return left.diff === right.diff && left.number === right.number;
  //     // 객체의 경우 하나하나 내부의 값이 같나 확인 합니다.
  //   },
  // );

  // 방법3. react-redux 의 shallowEqual 함수를 사용 하여 확인
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual,
  );
  // 여기서 주의 하실점은 shallowEqual 는 얕은 검증입니다.
  // 래퍼런싱하는 객체의 주소만을 비교 하고, 그 내부의 값의 변경을 확인 하지 못합니다.
  // 하지만 그 작업을 우리는 modules 에 있는 counter.js 에서 reducer 을 작성할때,
  // 객체의 불변성을 지키는 작업을 통해 새로운 값이 바뀐다면 새로운 객체로 바꿔 줌으로써, 해결 되었습니다.

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
