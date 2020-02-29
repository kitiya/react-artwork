import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import { setLocalCurrencyFormat } from "../../utils/formatter.utils";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, artist, imageUrl, price } = item;
  return (
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
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
