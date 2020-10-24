// 요청시의 상태
// 성공시의 데이터의 상태
// 에러시의 에러의 상태

import * as postsAPI from '../api/posts';
import {
  createPromiseThunk,
  handleAsnycActions,
  reducerUtils,
} from '../lib/asyncUtils';

const GET_POSTS = 'posts/GET_POSTS'; // 특정 요청이 시작됨을 알리는 액션
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS'; // 요청이 끝난뒤 Loading fasle 데이터 성공
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR'; // 요청이 끝난뒤 Loading false error

const GET_POST = 'post/GET_POST';
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
const GET_POST_ERROR = 'post/GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST';

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);
export const clearPost = () => ({ type: CLEAR_POST });

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

const getPostsReducer = handleAsnycActions(GET_POSTS, 'posts', true);
const getPostReducer = handleAsnycActions(GET_POST, 'post', true);
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
