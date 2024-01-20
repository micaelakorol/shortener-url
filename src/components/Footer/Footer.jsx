import React from "react";
import Social from "./elements/Social";
import data from "./dataFooter/LinksFooter";
import "../../styles/footer.css";
import Ancla from "../../reusable/Ancla";
import Image from "../../reusable/Image";
import { logoFooter } from "../../assets/variables";
const Footer = () => {
  const info = data.items;
  return (
    <footer>
     <Image src={logoFooter} alt='logo'/>
      {info.map((item) => (
        <section className="links" key={item.id}>
          <b>{item.title}</b>
          <Ancla href="/">{item.l1}</Ancla>
          <Ancla href="/">{item.l2}</Ancla>
          <Ancla href="/">{item.l3}</Ancla>
          {item.l4 ? <Ancla href="/">{item.l4}</Ancla> : null}
        </section>
      ))}
      <section className="social">
        <Social />
      </section>
    </footer>
  );
};

export default Footer;
