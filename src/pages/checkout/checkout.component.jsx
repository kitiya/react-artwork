import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import { setLocalCurrencyFormat } from "../../utils/formatter.utils";
import "./checkout.styles.scss";

const CheckoutHeader = () => (
  <section className="checkout-header">
    <div className="header-block">
      <span>Product</span>
    </div>
    <div className="header-block">
      <span>Description</span>
    </div>
    <div className="header-block">
      <span>Quantity</span>
    </div>
    <div className="header-block">
      <span>Price</span>
    </div>
    <div className="header-block">
      <span>Remove</span>
    </div>
  </section>
);
const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <CheckoutHeader />

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <section className="checkout-footer">
      <span>TOTAL: {setLocalCurrencyFormat(total)}</span>
    </section>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
