import React from "react";
import header from "../../../styles/sass/header.module.sass";
import LinksMenu from "./ElementsHeader/LinksMenu";
import Button from "../../../reusable/Button";
import Image from "../../../reusable/Image";
import { logo } from "../../../assets/variables";

const Header = () => {
  return (
    <>
      <header className={header.containerHeader}>
        <nav className={header.logoHeader}>
          <Image src={logo} alt='logo'/>
          <LinksMenu />
        </nav>
        <section className={header.loginHeader}>
          <Button className={header.btnHeader}>Login</Button>
          <Button className={header.btnSignUp}>Sign Up</Button>
        </section>
      </header>
    </>
  );
};

export default Header;
