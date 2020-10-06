import React from 'react';

class App extends React.Component {
  state = {
    number: 0,
    aNumber: 0,
  };

  sayHello = () => {
    console.log('hello');
    return 'hello';
  };

  componentDidMount() {
    // Called immediately after a component is mounted.
    // Setting state here will trigger re-rendering.

    // 컴포넌트가 마운트 된 직후 호출됩니다.
    // 여기에서 상태를 설정하면 다시 렌더링이 트리거됩니다.
    console.log('최초 컴포넌트 mount (랜더링) 시 활성화');
  }

  componentDidUpdate() {
    //  Called immediately after updating occurs.
    // Not called for the initial render.
    // The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

    // 업데이트가 발생한 직후에 호출됩니다.
    // 초기 렌더링에는 호출되지 않습니다.
    // 스냅 샷은 getSnapshotBeforeUpdate가 있고 널이 아닌 값을 리턴하는 경우에만 존재합니다.
    console.log('컴포넌트 업데이트 시 활성화');
  }

  componentWillUnmount() {
    // Called immediately before a component is destroyed.
    // Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.

    // 컴포넌트가 파괴되기 직전에 호출됩니다.
    // 취소 된 네트워크 요청 또는 componentDidMount에서 생성 된 DOM 요소 정리와 같이이 메서드에서 필요한 정리를 수행합니다.
    console.log('컴포넌트가 죽었을시 활성화');
  }

  render() {
    return (
      <div className="App">
        <h1>useEffect</h1>
        <button onClick={() => this.setState(this.state.number + 1)}>
          {this.state.number}
        </button>
        <button onClick={() => this.setState(this.state.aNumber - 1)}>
          {this.state.aNumber}
        </button>
      </div>
    );
  }
}

export default App;
