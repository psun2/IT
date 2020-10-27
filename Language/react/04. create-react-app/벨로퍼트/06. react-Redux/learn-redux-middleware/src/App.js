import React from 'react';
import CounterContainer from './Containse/CounterContainer';
import PostListContainer from './Containse/PostListContainer';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <Route exact path="/" render={() => <PostListPage />} />
      <Route exact path="/:id" render={() => <PostPage />} />
      <CounterContainer />
      {/* <PostListContainer /> */}
    </>
  );
}

export default App;
