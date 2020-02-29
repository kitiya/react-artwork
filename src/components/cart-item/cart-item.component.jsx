import React from "react";
import "./cart-item.styles.scss";

import { setLocalCurrencyFormat } from "../../utils/formatter.utils";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img className="item-image" src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {setLocalCurrencyFormat(price)}
      </span>
    </div>
  </div>
);

export default CartItem;
