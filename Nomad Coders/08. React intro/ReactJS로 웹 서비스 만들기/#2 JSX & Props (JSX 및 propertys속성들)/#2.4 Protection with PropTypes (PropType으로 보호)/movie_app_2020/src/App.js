import React from 'react';
// import Potato from './Potato';

// TODO: component와 마찬가지로 import 해줍니다.
import PropTypes from 'prop-types';

const foodILike = [
  { id: 1, name: 'kimchi', image: 'https://placeimg.com/64/64/any', rating: 5 },
  {
    id: 2,
    name: '삼겹살',
    image: 'https://placeimg.com/64/64/any',
    rating: 4.9,
  },
  {
    id: 3,
    name: '치즈김밥',
    image: 'https://placeimg.com/64/64/any',
    rating: 4.8,
  },
  { id: 4, name: '라면', image: 'https://placeimg.com/64/64/any', rating: 5.5 },
  {
    id: 5,
    name: '돈가스',
    image: 'https://placeimg.com/64/64/any',
    rating: 4.7,
  },
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

// TODO: npm i prop-types : 전달받은 props가 내가 원하는 props인지 확인해 줍니다.
// 설치를 확인하려면 package.JSON 에서 볼 수 있습니다.

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// TODO: Food.potato = 'hel';
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  // rating: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  rating: PropTypes.number,
  // TODO: 위와 같이 작성하면, rating number 가 없어도, error 없이 작동합니다.
  // 그 이유인 즉슨 isRequired : 필수 를 생략했기 때문에 필수가 아니라는 말이여서,
  // error 없이 출력이 됩니다.
};

function App() {
  return (
    <div>
      <h1>Hello!!!!!!</h1>
      {foodILike.map((dish) => {
        return (
          <Food
            key={dish.id}
            name={dish.name}
            picture={dish.image}
            rating={dish.rating}
          />
        );
      })}

      {/* {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;
