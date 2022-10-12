import React from "react";
import links from "../../sass/links.module.sass";

const Spinners = ({ loading }) => {
  return <div>{loading && <h1 className={links.center}>Loading...</h1>}</div>;
};

export default Spinners;
