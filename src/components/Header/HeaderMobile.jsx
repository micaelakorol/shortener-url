import React, { useState } from "react";
import header from "../../sass/header.module.sass";
import list from "../../images/list.svg";
import logo from "../../images/logo.svg";
import mobile from "../../sass/headerMobile.module.sass";
const HeaderMobile = () => {
  const [lookHeaderMob, setLookHeaderMob] = useState(false);
  return (
    <header className={header.container}>
      <section className={header.headerMobile}>
        <img src={logo} alt="Logo Shortly" className={header.imgMobile} />
        <img
          src={list}
          alt=""
          className={header.imgMobile}
          onClick={() => setLookHeaderMob(!lookHeaderMob)}
        />
      </section>
      {lookHeaderMob && (
        <div className={mobile.contentMobile}>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
          <hr />
          <a href="/" className={mobile.login}>
            Login
          </a>
          <button className={header.btnSignUp}>Sign Up</button>
        </div>
      )}
    </header>
  );
};

export default HeaderMobile;
