import React from "react";
import Popup from "./popup";
import "../css/styles.css";

import logo from '../img/logo.png';

const Apply = () => {
  return (
    <div>
      <div className="text-container">
        <p className="header1">Requirements</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Popup/>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={logo} alt="ABC Corp logo" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Apply;
