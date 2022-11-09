import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <h2>Galactic Twilight Archives</h2>
      <div className="header__nav">
        <NavLink className='header__links' to="/main">Home </NavLink>
        <NavLink className='header__links' to="/profile">Profile </NavLink>
        <NavLink className='header__links' to="/newarchive">New Archive </NavLink>
      </div>
    </div>
  );
};

export default Header;
