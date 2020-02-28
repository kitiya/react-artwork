import React from "react";
import { NavLink, Link } from "react-router-dom";

// The connect() function connects a React component to a Redux store.
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => {
  // console.log(currentUser);
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <NavLink
            className="option"
            activeClassName="active-link"
            to="/sign-in"
          >
            Sign in
          </NavLink>
        )}
      </div>
    </header>
  );
};

// this state attribute is a root-reducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
