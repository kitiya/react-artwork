import React from "react";
import { NavLink, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo/crown.svg";
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <NavLink className="option" activeClassName="active-link" exact to="/">
          Home
        </NavLink>
        <NavLink className="option" activeClassName="active-link" to="/shop">
          Shop
        </NavLink>
        <NavLink className="option" activeClassName="active-link" to="/about">
          About
        </NavLink>
        <NavLink className="option" activeClassName="active-link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="option" activeClassName="active-link" to="/login">
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
