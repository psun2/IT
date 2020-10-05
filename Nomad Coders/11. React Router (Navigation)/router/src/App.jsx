import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Index from './routers/index';
import Home from './routers/home';
import About from './routers/about';
import Any from './routers/any';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Index} />

      {/* 첫번째 라우트의 경우엔 exact 가 붙어있지요? 이게 붙어있으면 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여줍니다. */}

      <Route path="/home" component={Home} />

      <Route path="/about" exact={true} component={About} />

      <Route path="/about/any" component={Any} />
    </HashRouter>
  );
}

export default App;
