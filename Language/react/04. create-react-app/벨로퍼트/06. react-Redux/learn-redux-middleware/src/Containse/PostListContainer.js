import React, { useEffect } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import PostList from '../components/PostList';
// import { getPosts } from '../modules/posts';
import { getPosts } from '../modules/posts_redux-saga';

const PostListContainer = () => {
  const { data, loading, error } = useSelector(
    (state) => state.posts.posts,
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중 ...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <PostList posts={data} />;
};

export default PostListContainer;
