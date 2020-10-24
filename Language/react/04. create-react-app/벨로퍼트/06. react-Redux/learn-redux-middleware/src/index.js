import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
// import myLogger from './middlewares/myLogger';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

// const store = createStore(rootReducer, applyMiddleware(myLogger, logger));
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
  // logger 을 사용할땐 middleware 을 묶어주는 applyMiddleWare 의 함수의
  // 마지막 인자로 전달 해야 합니다.
  // 그렇지 않으면 logger 가 함수도 출력합니다.
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
