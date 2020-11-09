import React from 'react';
import Greetings from './Greetings';
import GreetingsFunction from './GreetingsFunction';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name);
  };
  return (
    <>
      <Greetings name="리액트" />
      <GreetingsFunction name="function keyword" onClick={onClick} />
    </>
  );
};

export default App;
