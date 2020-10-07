import React, { useState, useEffect } from 'react';

export const useScroll = () => {
  const [state, Setstate] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    console.log(`x: ${window.scrollX}, y: ${window.scrollY}`);

    Setstate({ x: window.scrollY, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: '1000vh' }}>
      <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>
        useScroll
      </h1>
    </div>
  );
};

export default App;