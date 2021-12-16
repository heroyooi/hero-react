import React from 'react';
import { SLoading } from './styles';

const Loading = ({ text }) => {
  return (
    <SLoading>
      <div className="loading-container">
        <div className="loading"></div>
        <div className="loading-text">{text}</div>
      </div>
    </SLoading>
  );
};

export default Loading;
