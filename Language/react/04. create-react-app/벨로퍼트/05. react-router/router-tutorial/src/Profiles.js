import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const Profiles = (props) => (
  <div>
    <h3>사용자 목록</h3>
    <ul>
      <li>
        <Link to="/profiles/park">park</Link>
      </li>
      <li>
        <Link to="/profiles/hommer">hommer</Link>
      </li>
    </ul>
    <div>사용자를 선택해주세요.</div>
    {/* <Route
      path="/profiles"
      exact
      render={() => <div>사용자를 선택해주세요.</div>}
    /> */}
    <Route path="/profiles/:username" component={Profile} />
    <WithRouterSample />
  </div>
);

export default Profiles;
