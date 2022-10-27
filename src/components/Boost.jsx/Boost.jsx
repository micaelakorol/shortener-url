import React from "react";
import header from "../../sass/header.module.sass";
import styles from "./boost.module.sass";

const Boost = () => {
  return (
    <section className={styles.containerBoost}>
      <h2> Boost your links today </h2>
      <button className={header.btnSignUp}>Get Started</button>
    </section>
  );
};

export default Boost;
