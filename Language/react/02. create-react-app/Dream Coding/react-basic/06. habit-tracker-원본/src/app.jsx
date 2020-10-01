import React from 'react';
import './app.css';
import Habbits from './component/habits';
import Navbar from './component/navbar';

class App extends React.Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Conding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    console.log(habit);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    // ❗❗ PureComponent 사용을 위한 변경 ❗❗
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) return { ...habit, count: habit.count + 1 };
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    console.log(habit);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count =
    //   habits[index].count <= 0 ? 0 : habits[index].count - 1;

    // ❗❗ PureComponent 사용을 위한 변경 ❗❗
    const habits = this.state.habits.map((item) => {
      if (item.ud === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => habit.id !== item.id);
    this.setState({ habits });
  };

  handleTatalCount = () => {
    return this.state.habits.filter((item) => item.count > 0).length;
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    console.log('add : ', habits);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) return { ...habit, count: 0 };
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar totalCount={this.handleTatalCount()} />
        <Habbits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
