import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('potato'),
  // TODO: id 값은 root에서 index.html 에서 변경된 아이디 값과 같은 potato를 지정합니다.
);
