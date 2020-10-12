import React, { memo, useCallback, useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './useInputs';

function CreateUser() {
  const dispatch = useContext(UserDispatch);
  const [{ username, email }, change, reset] = useInputs({
    username: '',
    email: '',
  });
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    dispatch({
      type: 'CREATE_USER',
      user,
    });
    nextId.current += 1;
    reset();
  }, [dispatch, email, username, reset]);

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={change}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={change}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default memo(CreateUser);
