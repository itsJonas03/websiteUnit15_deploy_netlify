import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/homepage">Hot Beans Web</Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="https://www.w3schools.com/">Course</Link>
          </li>
          <li>
            <Link to="/apply">Apply</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
