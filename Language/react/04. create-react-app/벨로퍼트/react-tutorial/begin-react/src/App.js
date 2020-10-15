import React, { useReducer, useMemo, createContext } from 'react';
import produce from 'immer';
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';

function counterActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'tester',
      email: 'test@test.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester2',
      email: 'test2@test.com',
      active: false,
    },
    {
      id: 3,
      username: 'tester3',
      email: 'test3@test.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      // return {
      //   users: state.users.concat(action.user),
      // };
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      // return {
      //   users: state.users.map((user) =>
      //     user.id === action.id ? { ...user, active: !user.active } : user,
      //   ),
      // };
      return produce(state, (draft) => {
        console.log(draft);
        console.log(draft.users);
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      // return {
      //   users: state.users.filter((user) => user.id !== action.id),
      // };
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => counterActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
