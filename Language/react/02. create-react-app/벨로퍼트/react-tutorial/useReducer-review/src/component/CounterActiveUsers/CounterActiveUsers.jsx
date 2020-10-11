import React, { memo } from 'react';

const counter = (users) => {
  // console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active).length;
};

const CounterActiveUsers = ({ users }) => {
  console.log('CounterActiveUsers 랜더링...');
  const count = counter(users);
  return <div>활성 사용자 수: {count}</div>;
};

export default memo(CounterActiveUsers);
