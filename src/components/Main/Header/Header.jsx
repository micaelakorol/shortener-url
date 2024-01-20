import React from "react";
import headerWeb from "../../../styles/sass/header.module.sass";
import LinksMenu from "./elements/LinksMenu";
import Button from "../../../reusable/Button";
import Image from "../../../reusable/Image";
import { logo } from "../../../assets/variables";

const Header = () => {
  return (
    <>
      <header className={headerWeb.containerHeaderWeb}>
        <nav className={headerWeb.logoHeader}>
          <Image src={logo} alt='logo'/>
          <LinksMenu />
        </nav>
        <section className={headerWeb.loginHeader}>
          <Button className={headerWeb.btnHeader}>Login</Button>
          <Button className={headerWeb.btnSignUp}>Sign Up</Button>
        </section>
      </header>
    </>
  );
};

export default Header;
