import styled from '@emotion/styled';

export const SLoading = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  @keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loading-text-opacity {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .loading-container,
  .loading {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  .loading-container {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -50px 0 0 -50px;
    .loading {
      border: 2px solid transparent;
      border-color: transparent #fff transparent #fff;
      -moz-animation: rotate-loading 1.5s linear 0s infinite normal;
      -moz-transform-origin: 50% 50%;
      -o-animation: rotate-loading 1.5s linear 0s infinite normal;
      -o-transform-origin: 50% 50%;
      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;
      -webkit-transform-origin: 50% 50%;
      animation: rotate-loading 1.5s linear 0s infinite normal;
      transform-origin: 50% 50%;

      transition: all 0.5s ease-in-out;
    }

    &:hover .loading {
      border-color: transparent #e45635 transparent #e45635;
    }

    .loading-text {
      -moz-animation: loading-text-opacity 2s linear 0s infinite normal;
      -o-animation: loading-text-opacity 2s linear 0s infinite normal;
      -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;
      animation: loading-text-opacity 2s linear 0s infinite normal;
      color: #ffffff;
      font-family: 'Helvetica Neue, ' Helvetica ', ' 'arial';
      font-size: 10px;
      font-weight: bold;
      opacity: 0;
      position: absolute;
      text-align: center;
      text-transform: uppercase;
      top: 50%;
      transform: translateY(-50%);
      width: 100px;
    }
  }
`;
