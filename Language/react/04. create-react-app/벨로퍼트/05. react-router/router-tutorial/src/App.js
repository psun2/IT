import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
// import Profile from './Profile';
import Profiles from './Profiles';

function App() {
  return (
    <div>
      {/* exact: props 가 없었을 경우 
        path 를 about 으로 들어 가게 될 경우
        Home 과 About 이 둘다 랜더링 됩니다. 
        그 이유로는 / 이 about 에 게도 해당 되기 때문입니다.
        exact 라는 props 을 설정하면 path 에 정확히 일치되는 옵션입니다.
        exact props 는 exact={true} 와도 같습니다.
      */}
      {/* 
        <a href="/about">이동</a> 
        a 태그를 사용시 페이지가 새로고침 되며 about 페이지를 또 다운 로드 받습니다.
        react 는 spa 즉 싱글 페이지 어플리케이션으로 우리는 안에 있는 컴포넌트만 
        랜더링을 하고 싶습니다.
      */}

      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">히스토리(예제)</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        {/* <Route path="/profiles/:username/:id" component={Profile} /> */}
        {/* /:username => 이부분이 urlParameter가 됩니다.
        즉, 우리가 profile 컴포넌트에서 match.params 로 가져오는 username 입니다.
      */}
        <Route path="/profiles" component={Profiles} />
        {/* <Route path="/history" render={() => <HistorySample />} /> */}
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
