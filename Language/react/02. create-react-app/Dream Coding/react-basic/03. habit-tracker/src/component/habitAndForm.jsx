// PureComponent : porop 과 state 안에 들어 있는 데이터가
// 즉 최 상위의 데인터가 변하지 않으면, re rendering 을 하지 않습니다.

import React, { memo } from 'react';

// memo : PureComponent 와 같은 역할을 합니다.
// PureComponent 와 memo의 장점 :
// 굳이 업데이트가 되지 않아야 할 부분은 업데이트 하지 않아도 되므로
// 성능 적인 측면에서 강점이 있습니다.

const HabitAndForm = memo((props) => {
  console.log('HabitAndForm');
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();

    const name = inputRef.current.value;
    console.log(name);
    name && props.onAdd(name);
    formRef.current.reset(); // 정석
  };
  return (
    <form ref={formRef} action="" className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholde="Habit"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
});

export default HabitAndForm;
