import styled from '@emotion/styled';
import { BaseBox, PrimaryColor } from '@styles';

export const UserBox = styled.div`
  ${BaseBox}
  li {
    margin-top: 15px;
    &:first-of-type {
      margin-top: 0;
    }
  }
`;

export const PostWrap = styled.div`
  ${BaseBox}
  li {
    margin-top: 10px;
    &:first-of-type {
      margin-top: 0;
    }
    a:hover {
      color: ${PrimaryColor};
    }
  }
`;
