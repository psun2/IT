// state : 내부적으로 가지고 있는 Data
// props : 외부에서 전달된 Data

import React from 'react';
import Habit from './habit';
import HabitAndForm from './habitAndForm';

class Habits extends React.Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    console.log('Habits');
    return (
      <div className="habits">
        <HabitAndForm onAdd={this.handleAdd} />
        <ul>
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
        <button
          className="habits-reset"
          onClick={this.props.onReset}
          type="button"
        >
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
