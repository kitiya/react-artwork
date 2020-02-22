import React from "react";
import { NavLink } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <NavLink activeClassName="active-link" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active-link" to="/shop">
        Shop
      </NavLink>
      <NavLink activeClassName="active-link" to="/cart">
        Cart
      </NavLink>
      <NavLink activeClassName="active-link" to="/contact">
        Contact
      </NavLink>
    </header>
  );
};

export default Header;
