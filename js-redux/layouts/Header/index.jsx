import React from 'react';
import { Link } from 'react-router-dom';
import { SHeader } from './styles';

const Header = () => {
  return (
    <SHeader>
      <div className="inner">
        <h1>
          <Link to="/">
            React.js <span>보일러 플레이트</span>
          </Link>
        </h1>
      </div>
    </SHeader>
  );
};

export default Header;
