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
    <div className="buttons">
      <Button color="gray" size="large">
        BUTTON
      </Button>
      <Button color="gray" size="medium">
        BUTTON
      </Button>
      <Button color="gray">BUTTON</Button>
      <Button color="gray" size="small">
        BUTTON
      </Button>
    </div>
    <div className="buttons">
      <Button color="pink" size="large">
        BUTTON
      </Button>
      <Button color="pink" size="medium">
        BUTTON
      </Button>
      <Button color="pink">BUTTON</Button>
      <Button color="pink" size="small">
        BUTTON
      </Button>
    </div>
    <div className="buttons">
      <Button
        size="large"
        // outline={true}
        // 위의 props 가 너무 길다면 true 일때는
        // true 를 생략 가능 합니다.
        outline
      >
        BUTTON
      </Button>
      <Button color="gray" outline>
        BUTTON
      </Button>
      <Button color="pink" size="small" outline>
        BUTTON
      </Button>
    </div>
    <div className="buttons">
      <Button size="large" fullWidth>
        BUTTON
      </Button>
      <Button size="large" color="gray" fullWidth>
        BUTTON
      </Button>
      <Button size="large" color="pink" fullWidth>
        BUTTON
      </Button>
    </div>
  </div>
);

export default App;
