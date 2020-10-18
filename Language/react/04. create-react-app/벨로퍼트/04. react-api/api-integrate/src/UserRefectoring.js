import React, { useEffect } from 'react';
import { getUser, useUsersDispatch, useUsersState } from './UsersContext';

const UserRefectoring = ({ id }) => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { loading, error, data: user } = state.user;

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다/</div>;
  if (!user) return null; // null 리턴시 공백 화면 이 보입니다.

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email: </b> {user.email}
      </p>
    </div>
  );
};

export default UserRefectoring;
