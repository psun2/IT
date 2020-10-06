import React from 'react';
import useAxios from './useAxios';

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
  });
  console.log(
    `Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`,
  );
  return (
    <div className="App">
      <h1>useAxios</h1>
      <h1>{data && data.status}</h1>
      <h2>{loading && 'Loading...'}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
