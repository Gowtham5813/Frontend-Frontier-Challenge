// Header.jsx
import React from 'react';
import './Header.css';
import { FaUser, FaShoppingCart, FaMoneyBill, FaQuestionCircle } from 'react-icons/fa';

const Header = ({ bgColor }) => {
  return (
    <header className="header" style={{ backgroundColor: bgColor }}>
      {/* Left Section - Sign In */}
      <div className="header-section">
        <FaUser className="icon" />
        <span>Sign In</span>
      </div>

      {/* Center Section - Logo */}
      <div className="header-logo" onClick={() => window.location.href='/'}>
        <img src="/path/to/indian-mart-logo.png" alt="Indian Mart" className="logo" />
      </div>

      {/* Right Section - Buy, Sell, Help */}
      <div className="header-section">
        <div className="header-item">
          <FaShoppingCart className="icon" />
          <span>Buy</span>
        </div>
        <div className="header-item">
          <FaMoneyBill className="icon" />
          <span>Sell</span>
        </div>
        <div className="header-item">
          <FaQuestionCircle className="icon" />
          <span>Help</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
