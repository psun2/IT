import React, { Children } from 'react';
// TODO: .(dot) 와 /(슬레시) 의 의미는 같은 directory라는 의미입니다.
// Potato.js 와 App.js 는 같은 directory 에 있습니다. 맞습니까 ? yes
// import Potato from './Potato';

// TODO: JSX 의 두번째 이해
// component 에 정보를 보낼 수 있습니다.
// react의 장점은 재사용 가능한 component를 만들 수 있고,
// 즉 component를 계속 반복해서 사용할 수 있습니다.
// TODO: component 에서 component로, Children component로 정보를 보내는 방법

// TODO: component의 props 를 사용하기 위해선, argument로 props를 받습니다.
// function Food(props) {
//   console.log(props); // {fav: "kimchi"}
//   // TODO: argument 로 받은 props 는 Object 의 형태로 받습니다.
//   console.log(props.fav); // kimchi
//   return <h1>I like Potato</h1>;
// }

// TODO: props의 value를 argument로 전달하는 방법
function Food({ favourite }) {
  // TODO: { favourite } = Object 내부에 있는 fav를 가져 옵니다.

  console.log(favourite); // kimchi

  // TODO: props.favourite 와 ({favourite})
  // console.log(props.favourite); // kimchi
  // console.log(favourite); // kimchi
  // 값이 정확히 일치합니다.

  // return <h1>I like Potato</h1>; // I like Potato
  return <h1>I like {favourite}</h1>; // I like kimchi
}

// TODO: component 란 ?
// component 는 HTML을 반환하는 함수 입니다.
// react는 component를 사용해서 HTML 처럼 작성하려는 경우에 필요합니다.
// JavaScript 와 HTML 사이의 이러한 조합을 jsx라고 부릅니다.
function App() {
  // TODO: 이 곳을 수정하면, 브라우저에 그려집니다.
  return (
    <div>
      <h1>Hello!!!!!!</h1>
      {/* TODO: <Food name="kimchi" /> 은 <div class="kimchi"></div> 와 일치하는 jsx 문법입니다. */}
      {/* <Food name="kimchi" /> */}
      {/* TODO: <Food name="kimchi" />
      Food component에 kimchi라는 value 로 props nmae을 준 행위 입니다. */}
      {/* 즉, name 의 속성은 props의 name이라는 것 입니다. */}

      {/* TODO: props === property(특성, 속성, 성질) */}
      <Food
        favourite="kimchi"
        // ouritesomething={true}
        // ouritepapapapa={['hello', 1, 2, 3, 4, true]}
      />
      {/* TODO: Food component에 fav라는 이름의 property 를 kimchi라는 value로 준 것입니다. */}
      {/* TODO: props 는 String 말고도, 자바스크립트의 모든 자료형을 사용 할 수 있습니다. */}

      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chukumi" />

      {/* <Potato /> */}
      {/* index.js에서 import 하여 사용한 방식과 똑같은 방식으로 사용하면 됩니다. */}
      {/* TODO: 
    react 는 Component 를 가져와서 Browser가 이해할 수 있는 평범한 일반 HTML로 
    변형시켜 만들어 줍니다. */}
    </div>
  );

  // TODO: react 란 ?
  // react는 당신이 거기에 쓰는 모든 요소를 생성합니다.
  // 자바스크립트와 함께 그것들을 만들고, 그것들을 HTML에 push 밀어 넣어 줍니다.
}

export default App;
