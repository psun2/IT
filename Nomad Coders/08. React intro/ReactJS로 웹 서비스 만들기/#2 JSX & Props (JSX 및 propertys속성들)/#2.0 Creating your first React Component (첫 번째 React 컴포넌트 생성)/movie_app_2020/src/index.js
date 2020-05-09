import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// TODO: 강의 영상과 같이 index.js 에 Potato를 import 하여 사용 하고 있지만,
// 강의에서는 에러가 나는 반면
// 2020-04-26 현재 에러가 나지 않습니다.
// 최근에 업데이트 한 것이 아닐까 생각됩니다.
// 강의와 같은 방법으로 study 를 진행 하겠습니다.
// import Potato from './Potato';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Potato /> */}
  </React.StrictMode>,
  // TODO: <App /> 과 같이 보이는 것 을 기본적으로 component 라고 합니다.
  // TODO: component 란 ?
  // component 는 HTML을 반환하는 함수 입니다.
  // react는 component를 사용해서 HTML 처럼 작성하려는 경우에 필요합니다.
  // JavaScript 와 HTML 사이의 이러한 조합을 jsx라고 부릅니다.
  document.getElementById('potato'),
  // TODO: id 값은 root에서 index.html 에서 변경된 아이디 값과 같은 potato를 지정합니다.
);
