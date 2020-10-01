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
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    console.log(habit);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count =
      habits[index].count <= 0 ? 0 : habits[index].count - 1;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => habit.id !== item.id);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = [...this.state.habits].reduce((acc, cur, index) => {
      cur.count = 0;
      acc.push(cur);
      return acc;
    }, []);
    this.setState({ habits });
  };

  handleAdd = (text) => {
    const habits = [...this.state.habits];
    const newData = {
      id: habits[habits.length - 1].id + 1,
      name: text,
      count: 0,
    };
    habits.push(newData);
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar habits={this.state.habits} />
        <Habbits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default App;
