import { combineReducers } from 'redux';
import counter from './counter';
import posts from './posts';
import { all } from 'redux-saga/effects';
import { counterSaga } from './counter_redux-saga';

const rootReducer = combineReducers({ counter, posts });

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;
