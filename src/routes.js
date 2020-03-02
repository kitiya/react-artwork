import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AboutPage from "./pages/about/about.component";
import ContactPage from "./pages/contact/contact.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

const Routes = ({ currentUser }) => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route exact path="/checkout" component={CheckoutPage} />
    <Route
      exact
      path="/sign-in"
      render={() =>
        currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
      }
    />
    {/* <Route
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
    /> */}
  </Switch>
);

export default Routes;
