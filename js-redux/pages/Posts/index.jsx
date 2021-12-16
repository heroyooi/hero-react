import React, { useEffect } from 'react';
import MainLayout from '@layouts/MainLayout';
import Loading from '@components/Loading';
import { PageTitle } from '@styles';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as postActions from '@store/modules/post';
import { Description } from './styles';

const Posts = () => {
  const dispatch = useDispatch();
  let { postId } = useParams();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(postActions.getPost(postId));
    return () => {
      dispatch(postActions.initPost());
    };
  }, []);

  return (
    <MainLayout>
      {!post.data ? (
        <Loading text="LOADING" />
      ) : (
        <>
          <PageTitle>{post.data.title}</PageTitle>
          <Description>{post.data.desc}</Description>
        </>
      )}
    </MainLayout>
  );
};

export default Posts;
