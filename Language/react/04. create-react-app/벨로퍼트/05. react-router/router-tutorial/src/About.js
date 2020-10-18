import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  console.log(location);
  console.log(location.search);
  // react-router-dom 의 공식 사이트에 의하면 위와같이
  // location 을 props 로 받아 올 수 있다는 것은 inline 랜더를 해 준 것인데,
  // 이 inline 랜더링은 화면 깜빡임을 초래 할 수 있다는 말 이 있습니다.
  // <Route>
  // 로 children을 넣어 랜더하여 hook을 통해 location, history 를 가져 올 수 있습니다.
  // </Route>
  // 또한 render props 를 통하면 inline 랜더의 단점을 보완 하는 inline 랜더링을 할 수 있습니다.
  // <Route path="?" exact render={() => <Component />}

  const param = new URLSearchParams(location.search);
  console.log(Object.fromEntries(param));

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // ?표가 없이 parsing 됩니다.
  });
  console.log(query);

  const detail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리엑트 라우터 기초를 실습해보는 예제 프로젝트 입니다.</p>
      {detail && <div>detail 값이 true 입니다.</div>}
    </div>
  );
};
export default About;
