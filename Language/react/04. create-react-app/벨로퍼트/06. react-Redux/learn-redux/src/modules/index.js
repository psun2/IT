// root reducer 을 만들어 두개의 reducer 을 통합 하여 관리 합니다.

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
