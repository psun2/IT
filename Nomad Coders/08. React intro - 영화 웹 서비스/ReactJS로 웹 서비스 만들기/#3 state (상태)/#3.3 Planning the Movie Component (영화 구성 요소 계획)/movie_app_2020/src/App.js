import React from 'react';
// TODO: mount : 생겨나는 것, 태어나는 것, 살아있는 것
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // TODO: componentDidMount에서 data를 fetch 합니다.
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loding...' : 'We are ready'}</div>;
  }
}

export default App;
