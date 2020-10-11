import React, { memo, useCallback, useReducer, useRef } from 'react';
import initialState from '../../common/initialState';
import reducer from '../../common/reducer';
import CounterActiveUsers from '../CounterActiveUsers/CounterActiveUsers';
import CreateUser from '../CreateUser/CreateUser';
import Test from '../Test/Test';
import User from '../User/User';

const UserList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const { users } = state;
  const { test } = state;

  const { username, email } = state.inputs;

  const onChange = useCallback((evnet) => {
    const { name, value } = evnet.target;
    dispatch({
      // dispatch 라는 함수가 바뀔 일이 없잔아 ?
      type: 'INPUT_CHANGE',
      // [name]: value, // ?
      // username: value
      // 이런 바보 같은..... key value 를 셋팅을 해줘야 하는데,
      // key 의 이름으로 value 를 보내면 key를 버리는 셈이자낭,... ㅠ ^ ㅠ

      name,
      value,
    });
  }, []); // event 가 change말고 변할 수 없잔아 ?

  const id = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: id.current,
      username,
      email,
    };

    dispatch({
      type: 'CREATE_USER',
      user,
    });

    id.current += 1;
  }, [email, username]);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'USER_REMOVE',
      id,
    });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'USER_TOGGLE',
      id: id,
    });
  }, []);

  console.log('UserList 랜더링...');
  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
      <CounterActiveUsers users={users} />
      <Test test={test} />
    </div>
  );
};

export default memo(UserList);
