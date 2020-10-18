import { useEffect, useReducer, useCallback } from 'react';

/*
  LOADING
  SUCCESS
  ERROR
*/
function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'SUCCESS':
      return { ...state, loading: false, data: action.data, error: null };
    case 'ERROR':
      return { ...state, loading: false, data: null, error: action.error };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(callback, deps = [], skip = false) {
  console.log('callback', callback);
  // callback = api를 요청하는 함수를 받습니다.
  // useEffect 의 deps

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (error) {
      dispatch({ type: 'ERROR', error });
    }
  }, [callback]);

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}

export default useAsync;
