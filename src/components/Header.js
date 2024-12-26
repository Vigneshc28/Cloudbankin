import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo-circle">CB</div>
        <div className="logo-text">Cloudbankin</div>
      </div>
      <div className="user-info">
        <div className="user-circle">GC</div>
        <span>Gregory Clark</span>
      </div>
    </div>
  );
};

export default Header;
