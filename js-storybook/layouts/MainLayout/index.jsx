import React from 'react';
import Header from '../Header';
import { Wrapper, Container } from './styles';

const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default MainLayout;
