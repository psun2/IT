import { call, put } from 'redux-saga/effects';

export const createPromiseSaga = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function* saga(action) {
    try {
      const result = yield call(promiseCreator, action.payload);
      yield put({
        type: SUCCESS,
        payload: result,
      });
    } catch (error) {
      yield put({
        type: ERROR,
        payload: error,
        error: true,
      });
    }
  };
};

export const createPromiseSagaById = (
  type,
  promiseCreator,
  idSelector = defaultIdSelector,
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function* (action) {
    const id = action.meta;
    try {
      const result = yield call(promiseCreator, id);
      yield put({
        type: SUCCESS,
        payload: result,
        meta: id,
      });
    } catch (error) {
      yield put({
        type: SUCCESS,
        payload: ERROR,
        error: true,
        meta: id,
      });
    }
  };
};

export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // const thunkCreator = (param) => async (dispatch) => {
  return (param) => async (dispatch) => {
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
        error: true,
      });
    }
  };

  // return thunkCreator;
};

const defaultIdSelector = (param) => param; // 추후에 id 를 생략 했을시
// parameter 자체가 id 이다 라는 default 값 결정

// id select 함수가 필요한 이유 ! 만약 id 값만이 아닌 다른 값도 들어 있는 object 가 온다면 ...
// {id, a, b, c, d, object, array}

// thunk 함수를 리턴하는 함수
export const createPromiseThunkById = (
  type,
  promiseCreator,
  idSelector = defaultIdSelector,
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    const id = idSelector(param);
    dispatch({ type, meta: id });
    try {
      const payload = await promiseCreator(id);
      dispatch({ type: SUCCESS, payload, meta: id });
    } catch (error) {
      dispatch({ type: ERROR, payload: error, error: true, meta: id });
    }
  };
};

export const handleAsnycActions = (type, key, keppData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    // update
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keppData ? state[key].data : null),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};

export const handleAsnycActionsById = (type, key, keppData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    // update
    const id = action.meta;
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(
              keppData ? state[key][id] && state[key][id].data : null,
            ),
          },
        };
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.success(action.payload),
          },
        };
      case ERROR:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload),
          },
        };
      default:
        return state;
    }
  };
};

export const reducerUtils = {
  initial: (data = null) => ({
    data,
    loading: false,
    error: null,
  }),
  loading: (prevState = null) => ({
    data: prevState,
    loading: true,
    error: null,
  }),
  success: (data) => ({
    data,
    loading: false,
    error: null,
  }),
  error: (error) => ({
    data: null,
    loading: false,
    error,
  }),
};
