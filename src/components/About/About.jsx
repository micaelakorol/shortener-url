import React from "react";
import about from "../../sass/about.module.sass";
import imgAbout from "../../images/illustration-working.svg";
import header from "../../sass/header.module.sass";
const About = () => {
  return (
    <main className={about.containerMain}>
      <section className={about.infoMain}>
        <h1 className={about.title}>More than just shorter links</h1>
        <b>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </b>
        <button className={header.btnSignUp}>Get Started</button>
      </section>
      <section className={about.imgMain}>
        <img src={imgAbout} alt="Logo sit person" />
      </section>
    </main>
  );
};

export default About;
