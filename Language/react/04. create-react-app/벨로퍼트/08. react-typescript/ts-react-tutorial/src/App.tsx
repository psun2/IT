import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';
import GreetingsFunction from './GreetingsFunction';
import MyForm from './MyForm';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name);
  };
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <Greetings name="리액트" />
      <GreetingsFunction name="function keyword" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
    </>
  );
};

export default App;
