import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PrimaryColor = '#6e57ee';
export const defaultColor = '#000000';

export const GlobalStyles = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  ${emotionReset}
  body, input, select, textarea, button {
    font-family: 'Pretendard';
    color: ${defaultColor};
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
  textarea {
    padding: 10px;
    border: 1px solid #dddddd;
    resize: none;
    width: 100%;
    border-radius: 5px;
    outline: none;
  }
`;

export const BaseBox = `
  position: relative;
  min-height: 120px;
  padding: 15px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15);
`;

export const PageTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${PrimaryColor};
  margin-top: ${(props) => props.marginTop}px;
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
  margin-top: ${(props) => props.marginTop}px;
`;
