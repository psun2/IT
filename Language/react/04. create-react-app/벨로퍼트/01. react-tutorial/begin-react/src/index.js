import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import CounterUseReducer from './Counter_useReducer';
import * as serviceWorker from './serviceWorker';
// import CounterClass from './Counter-class';
import LifeCycleIIdex from './LifeCycleIIdex';
// import HelloClass from './Hello_class';
// import ContextSample from './ContextSample';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CounterUseReducer /> */}
    {/* <ContextSample /> */}
    {/* <HelloClass name="react" isSpecial={true} /> */}
    {/* <CounterClass /> */}
    <LifeCycleIIdex />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
