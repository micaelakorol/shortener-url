import React, { useState } from "react";
import header from "../../../styles/sass/header.module.sass";
import mobile from "../../../styles/sass/headerMobile.module.sass";
import LinksMenu from "./ElementsHeader/LinksMenu";
import MenuIcon from "./ElementsHeader/MenuIcon";
import Ancla from "../../../reusable/Ancla";
import Button from "../../../reusable/Button";
import Image from "../../../reusable/Image";
import { logo } from "../../../assets/variables";
const HeaderMobile = () => {
  const [lookHeaderMob, setLookHeaderMob] = useState(false);
  return (
    <header className={header.container}>
      <section className={header.headerMobile}>
        <Image src={logo} alt='logo'/>
       <MenuIcon setLookHeaderMob={setLookHeaderMob} lookHeaderMob={lookHeaderMob}/>
      </section>
      {lookHeaderMob && (
        <nav className={mobile.contentMobile}>
          <LinksMenu />
          <hr />
          <Ancla href='/' className={mobile.login}>Login</Ancla>
          <Button className={header.btnSignUp}>Sign Up</Button>
        </nav>
      )}
    </header>
  );
};

export default HeaderMobile;
