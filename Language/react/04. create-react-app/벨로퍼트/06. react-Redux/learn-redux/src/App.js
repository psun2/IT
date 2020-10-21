import React from 'react';
import CounterContainer from './containers/CounterContainer';
import CounterContainerConnect from './containers/CounterContainer.connect';
import TodosContainer from './containers/TodosContainer';
import TodosContainerConnect from './containers/TodosContainer.connect';

function App() {
  return (
    <>
      <h4>hooks 사용</h4>
      <div>
        <CounterContainer />
        <hr />
        <TodosContainer />
      </div>
      <hr />
      <h4>connect 사용</h4>
      <div>
        <CounterContainerConnect />
        <hr />
        <TodosContainerConnect />
      </div>
    </>
  );
}

export default App;
