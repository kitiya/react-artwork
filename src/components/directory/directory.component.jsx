import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { DIRECTORY_DATA } from "./directory.data";

const Directory = title => {
  const sections = DIRECTORY_DATA;
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
