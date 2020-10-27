import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
// import myLogger from './middlewares/myLogger';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    // saga 미들웨에서 history 사용
    // react-router-dom 에서 훅스가 나왔으므로 간편하게 훅스 사용 가능!
    history: customHistory,
  },
});

// const store = createStore(rootReducer, applyMiddleware(myLogger, logger));
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      thunk.withExtraArgument({ history: customHistory }),
      logger,
    ),
  ),
  // logger 을 사용할땐 middleware 을 묶어주는 applyMiddleWare 의 함수의
  // 마지막 인자로 전달 해야 합니다.
  // 그렇지 않으면 logger 가 함수도 출력합니다.
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      {/* <BrowserRouter> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </BrowserRouter> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
