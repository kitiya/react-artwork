import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { auth } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AboutPage from "./pages/about/about.component";
import ContactPage from "./pages/contact/contact.component";
import Login from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import Header from "./components/header/header.component";

const Routes = ({ currentUser }) => (
  <BrowserRouter>
    <Header currentUser={currentUser} />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={Login} />
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
  </BrowserRouter>
);

export default Routes;
