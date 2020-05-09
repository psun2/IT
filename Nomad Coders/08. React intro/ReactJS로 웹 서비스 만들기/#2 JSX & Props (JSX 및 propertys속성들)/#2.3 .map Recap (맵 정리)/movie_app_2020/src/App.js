import React from 'react';
// import Potato from './Potato';

const foodILike = [
  { id: 1, name: 'kimchi', image: 'https://placeimg.com/64/64/any' },
  { id: 2, name: '삼겹살', image: 'https://placeimg.com/64/64/any' },
  { id: 3, name: '치즈김밥', image: 'https://placeimg.com/64/64/any' },
  { id: 4, name: '라면', image: 'https://placeimg.com/64/64/any' },
  { id: 5, name: '돈가스', image: 'https://placeimg.com/64/64/any' },
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
      <img src={picture} alt={name} />
    </div>
  );
}

// function renderFood(dish) {
//   console.log(dish);
//   //  Object
//   // image: "https://placeimg.com/64/64/any"
//   // name: "kimchi"
//   // __proto__: Object

//   // Object
//   // image: "https://placeimg.com/64/64/any"
//   // name: "삼겹살"
//   // __proto__: Object

//   // Object
//   // image: "https://placeimg.com/64/64/any"
//   // name: "치즈김밥"
//   // __proto__: Object

//   // Object
//   // image: "https://placeimg.com/64/64/any"
//   // name: "라면"
//   // __proto__: Object

//   // Object
//   // image: "https://placeimg.com/64/64/any"
//   // name: "돈가스"
//   // __proto__: Object

//   // {name: "kimchi", image: "https://placeimg.com/64/64/any"}
//   // {name: "삼겹살", image: "https://placeimg.com/64/64/any"}
//   // {name: "치즈김밥", image: "https://placeimg.com/64/64/any"}
//   // {name: "라면", image: "https://placeimg.com/64/64/any"}
//   // {name: "돈가스", image: "https://placeimg.com/64/64/any"}
//   return <Food key={dish.id} name={dish.name} picture={dish.image} />;
// }

function App() {
  return (
    <div>
      <h1>Hello!!!!!!</h1>
      {foodILike.map((dish) => {
        return <Food key={dish.id} name={dish.name} picture={dish.image} />;
      })}

      {/* {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;
