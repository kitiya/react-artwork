import React from "react";
import "./collection-item.styles.scss";

const setLocalCurrencyFormat = val => {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  return formatter.format(val);
};

const CollectionItem = ({ id, name, artist, imageUrl, price }) => (
  <div className="collection-item">
    <div className="collection-header"></div>
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className="collection-footer">
      <h3 className="name">{name}</h3>
      <div className="row">
        <h4 className="artist">{artist}</h4>
        <h4 className="price">{setLocalCurrencyFormat(price)}</h4>
      </div>
    </div>
  </div>
);

export default CollectionItem;
