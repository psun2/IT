// Navigator.onLine
// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine

import React, { useState, useEffect } from 'react';

export const useNetwork = (onChange) => {
  if (typeof onChange !== 'function')
    return new Error(`${onChange} not a function`);

  const [status, setStatus] = useState(navigator.onLine);

  const handelChange = () => {
    onChange(navigator.onLine);

    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', handelChange);
    window.addEventListener('offline', handelChange);

    return () => {
      window.removeEventListener('online', handelChange);
      window.removeEventListener('offline', handelChange);
    };
  }, []);

  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? 'We just went online' : 'We are offline');
  };
  const onLine = useNetwork(handleNetworkChange);
  console.log(navigator.onLine); // Online, offLine을 판별 합니다. true or flase
  return (
    <div className="App">
      <h1>useNetwork</h1>
      <p>{onLine ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default App;
