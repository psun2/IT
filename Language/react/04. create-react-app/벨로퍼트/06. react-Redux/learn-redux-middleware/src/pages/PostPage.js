import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import PostContainer from '../Containse/PostContainer';

const PostPage = () => {
  const match = useRouteMatch();
  const { id } = match.params;
  const postId = parseInt(id, 10);

  return <PostContainer postId={postId} />;
};

export default PostPage;
