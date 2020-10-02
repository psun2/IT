// state : 내부적으로 가지고 있는 Data
// props : 외부에서 전달된 Data

import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  constructor(props) {
    super();
  }

  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmiunt`);
  }

  handleIncrement = (event) => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = (event) => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    console.log('Habit');
    console.log(this.props.habit);
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
