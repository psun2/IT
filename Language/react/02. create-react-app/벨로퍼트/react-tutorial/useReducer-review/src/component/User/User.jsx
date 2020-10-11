import React, { memo } from 'react';

const User = ({ user, onRemove, onToggle }) => {
  const { username, email, id, active } = user;
  console.log('user 랜더링...');
  return (
    <div style={{ cursor: 'pointer' }}>
      <b
        style={{ color: active ? 'green' : 'black' }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>{email}</span>
      &nbsp;
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};
export default memo(User);
