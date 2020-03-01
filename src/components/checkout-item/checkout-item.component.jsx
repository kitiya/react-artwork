import React from "react";
import "./checkout-item.styles.scss";
import { setLocalCurrencyFormat } from "../../utils/formatter.utils";

const CheckoutItem = ({
  cartItem: { id, name, imageUrl, price, quantity }
}) => (
  <div className="checkout-item">
    <div className="image-wrapper">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{setLocalCurrencyFormat(price)}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
