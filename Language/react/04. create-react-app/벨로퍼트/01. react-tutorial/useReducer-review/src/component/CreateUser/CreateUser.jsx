import React, { memo } from 'react';

const CreateUser = ({ username, email, onChange, onCreate }) => {
  console.log('CreateUser 랜더링...');
  return (
    <div>
      <input
        name="username"
        placeholder="name"
        value={username}
        onChange={onChange}
      />
      <input
        name="email"
        placeholder="email"
        value={email}
        onChange={onChange}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default memo(CreateUser);
