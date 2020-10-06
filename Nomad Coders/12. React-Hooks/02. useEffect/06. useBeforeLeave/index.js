import React, { useEffect } from 'react';

export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== 'function') return;
  const handel = (event) => {
    console.log(event);
    const { clientY } = event;
    // 조건문으로 인해 마우스가 위쪽으로..
    // 즉 브라우저의 탭쪽으로 벗어날때만 실행됩니다.
    if (clientY <= 0) onBefore();
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handel);
  }, []);
};

const App = () => {
  const bagForLife = () => console.log('Pls dont leave');
  useBeforeLeave(bagForLife);
  return (
    <div className="App">
      <h1>useBeforeLeave</h1>
    </div>
  );
};

export default App;
