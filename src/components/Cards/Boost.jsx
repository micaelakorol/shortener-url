import React from "react";
import header from "../../styles/sass/header.module.sass";
import styles from"../../styles/sass/boost.module.sass";
import Button from "../../reusable/Button";

const Boost = () => {
  return (
    <section className={styles.containerBoost}>
      <h2> Boost your links today </h2>
      <Button className={header.btnSignUp}>Get Started</Button>
    </section>
  );
};

export default Boost;