import styled from '@emotion/styled';
import { BaseBox, PrimaryColor } from '@styles';

export const CommentWrap = styled.div`
  ${BaseBox}
  .filter {
    margin-bottom: 10px;
    a {
      &:first-of-type {
        margin-left: 0;
      }
      margin-left: 10px;
      &.on {
        font-weight: bold;
      }
    }
  }
  .comment-list {
    position: relative;
    min-height: 300px;
    ul {
      border-top: 1px solid #000;
      li {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        display: table;
        width: 100%;
        &:after {
          content: '';
          display: block;
          clear: both;
        }
        a:hover {
          color: ${PrimaryColor};
        }
        .desc,
        .righr-area {
          display: table-cell;
        }
        .desc {
          text-align: left;
        }
        .right-area {
          text-align: right;
          .author {
            display: inline-block;
            font-size: 14px;
            color: #aaa;
          }
          .btns {
            display: inline-block;
            margin-left: 5px;
          }
        }
      }
    }
  }
  textarea {
    margin-top: 10px;
    height: 100px;
  }
`;
