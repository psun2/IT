import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';
import RouterHookSample from './RouterHookSample';

const Profiles = (props) => (
  <div>
    <h3>사용자 목록</h3>
    <ul>
      <li>
        <NavLink
          to="/profiles/park"
          // active 시 즉 url 의 경로가 현재 link 컴포넌트와 일치시
          // 특정 스타일 또는 클래스네임을 줄 수 있습니다.
          activeStyle={{ backgroundColor: 'black', color: 'white' }}
          activeClassName="active"
          isActive={(match, location) => {
            // return match.params 가 어쩌고 저쩌고 === '비교대상'
            // return 값이 true면 특정 스타일 적용
            // 아닐시 null
            return true;
            // activeStyle={{ backgroundColor: 'black', color: 'white' }} 의
            // style 가 그려 집니다.
            // 즉 특정 조건에 해당할때 사용 합니다.
          }}
        >
          park
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profiles/hommer"
          activeStyle={{ backgroundColor: 'black', color: 'white' }}
        >
          hommer
        </NavLink>
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
    <RouterHookSample />
  </div>
);

export default Profiles;
