import React, { useEffect, memo } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  useEffect(() => {
    return () => {};
  });
  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        // <User user={user} />
        // index.js:1 Warning: Each child in a list should have a unique "key" prop.
        // 목록의 각 하위에는 고유 한 "키"소품이 있어야합니다.
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        />
        // key의 역할 :
        // const arr = ['a', 'b', 'c', 'd'] 이러한 배열에서 b 와 c 사이에 z 가 들어 간다면?
        // const arr = ['a', 'b', 'z', 'c', 'd'] => user 컴포넌트를 랜더링 할때
        // 중간에 z가 들어 가는 것이 아니라 z를 생성 할때 z 를 생성하고 또 다른 c 와 d
        // 를 생성 하게 됩니다. 성능 저하의 원인이 되며, key 값을 전달 해 주었을땐,
        // 위와 같이 불필요하게 동작이 되는 것이 아닌 c 와 d 의 컴포넌트는 그대로 존재하되,
        // 새로운 z 만 b 와 c 사이에 생성이 됩니다.
      ))}
    </div>
  );
}

export default memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users,
);
