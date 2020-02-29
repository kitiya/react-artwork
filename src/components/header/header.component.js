import React from "react";
import { NavLink, Link } from "react-router-dom";

// The connect() function connects a React component to a Redux store.
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/logo/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {/* <NavLink className="option" activeClassName="active-link" exact to="/">
          Home
        </NavLink> */}
        <NavLink className="option" activeClassName="active-link" to="/shop">
          Shop
        </NavLink>
        {/* <NavLink className="option" activeClassName="active-link" to="/about">
          About
        </NavLink> */}
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

// this state attribute is a root-reducer
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
