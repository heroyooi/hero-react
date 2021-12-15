import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PrimaryColor = '#6e57ee';
export const defaultColor = '#000';

export const GlobalStyles = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  ${emotionReset}
  body, input, select, textarea, button {
    font-family: 'Pretendard';
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
    color: ${defaultColor};
  }
  input {
    margin: 0;
  }
`;

export const PageTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${PrimaryColor};
`;
