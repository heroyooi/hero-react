import React, { useEffect } from 'react';
import MainLayout from '@layouts/MainLayout';
import Loading from '@components/Loading';
import { PageTitle } from '@styles';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as postsActions from '@store/modules/posts';
import { Description } from './styles';

const Posts = () => {
  const dispatch = useDispatch();
  let { postId } = useParams();
  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(postsActions.getPost(postId));
    return () => {
      dispatch(postsActions.initPost());
    };
  }, []);

  return (
    <MainLayout>
      {!post ? (
        <Loading text="LOADING" />
      ) : (
        <>
          <PageTitle>{post?.title}</PageTitle>
          <Description>{post.desc}</Description>
        </>
      )}
    </MainLayout>
  );
};

export default Posts;
