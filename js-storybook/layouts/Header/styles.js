import styled from '@emotion/styled';

export const SHeader = styled.div`
  border-bottom: 1px solid #000;
  height: 50px;
  & > .inner {
    margin: 0 auto;
    max-width: 640px;
    h1 {
      padding-top: 15px;
      font-size: 18px;
      font-weight: bold;
      span {
        font-size: 14px;
        color: #666;
      }
    }
  }
`;
