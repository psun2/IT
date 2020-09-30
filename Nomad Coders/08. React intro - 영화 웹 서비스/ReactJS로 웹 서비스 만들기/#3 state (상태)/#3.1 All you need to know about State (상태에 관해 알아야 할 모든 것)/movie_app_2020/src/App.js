import React from 'react';

// TODO: state는 class형 컴포넌트에서만 사용가능 합니다.
class App extends React.Component {
  // TODO: state 는 object 입니다.
  state = {
    count: 0,
  };

  add = () => {
    console.log('add function 실행');
    // this.state.count = 1;
    // Do not mutate state directly. Use setState().eslintreact/no-direct-mutation-state
    // 상태를 직접 변경하지 마십시오. setState (). eslintreact / no-direct-mutation-state를 사용하십시오.
    // this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    console.log('minus function 실행');
    // this.state.count = -1;
    // Do not mutate state directly. Use setState().eslintreact/no-direct-mutation-state
    // 상태를 직접 변경하지 마십시오. setState (). eslintreact / no-direct-mutation-state를 사용하십시오.
    // this.setState({ count: this.state.count - 1 });
    this.setState((current) => ({ count: current.count - 1 }));
  };

  init = () => {
    // console.log('init function 실행');
    // this.setState({ count: 0 });
    this.setState({ count: 0 }, () => console.log('init function 실행'));
  };

  render() {
    return (
      <div>
        <h1>The Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        {/* TODO: add는 함수인데 add() 표현을 안하는 이유
        항상 호출 되는 add() 와 달리 
        클릭시에만 호출이 되야하기 때문에 add라고 표현합니다. */}
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.init}>init</button>
      </div>
    );
  }
}

export default App;
