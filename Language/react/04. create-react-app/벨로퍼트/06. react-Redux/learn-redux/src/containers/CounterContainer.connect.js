import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// 액션을 만들어 반환 하는 함수
import { decrease, increase, setDiff } from '../modules/counter';

const CounterContainerConnect = ({
  number,
  diff,
  // onIncrease,
  // onDecrease,
  // onSetDiff,
  increase,
  decrease,
  setDiff,
}) => {
  return (
    <Counter
      number={number}
      diff={diff}
      // onIncrease={onIncrease}
      // onDecrease={onDecrease}
      // onSetDiff={onSetDiff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
};

const mapStateToProps = (state) => ({
  // uesSelector 의 역할을 합니다.
  number: state.counter.number,
  diff: state.counter.diff,
});

// const mapDispatchProps = (dispatch) => ({
//   // useDispatch 의 역할을 합니다.
//   onIncrease: () => dispatch(increase()),
//   onDecrease: () => dispatch(decrease()),
//   onSetDiff: (diff) => dispatch(setDiff(diff)),
// });

// 위와 같이 onIncrease 등 함수를 만들었는데,
// bindActionCreators 함수로 바인딩을 시켜주어, 연결 해 줍니다.
// const mapDispatchProps = (dispatch) =>
//   bindActionCreators(
//     {
//       increase, // 바인딩 된 함수라 어쩔 수 없이 props 에서도 이름을 변경 해 주어야 합니다.
//       decrease,
//       setDiff,
//     },
//     dispatch,
//   );

// 바인드 할 함수들을 객체형태로 변경 해준다면 ...
// bindActionCreators 이 connect 내부에서 이루어 지기 때문에
// 코드를 좀더 깔끔하게 작성 할 수 있습니다.
const mapDispatchProps = {
  increase, // 바인딩 된 함수라 어쩔 수 없이 props 에서도 이름을 변경 해 주어야 합니다.
  decrease,
  setDiff,
};

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(CounterContainerConnect);
