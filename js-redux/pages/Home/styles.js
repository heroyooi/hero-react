import styled from '@emotion/styled';

export const PostWrap = styled.div`
  position: relative;
  min-height: 150px;
`;

export const PostCard = styled.ul`
  li {
    margin-top: 10px;
    &:first-of-type {
      margin-top: 0;
    }
  }
`;
