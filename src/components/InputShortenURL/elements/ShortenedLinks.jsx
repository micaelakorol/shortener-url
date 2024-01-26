import React, { useContext, useEffect, useState } from "react";
import "../../../styles/sass/variables.sass";
import links from "../../../styles/sass/links.module.sass";
import { MyContext } from "../../../context/ContextCaptureInputs";
import ButtonCopied from "./ButtonCopied";
// this component, show shortened links:
const ShortenedLinks = () => {
  const { inputValue, shortenLink, error } = useContext(MyContext);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [shortenLink]);

  return (
    <section className={links.urls}>
      {shortenLink && !error ? (
        <div className={links.containerLinks}>
          <p> {inputValue} </p>
          <p className={links.shorten}>{shortenLink}</p>
          <ButtonCopied copied={copied} setCopied={setCopied}/>
        </div>
      ): null}
    </section>
  );
};

export default ShortenedLinks;
