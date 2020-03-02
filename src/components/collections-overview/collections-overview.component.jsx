import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(collection => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          subtitle={collection.subtitle}
          items={collection.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
