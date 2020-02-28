import React from "react";
import { Switch, Route } from "react-router-dom";

// import { auth } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AboutPage from "./pages/about/about.component";
import ContactPage from "./pages/contact/contact.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

const Routes = ({ currentUser }) => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/shop" component={ShopPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/sign-in" component={SignInAndSignUpPage} />
    <Route
      component={() => {
        return (
          <h1
            style={{
              textAlign: "center",
              marginTop: "50px",
              color: "salmon",
              fontSize: "1.5rem"
            }}
          >
            Page not found
          </h1>
        );
      }}
    />
  </Switch>
);

export default Routes;
