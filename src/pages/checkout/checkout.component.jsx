import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

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
      <span className="total">TOTAL: {setLocalCurrencyFormat(total)}</span>
      <div className="stripe">
        <div className="test-warning">
          ** Please use the following test credit card for payments **
          <br />
          4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
        </div>
        <StripeCheckoutButton className="checkout-button" price={total} />
      </div>
    </section>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
