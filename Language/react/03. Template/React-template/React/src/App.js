import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const divRef = useRef();
  const { serverMessage, setServerMessage } = useState('');
  useEffect(() => {
    fetch('/WelcomePage') //
      .then((response) => response.text())
      .then((result) => (divRef.current.innerText = result));
  }, []);
  return <div ref={divRef} />;
};

export default App;
