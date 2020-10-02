// PureComponent : porop 과 state 안에 들어 있는 데이터가
// 즉 최 상위의 데인터가 변하지 않으면, re rendering 을 하지 않습니다.

import React, { PureComponent } from 'react';

class HabitAndForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    // console.log('submit!!');
    // console.log(this.inputRef);
    // console.log(this.inputRef.current.value);
    // const {
    //   current: { value },
    // } = this.inputRef;
    // console.log('비구조화 할당 : ' + value);

    const name = this.inputRef.current.value;
    console.log(name);
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset(); // 정석
  };
  render() {
    console.log('HabitAndForm', 'PureComponent');
    return (
      <form
        ref={this.formRef}
        action=""
        className="add-form"
        onSubmit={this.onSubmit}
      >
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholde="Habit"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    );
  }
}

export default HabitAndForm;
