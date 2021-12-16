import styled from '@emotion/styled';
import { PrimaryColor } from '@styles';

export const BaseBox = `
  position: relative;
  min-height: 150px;
  padding: 15px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15);
`;

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
