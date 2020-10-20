import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import './exercise'; // 04. 03. 리덕스 사용 할 준비하기(라이브러리 소개)
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules'; // 아직 잘은 모르겠지만 폴더 내에서도 index가 최 우선 순위 인가 봅니다.

const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
