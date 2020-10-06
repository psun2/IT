// Window: beforeunload 이벤트
// https://developer.mozilla.org/ko/docs/Web/API/Window/beforeunload_event

import React from 'react';

// 현재 페이지에서 사용자가 종료하고자 할때
// 진짜로 페이지를 나가겠냐고 문구를 보여주는 이벤트 생성

export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);

  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <h1>useConfirm</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default App;
