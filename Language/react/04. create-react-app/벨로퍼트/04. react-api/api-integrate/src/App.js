import React from 'react';
import { UsersProvider } from './UsersContext';
import UsersRefactoring from './UsersRefactoring';
// import Users from './Users';
// import UsersReactAsync from './Users-react-async';
// import AxiosTest from './AxiosTest';

function App() {
  return (
    <UsersProvider>
      <UsersRefactoring />
      {/* <Users /> */}
      {/* <UsersReactAsync /> */}
      {/* <AxiosTest /> */}
    </UsersProvider>
  );
}

export default App;
