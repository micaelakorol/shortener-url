import React from "react";
import header from "../../styles/sass/header.module.sass";
import styles from"../../styles/sass/bannerGetStarted.module.sass";
import Button from "../../reusable/Button";

const BannerGetStarted = () => {
  return (
    <article className={styles.containerBoost}>
      <h2> Boost your links today </h2>
      <Button className={header.btnSignUp}>Get Started</Button>
    </article>
  );
};

export default BannerGetStarted;
