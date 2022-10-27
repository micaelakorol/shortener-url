import React from "react";
import Logo from "../../svg/Logo";
import footer from "./footer.module.sass";
import Social from "./Social";

const Footer = () => {
  return (
    <footer>
      <section className={footer.logo}>
        <Logo />
      </section>

      <section className={footer.links}>
        <b>Features</b>
        <a href="/">Link Shortening</a>
        <a href="/">Branded Link</a>
        <a href="/">Analytics</a>
      </section>

      <section className={footer.links}>
        <b>Resources</b>
        <a href="/">Blog</a>
        <a href="/">Developers</a>
        <a href="/">Support</a>
      </section>
      <section className={footer.links}>
        <b>Company</b>
        <a href="/">About</a>
        <a href="/">Our Team</a>
        <a href="/">Careers</a>
        <a href="/">Contact</a>
      </section>

      <section className={footer.social}>
        <Social />
      </section>
    </footer>
  );
};

export default Footer;
