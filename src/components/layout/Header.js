import React from 'react';
import '../../css/Layout/Header.scss';
import coffee from '../../image/coffee.png';

const Header = () => {
  return (
    <header className="header">
      <img src={coffee} alt="coffee" />
      BoxerChoi.Coffee-Break
    </header>
  );
};

export default Header;
