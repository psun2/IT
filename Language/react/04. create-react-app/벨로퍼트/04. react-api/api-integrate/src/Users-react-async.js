import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import UserReactAsync from './User-react-async';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/',
  );
  console.log('response.data : ', response.data);
  return response.data;
}

const UsersReactAsync = () => {
  // reload 이전에 사용 하던 refetch 의 기능 과 동일 기능을 하는 함수 입니다.
  const { data: users, error, isLoading, reload, run } = useAsync({
    // promiseFn: getUsers,
    deferFn: getUsers, // deferFn 시작과 동시에 fetch 시키지 않고, 반환된 run 함수로 ferch 시킬 수 있습니다.
  });

  const [userId, setUserId] = useState(null);

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다/</div>;
  // if (!users) return null; // null 리턴시 공백 화면 이 보입니다.
  if (!users) return <button onClick={run}>불러오기</button>; // null 리턴시 공백 화면 이 보입니다.

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={reload}>다시 불러오기</button>
      {/* {userId && <User id={userId} />} */}
      {userId && <UserReactAsync id={userId} />}
    </>
  );
};

export default UsersReactAsync;
