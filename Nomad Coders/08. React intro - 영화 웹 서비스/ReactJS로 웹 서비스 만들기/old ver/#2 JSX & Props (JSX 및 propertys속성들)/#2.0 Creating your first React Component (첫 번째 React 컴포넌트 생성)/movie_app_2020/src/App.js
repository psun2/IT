import React from 'react';
// TODO: .(dot) 와 /(슬레시) 의 의미는 같은 directory라는 의미입니다.
// Potato.js 와 App.js 는 같은 directory 에 있습니다. 맞습니까 ? yes
import Potato from './Potato';

// TODO: component 란 ?
// component 는 HTML을 반환하는 함수 입니다.
// react는 component를 사용해서 HTML 처럼 작성하려는 경우에 필요합니다.
// JavaScript 와 HTML 사이의 이러한 조합을 jsx라고 부릅니다.
function App() {
  // TODO: 이 곳을 수정하면, 브라우저에 그려집니다.
  return (
    <div>
      <h1>Hello!!!!!!</h1>
      <Potato />
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
