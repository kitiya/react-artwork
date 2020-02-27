import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import Hero from "../../components/hero/hero.component";

import { SHOP_DATA } from "./shop.data";

const ShopPage = () => {
  const collections = SHOP_DATA;

  console.log(collections);
  return (
    <div>
      <Hero className="shop" />
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

export default ShopPage;
