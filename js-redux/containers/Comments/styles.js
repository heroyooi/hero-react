import styled from '@emotion/styled';
import { BaseBox, PrimaryColor } from '@styles';

export const CommentWrap = styled.div`
  ${BaseBox}
  ul {
    border-top: 1px solid #000;
    li {
      padding: 10px;
      border-bottom: 1px solid #ddd;
      width: 100%;
      &:after {
        content: '';
        display: block;
        clear: both;
      }
      a:hover {
        color: ${PrimaryColor};
      }
      .desc {
        float: left;
      }
      .author {
        float: right;
        font-size: 14px;
        color: #aaa;
      }
    }
  }
  textarea {
    margin-top: 10px;
    height: 100px;
  }
`;
