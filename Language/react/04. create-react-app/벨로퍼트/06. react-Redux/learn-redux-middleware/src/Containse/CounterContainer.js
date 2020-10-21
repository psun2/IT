import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Conter';
const CounterContainer = () => {
  const number = useSelector((state) => state.counter, shallowEqual);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecease = () => dispatch(decrease());
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecease} />
  );
};

export default CounterContainer;
