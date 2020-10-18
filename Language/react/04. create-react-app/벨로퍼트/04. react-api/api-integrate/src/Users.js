import React, { useState } from 'react';
import axios from 'axios';
import useAsync from './UseAsync';
import User from './User';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/',
  );
  console.log('response.data : ', response.data);
  return response.data;
}

const Users = () => {
  const [state, refetch] = useAsync(getUsers, [], true);
  const [userId, setUserId] = useState(null);

  const { loading, error, data: users } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다/</div>;
  // if (!users) return null; // null 리턴시 공백 화면 이 보입니다.
  if (!users) return <button onClick={refetch}>불러오기</button>; // null 리턴시 공백 화면 이 보입니다.

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
