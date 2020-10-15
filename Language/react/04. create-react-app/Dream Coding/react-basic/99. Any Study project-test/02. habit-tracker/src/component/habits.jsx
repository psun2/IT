// state : 내부적으로 가지고 있는 Data
// props : 외부에서 전달된 Data

import React from 'react';
import Habit from './habit';

class Habits extends React.Component {
  constructor(pops) {
    super();
  }
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleReset = () => {
    this.props.onReset();
  };

  handleAdd = (event) => {
    console.log('asd');
    event.preventDefault();
    const value = document.getElementById('value');
    this.props.onAdd(value.value);
    console.log(value);
    value.value = '';
  };

  render() {
    return (
      <>
        <ul>
          <form className="inputBox">
            <input id="value" type="text" placeholder="Habit" />
            <button type="submit" onClick={this.handleAdd}>
              Add
            </button>
          </form>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="reset" type="button" onClick={this.handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
