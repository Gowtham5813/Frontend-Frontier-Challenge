import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaUser, FaShoppingCart, FaMoneyBill, FaQuestionCircle } from 'react-icons/fa';
import IndiaMartLogo from '../../assets/india-mart-01.png';

const Header = ({ bgColor }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change to true if scrolled > 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "header scrolled" : "header"} style={{ backgroundColor: bgColor }}>
      {/* Left Section - Sign In */}
      <div className="header-section">
        <FaUser className="icon" />
        <span>Sign In</span>
      </div>

      {/* Center Section - Logo */}
      <div className="header-logo" onClick={() => window.location.href='/'}>
        <img src={IndiaMartLogo} alt="Indian Mart" className="logo" />
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
