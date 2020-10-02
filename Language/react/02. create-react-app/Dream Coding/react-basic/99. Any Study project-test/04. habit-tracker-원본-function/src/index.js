import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  // React.StrictMode : 개발 과정에서 문제는 없는지 react가
  // 한번 더 검사함으로.. console 이 두번찍히게 되며,
  // 배포를 하게 되면 한번만 출력 됩니다.
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById('root'),
);
