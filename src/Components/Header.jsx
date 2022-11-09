import React, {useContext} from "react";
import AuthContext from "./Store/Authcontext";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  const authCtx = useContext(AuthContext)
  return (
    <div className="header">
      <h2>Galactic Twilight Archives</h2>
      <div className="header__nav">
        {authCtx.token && <NavLink className='header__links' to="/profile">Profile </NavLink>}
        {authCtx.token && <NavLink className='header__links' to="/newarchive">New Archive </NavLink>}
        <NavLink className='header__links' to="/main">Home </NavLink>
        <NavLink className='header__links' to='/signup'>Sign Up</NavLink>
        
      </div>
    </div>
  );
};

export default Header;
