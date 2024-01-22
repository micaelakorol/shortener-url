import SocialMediaFooter from "./elements/SocialMediaFooter";
import data from "./dataFooter/linksFooter";
import "../../styles/footer.css";
import Ancla from "../../reusable/Ancla";
import Image from "../../reusable/Image";
import { logoFooter } from "../../assets/variables";
const Footer = () => {
  const info = data.items;
  return (
    <footer>
      <Image src={logoFooter} alt="logo" />
      {info.map((item) => (
        <ul className="links" key={item.id}>
          <li>{item.title}</li>
          <Ancla href="/">{item.l1}</Ancla>
          <Ancla href="/">{item.l2}</Ancla>
          <Ancla href="/">{item.l3}</Ancla>
          {item.l4 ? <Ancla href="/">{item.l4}</Ancla> : null}
        </ul>
      ))}
      <section className="social">
        <SocialMediaFooter />
      </section>
    </footer>
  );
};

export default Footer;
