import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
// BrowserRouter 는 history api 를 사용 합니다.

// import { HashRouter } from 'react-router-dom';
// HashRouter 는 # 값이 붙습니다. 요즘엔 잘 사용 하지 않습니다.

// import { MemoryRouter } from 'react-router-dom';
// HashRouter 는 url이 변경되지 않고 가상의 url이 바뀌면서
// 전환됩니다.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
