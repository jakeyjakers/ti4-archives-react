import React, { useContext, Fragment } from "react";
import AuthContext from "./Store/Authcontext";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const {userId} = useContext(AuthContext)
  return (
    <div className="header">
      <h2>Galactic Twilight Archives</h2>
      <div className="header__nav">
      <NavLink className="header__links" to="/main">
          Home{" "}
        </NavLink>
        {authCtx.token ? (
          <Fragment>
            {" "}
            <div  className="header__dropdown">
              <h3>Profile</h3>
              <div className="header__dropdown__content">
              <NavLink className="header__links" to="/profile">
              Profile{" "}
            </NavLink>
            <NavLink className='header__links' to='/profile/details'>
              Profile Details{" "}
            </NavLink>
              </div>
            </div>
            
            <NavLink className="header__links" to="/newarchive">
              New Archive{" "}
            </NavLink>{" "}
          </Fragment>
        ) : (
          <Fragment>
          <NavLink className="header__links" to="/signup">
            Sign Up
          </NavLink>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
