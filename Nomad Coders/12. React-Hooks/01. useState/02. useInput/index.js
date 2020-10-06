import React, { useState } from 'react';

// input의 조건에 따른 업데이트 함수

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    console.log(event.target);
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  // const maxLen = (value) => !value.includes("@");
  const name = useInput('Mr.', maxLen);

  return (
    <div className="App">
      <h1>useInput</h1>
      <input type="text" placeholder="Name" {...name} />
    </div>
  );
};

export default App;
