import React from 'react';
import CategoryMenu from '../Categorymenu/Categorymenu';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Logo" className="header-logo" />
        <h1>News Aggregator</h1>
      </div>
      <div className="header-right">
        <CategoryMenu />
      </div>
    </header>
  );
};

export default Header;
