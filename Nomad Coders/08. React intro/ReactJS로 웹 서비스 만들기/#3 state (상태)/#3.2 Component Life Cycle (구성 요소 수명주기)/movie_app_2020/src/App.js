import React from 'react';

class App extends React.Component {
  // TODO: component가 mount될 때, component가 screen에 표시될 때,
  // component가 너의 Website에 갈 때, constructor를 호출합니다.
  // 다음으로 render을 호출하고
  // component가 render할 때 componentDidMount
  // constructor(props) {
  //   super(props);
  //   console.log('hello');
  // }
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log('Component rendered');
  }
  componentDidUpdate() {
    console.log('I just updated');
  }
  componentWillUnmount() {
    console.log('Goodbye Cruel World');
  }
  // TODO: component가 생성 될때, render 전에 호출되는 몇가지 function이 있습니다.
  // componrnt가 render 된 후, 호출되는 다른 function들이 존재합니다.
  // 예를 들어 add button을 눌러 add 함수를 호출시킬때
  // 즉 component가 update 될때, 호출되는 다른 function이 존재합니다.
  // TODO: Mounting : 태어나는 것과 같습니다.
  // TODO: Updating : 일반적인 업데이트를 의미합니다.
  // TODO: Unmounting : component가 죽는 것을 의미합니다.
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
