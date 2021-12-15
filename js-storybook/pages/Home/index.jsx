import React from 'react';
import MainLayout from '@layouts/MainLayout';
import { PageTitle } from '@styles';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <MainLayout>
      <PageTitle>코딩맵</PageTitle>
      <ul>
        <li>
          <Link to="/components">컴포넌트 가이드</Link>
        </li>
      </ul>
    </MainLayout>
  );
};

export default Home;
