import React from 'react';
import '../assets/css/Header.css';

const Header = props => {
  return (
    <div className="header">
      <h1>{props.headerTitle}</h1>
    </div>
  );
};

export default Header;