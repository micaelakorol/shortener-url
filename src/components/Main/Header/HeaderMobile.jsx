import React, { useState } from "react";
import header from "../../../styles/sass/header.module.sass";
import mobile from "../../../styles/sass/headerMobile.module.sass";
import LinksMenu from "./elements/LinksMenu";
import Ancla from "../../../reusable/Ancla";
import Button from "../../../reusable/Button";
import Image from "../../../reusable/Image";
import { logo, menu } from "../../../assets/variables";

const HeaderMobile = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <header className={mobile.containerMobile}>
      <section className={mobile.headerMobile}>
        <Image src={logo} alt="logo_shortly" />
        <Image
          src={menu}
          alt="Icon of list of header mobile"
          className={mobile.imgMobile}
          onClick={() => setShowMobile(!showMobile)}
        />
      </section>
      {showMobile && (
        <nav className={mobile.contentMobile}>
          <LinksMenu />
          <hr />
          <Ancla href="/" className={mobile.login}>
            Login
          </Ancla>
          <Button className={header.btnSignUp}>Sign Up</Button>
        </nav>
      )}
    </header>
  );
};

export default HeaderMobile;
