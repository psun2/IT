const initialState = {
  inputs: {
    username: '',
    email: '',
  },
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
  test: ['리랜더 안되요'],
};

export default initialState;
