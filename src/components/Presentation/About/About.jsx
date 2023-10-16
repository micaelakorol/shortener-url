import React from "react";
import { ilustration } from "../../../assets/variables";
import header from "../../../styles/sass/header.module.sass";
import "../../../styles/about.css";
import Image from "../../../reusable/Image";
import Button from "../../../reusable/Button";
const About = () => {
  return (
    <main className="containerMain">
      <section className="infoMain">
        <h1 className="title">More than just shorter links</h1>
        <b>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </b>
        <Button className={header.btnSignUp}>Get Started</Button>
      </section>
      <section className="imgMain">
        <Image src={ilustration} alt="Logo sit person" />
      </section>
    </main>
  );
};

export default About;
