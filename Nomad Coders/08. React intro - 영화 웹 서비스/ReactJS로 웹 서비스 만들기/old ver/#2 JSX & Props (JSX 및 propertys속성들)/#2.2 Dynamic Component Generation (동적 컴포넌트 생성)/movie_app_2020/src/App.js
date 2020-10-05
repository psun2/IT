import React from 'react';
// import Potato from './Potato';

const foodILike = [
  { name: 'kimchi', image: 'https://placeimg.com/64/64/any' },
  { name: '삼겹살', image: 'https://placeimg.com/64/64/any' },
  { name: '치즈김밥', image: 'https://placeimg.com/64/64/any' },
  { name: '라면', image: 'https://placeimg.com/64/64/any' },
  { name: '돈가스', image: 'https://placeimg.com/64/64/any' },
];

// function Food({ food }) {
//   return <h1>I Like {food}</h1>;
// }

// function Food(props) {
//   return (
//     <h1>
//       I Like {props.name} {props.picture}
//     </h1>
//   );
// }

function Food({ name, picture }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={picture} alt="대체텍스트" />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello!!!!!!</h1>
      {foodILike.map((dish) => {
        return <Food name={dish.name} picture={dish.image} />;
      })}
    </div>
  );
}

export default App;
