import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '@layouts/MainLayout';
import Loading from '@components/Loading';
import CommentsContainer from '@containers/Comments';
import { PageTitle, SubTitle } from '@styles';
import * as userActions from '@store/modules/user';
import * as postActions from '@store/modules/post';
import { UserBox, PostWrap } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(userActions.getMe());
    dispatch(postActions.getPosts());
  }, []);

  return (
    <MainLayout>
      <PageTitle>비동기 통신 예제</PageTitle>
      <SubTitle marginTop={30}>로그인 정보</SubTitle>
      <UserBox>
        {!me.data ? (
          <Loading text="LOADING ME" />
        ) : (
          <ul>
            <li>이름: {me.data.name}</li>
            <li>나이: {me.data.age}</li>
            <li>이메일: {me.data.email}</li>
          </ul>
        )}
      </UserBox>

      <SubTitle marginTop={30}>게시글</SubTitle>
      <PostWrap>
        {!posts.data ? (
          <Loading text="LOADING POSTS" />
        ) : (
          <ul>
            {posts.data.map((post, index) => (
              <li key={index}>
                <Link to={`/posts/${post.id}`}>- {post.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </PostWrap>

      <SubTitle marginTop={30}>댓글</SubTitle>
      <CommentsContainer />

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
