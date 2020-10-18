import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error,
});

/*
    모든 유저들을 가져오는 부분
    GET_USERS
    GET_USERS_SUCCESS
    GET_USERS_ERROR

    특정 유저를 가져오는 부분
    GET_USER
    GET_USER_SUCCESS
    GET_USER_ERROR
*/

function usersReducer(state, action) {
  switch (action.type) {
    // 모든 사용자
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState,
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data),
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error),
      };

    // 특정 사용자
    case 'GET_USER':
      return {
        ...state,
        user: loadingState,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data),
      };
    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  return (
    <>
      <UsersStateContext.Provider value={state}>
        <UsersDispatchContext.Provider value={dispatch}>
          {children}
        </UsersDispatchContext.Provider>
      </UsersStateContext.Provider>
    </>
  );
}

export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) throw Error('Cannot find UserProvider');
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) throw Error('Cannot find UserProvider');
  return dispatch;
}

export async function getUsers(dispatch) {
  dispatch({ type: 'GET_USERS' });
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users/',
    );
    dispatch({ type: 'GET_USERS_SUCCESS', data: response.data });
  } catch (error) {
    dispatch({ type: 'GET_USERS_ERROR', error });
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: 'GET_USER' });
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    dispatch({ type: 'GET_USER_SUCCESS', data: response.data });
  } catch (error) {
    dispatch({ type: 'GET_USER_ERROR', error });
  }
}
