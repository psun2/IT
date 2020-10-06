import React, { useEffect, useState } from 'react';

// title은 크롬에서 확인 하시기 바랍니다.

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdate = useTitle('Loading...');
  setTimeout(() => titleUpdate('HOME'), 5000);
  return (
    <div className="App">
      <h1>useTitle</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

export default App;
