import React from "react";
import links from "../../sass/links.module.sass";

const EmptyInput = ({ empty }) => {
  return (
    <div className={links.center}>{empty && <h5>*Please add a link</h5>}</div>
  );
};

export default EmptyInput;
