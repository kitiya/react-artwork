import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
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
