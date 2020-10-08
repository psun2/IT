import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Profile from './components/profile';
import Home from './components/home';

// [REACT ROUTER](https://reactrouter.com/web/api/Hooks)

function App() {
  return (
    <BrowserRouter basename="park">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Switch>
        {/* 
        
          home: 성능적 한계(공식문서) : lnline로 컴포넌트를 보내면
          이미 만들어진 컴포넌트를 unmount 시키고 다시 mount 합니다.
          즉 다시 새로 만들어 냅니다.
          결과 적으로 성능 적인 측면이 떨어지며, 깜박임을 발생시킬 수 있습니다.

        */}
        <Route path={['/', 'home']} exact component={Home} />

        {/* 방법 1. */}
        {/* <Route path="/profile" exact>
          <Profile />
        </Route> */}

        {/* 방법2 . (깜빡임 없는 인라인 작성법) */}
        <Route path="/profile" exact render={() => <Profile />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
