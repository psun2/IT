import React from 'react';
import PropType from 'prop-type';

// TODO: function 키워드가 붙은 component를 functio Component라고 합니다.
// function App() {
//   return (
//     <div>
//       <h1>Hello!!!!!!</h1>
//       {foodILike.map((dish) => {
//         return (
//           <Food
//             key={dish.id}
//             name={dish.name}
//             picture={dish.image}
//             rating={dish.rating}
//           />
//         );
//       })}
//     </div>
//   );
// }

// TODO: state는 class형 컴포넌트에서만 사용가능 합니다.
class App extends React.Component {
  // TODO: state 는 object 입니다.
  state = {
    count: 0,
  };

  add = () => {
    console.log('add');
  };
  minus = () => {
    console.log('minus');
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
      </div>
    );
  }
}

export default App;
