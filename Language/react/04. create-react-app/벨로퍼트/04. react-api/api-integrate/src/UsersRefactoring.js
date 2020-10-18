import React, { useState } from 'react';
import UserRefectoring from './UserRefectoring';
import { getUsers, useUsersDispatch, useUsersState } from './UsersContext';

const UsersRefactoring = () => {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { loading, error, data: users } = state.users;

  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다/</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>; // null 리턴시 공백 화면 이 보입니다.

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <UserRefectoring id={userId} />}
    </>
  );
};

export default UsersRefactoring;
