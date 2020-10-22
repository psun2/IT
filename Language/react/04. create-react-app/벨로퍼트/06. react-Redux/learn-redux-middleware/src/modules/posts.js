// 요청시의 상태
// 성공시의 데이터의 상태
// 에러시의 에러의 상태

import * as postsAPI from '../api/posts';

const GET_POSTS = 'posts/GET_POSTS'; // 특정 요청이 시작됨을 알리는 액션
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS'; // 요청이 끝난뒤 Loading fasle 데이터 성공
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR'; // 요청이 끝난뒤 Loading false error

const GET_POST = 'post/GET_POST';
const GET_PSOT_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = () => async (dispatch) => {
  // 요청이 시작됨
  dispatch({ type: GET_POSTS });

  try {
    // API 를 호출
    const posts = await postsAPI.getPosts();

    // 성공했을 때
    dispatch({ type: GET_POSTS_SUCCESS, posts });
  } catch (error) {
    // 실패했을때
    dispatch({ type: GET_POSTS_ERROR, error });
  }
};

export const getPost = (id) => async (dispatch) => {
  // 요청이 시작됨
  dispatch({ type: GET_POST });

  try {
    // API 를 호출
    const post = await postsAPI.getPostById(id);

    // 성공했을 때
    dispatch({ type: GET_PSOT_SUCCESS, post });
  } catch (error) {
    // 실패했을때
    dispatch({ type: GET_POST_ERROR, error });
  }
};
