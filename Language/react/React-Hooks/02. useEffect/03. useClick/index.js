import React, { useEffect, useRef } from 'react';

export const useClick = (onClick) => {
  if (typeof onClick !== 'function') return;
  const element = useRef();
  useEffect(() => {
    if (element.current) element.current.addEventListener('click', onClick);

    return () => {
      if (element.current)
        element.current.removeEventListener('click', onClick);
    };
    // [] (Dependency) : 가 없을 경우 매번 update 시마다 eventListener이 추가 됩니다.
    // 그러므로 Dependency 를 빈 배열로 추가하여, mount 와 unmount 시 활성화 하도록 합니다.
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1>useClick</h1>
      <h2 ref={title}>Title</h2>
    </div>
  );
};

export default App;
