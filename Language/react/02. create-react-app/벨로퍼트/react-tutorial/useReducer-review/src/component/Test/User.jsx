import React, { memo } from 'react';

const User = ({ test }) => {
  console.log('Test 랜더링...');
  return <div>User && User 리랜더 Test</div>;
};

export default memo(User);
