import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import { setLocalCurrencyFormat } from "../../utils/formatter.utils";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-wrapper">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <i
          className="arrow fa fa-minus-square-o"
          onClick={() => removeItem(cartItem)}
        ></i>
        <span className="quantity-value">{quantity}</span>
        <i
          className="arrow fa fa-plus-square-o"
          onClick={() => addItem(cartItem)}
        ></i>
      </span>
      <span className="price">{setLocalCurrencyFormat(price)}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
