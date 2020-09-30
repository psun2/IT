import React from 'react';
import logo from './logo.svg';
import './App.css';
import Food from './component/Food';
// TODO: npm i prop-type
import PropTypes from 'prop-types';

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
// };
// Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `Food`, expected `string`.
// Food.name 이 string 형식인데 왜 number을 주었느냐....

// const foodArray = [
//   { id: 1, name: 123, image: 'https://placeimg.com/64/64/1' },
//   { id: 2, name: '비빔밥', image: 'https://placeimg.com/64/64/2' },
//   { id: 3, name: '라면', image: 'https://placeimg.com/64/64/3' },
//   { id: 4, name: '돈가스', image: 'https://placeimg.com/64/64/4' },
//   { id: 5, name: '치즈김밥', image: 'https://placeimg.com/64/64/5' },
// ];

// function handleFood(list) {
//   console.log(list.image);
//   return <Food key={list.id} name={list.name} picture={list.image} />;
// }

// function App() {
//   return <div id="App">{foodArray.map(handleFood)}</div>;
// }

// TODO: state를 사용하기 위해선 class 형 컴포넌트를 사용해야합니다.
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor : 랜더링 되기전 실행됩니다.');
  }
  // TODO: state 는 Object 입니다.
  state = {
    count: 0,
  };

  add = () => {
    console.log('add');
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  minus = () => {
    console.log('minus');
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  init = () => {
    console.log('init');
    this.setState({ count: 0 });
  };

  componentDidMount() {
    console.log('componentDidmount : 랜더링이 끝나고 실행됩니다.');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate : component가 업데이트시 실행됩니다.');
    console.log(
      'button클릭으로 인해 event함수가 먼저 호출되고, 랜더링이 진행된 다음에 실행되는 부분입니다.',
    );
  }

  componentWillUnmount() {
    console.log(
      'componentWillUnmount : 컴포넌트가 죽을때 실행됩니다. 즉 페이지를 옴길때 실행됩니다.',
    );
  }

  render() {
    console.log('rendering');
    return (
      <div>
        <h1>The Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.init}>Inut</button>
      </div>
    );
  }
}

export default App;
