import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';
import { getPost, goToHome } from '../modules/posts';

const PostContainer = ({ postId }) => {
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[postId] || reducerUtils.initial(),
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return; // 데이터가 있다면 아예 요청조차 안하게 만들 수 있어
    // 사용 자의 경험성을 더 뛰어나게 만들어 줍니다.
    dispatch(getPost(postId));
  }, [dispatch, postId, data]);

  if (loading && !data) return <div>로딩중 ...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
      <Post post={data} />
    </>
  );
};

export default PostContainer;
