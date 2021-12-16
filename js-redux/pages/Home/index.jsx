import React, { useEffect } from 'react';
import MainLayout from '@layouts/MainLayout';
import Loading from '@components/Loading';
import { PageTitle, SubTitle } from '@styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as postsActions from '@store/modules/posts';
import { PostWrap, PostCard } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(postsActions.getPosts());
  }, []);

  return (
    <MainLayout>
      <PageTitle>비동기 통신 예제</PageTitle>
      <PostWrap>
        {!posts.length ? (
          <Loading text="LOADING" />
        ) : (
          <PostCard>
            {posts.map((post, index) => (
              <li key={index}>
                <Link to={`/posts/${post.id}`}>- {post.title}</Link>
              </li>
            ))}
          </PostCard>
        )}
      </PostWrap>
      <SubTitle marginTop={30}>코딩맵</SubTitle>
      <ul>
        <li>
          <Link to="/components">컴포넌트 가이드</Link>
        </li>
      </ul>
    </MainLayout>
  );
};

export default Home;
