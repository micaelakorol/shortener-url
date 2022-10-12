import React from "react";
import links from "../../sass/links.module.sass";

const Error = ({ error, setError }) => {
  if (error) {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }
  return (
    <div>
      {error && <h1 className={links.center}>Something wne t wrong :(</h1>}
    </div>
  );
};

export default Error;
