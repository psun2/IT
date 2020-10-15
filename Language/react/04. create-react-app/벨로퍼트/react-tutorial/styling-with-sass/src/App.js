import React from 'react';
import Button from './components/Button';
import './App.scss';

const App = (props) => (
  <div className="App">
    <div className="buttons">
      <Button size="large">BUTTON</Button>
      <Button size="medium">BUTTON</Button>
      <Button>BUTTON</Button>
      <Button size="small">BUTTON</Button>
    </div>
  </div>
);

export default App;
