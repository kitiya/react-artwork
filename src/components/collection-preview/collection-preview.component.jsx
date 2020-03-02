import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, subtitle, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <p className="sub-title">{subtitle}</p>
      <div className="preview">
        {items
          ? items
              .filter((item, index) => index < 4)
              .map(item => <CollectionItem key={item.id} item={item} />)
          : null}
      </div>
    </div>
  );
};

export default CollectionPreview;
