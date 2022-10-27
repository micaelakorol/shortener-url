import React from "react";
import logo from "../../images/logo.svg";
import header from "../../sass/header.module.sass";

const Header = () => {
  return (
    <>
      <header className={header.containerHeader}>
        <section className={header.logoHeader}>
          <img src={logo} alt="Logo Shortly" className={header.imgHeader} />
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </section>
        <section className={header.loginHeader}>
          <button className={header.btnHeader}>Login</button>
          <button className={header.btnSignUp}>Sign Up</button>
        </section>
      </header>
    </>
  );
};

export default Header;
