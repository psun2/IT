import initialState from './initialState';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        inputs: {
          ...state.inputs, // 복사를 안해주면 어떻게해 ㅠㅠ
          [action.name]: action.value,
        },
      };
    case 'CREATE_USER':
      return {
        ...state,
        users: [...state.users, action.user],
        inputs: initialState.inputs,
      };
    case 'USER_REMOVE':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case 'USER_TOGGLE':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };
    default:
      throw Error('Unhandled action');
  }
};

export default reducer;
