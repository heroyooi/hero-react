import styled from '@emotion/styled';

export const SCheckbox = styled.span`
  display: inline-block;
  input,
  label {
    display: inline-block;
    vertical-align: middle;
  }
  input:disabled {
    background: #ddd;
    & + label {
      opacity: 0.3;
    }
  }
`;
