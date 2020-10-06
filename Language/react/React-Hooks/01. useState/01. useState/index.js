import React from 'react';

class App extends React.Component {
  state = {
    item: 1,
  };

  incrementItem = () => this.setState(this.state.item + 1);

  decrementItem = () => this.setState(this.state.item - 1);
  render() {
    return (
      <div className="App">
        <h1>useState</h1>
        <h1>Hello {this.state.item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
}
export default App;
