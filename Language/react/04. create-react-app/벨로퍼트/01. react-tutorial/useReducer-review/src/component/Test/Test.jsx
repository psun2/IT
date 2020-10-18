import React, { memo } from 'react';

const Test = ({ test }) => {
  console.log('Test 랜더링...');
  return <div>useReducer && memo 리랜더 Test</div>;
};

export default memo(Test);
