// 요청시의 상태
// 성공시의 데이터의 상태
// 에러시의 에러의 상태

import * as postsAPI from '../api/posts';
import {
  createPromiseSaga,
  createPromiseSagaById,
  handleAsnycActions,
  handleAsnycActionsById,
  reducerUtils,
} from '../lib/asyncUtils';

import { call, getContext, put, select, takeEvery } from 'redux-saga/effects';

const GET_POSTS = 'posts/GET_POSTS'; // 특정 요청이 시작됨을 알리는 액션
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS'; // 요청이 끝난뒤 Loading fasle 데이터 성공
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR'; // 요청이 끝난뒤 Loading false error

const GET_POST = 'post/GET_POST';
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
const GET_POST_ERROR = 'post/GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST';

const GO_TO_HOME = 'GO_TO_HOME';

const PRINT_STATE = 'PRINT_STATE';

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id });
export const goToHome = () => ({ type: GO_TO_HOME });
export const printState = () => ({ type: PRINT_STATE });

function* goToHomeSaga() {
  const history = yield getContext('history');
  history.push('/');
}

function* printStateSaga() {
  const state = yield select((state) => state.posts);
  console.log(state);
}

// function* getPostsSaga() {
//   try {
//     const posts = yield call(postsAPI.getPosts);
//     yield put({
//       type: GET_POSTS_SUCCESS,
//       payload: posts,
//     });
//   } catch (error) {
//     yield put({
//       type: GET_POSTS_ERROR,
//       payload: error,
//       error: true,
//     });
//   }
// }

// function* getPostSaga(action) {
//   const id = action.payload;
//   try {
//     const post = yield call(postsAPI.getPostById, id);
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post,
//       meta: id,
//     });
//   } catch (error) {
//     yield put({
//       type: GET_POST_ERROR,
//       payload: error,
//       error: true,
//       meta: id,
//     });
//   }
// }

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);

// saga 를 모니터링 하는 함수 => 루트 사가에 포함 시켜 주어야 합니다.
export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GO_TO_HOME, goToHomeSaga);
  yield takeEvery(PRINT_STATE, printStateSaga);
}

export const clearPost = () => ({ type: CLEAR_POST });

const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

const getPostsReducer = handleAsnycActions(GET_POSTS, 'posts', true);
const getPostReducer = handleAsnycActionsById(GET_POST, 'post', true);

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);

    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);

    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };

    default:
      return state;
  }
}
