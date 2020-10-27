import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// import {
//   // increase,
//   // decrease,
//   increaseAsync,
//   decreaseAsync,
//   // examThunkBody,
// } from '../modules/counter';
import { increaseAsync, decreaseAsync } from '../modules/counter_redux-saga';
import Counter from '../components/Conter';
const CounterContainer = () => {
  const number = useSelector((state) => state.counter, shallowEqual);
  const dispatch = useDispatch();
  // const onIncrease = () => dispatch(increase());
  // const onDecease = () => dispatch(decrease());
  const onIncrease = () => dispatch(increaseAsync()); // dispatch 로 함수를 보냄
  const onDecease = () => dispatch(decreaseAsync()); // dispatch 로 함수를 보냄

  // 문제 없음
  // 왜 클로저 패턴으로 보내주어야 하는지 모르겠지만...
  // 클로저 패턴을 이용하여 함수를 리턴하는 함수를 만들길...!
  // const onIncrease = () => dispatch(examThunkBody);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecease} />
  );
};

export default CounterContainer;
