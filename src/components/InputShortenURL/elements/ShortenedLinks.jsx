import React, { useContext, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "../../../styles/sass/variables.sass";
import links from "../../../styles/sass/links.module.sass";
import { MyContext } from "../../../context/AppState";
// this component, show shortened links:
const ShortenedLinks = () => {
  const { inputValue, shortenLink } = useContext(MyContext);
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    setCopied(false);
  }, [shortenLink]);

  return (
    <>
      <div className={links.urls}>
        {shortenLink && (
          <div className={links.containerLinks}>
            <p> {inputValue} </p> 
            <p className={links.shorten}>{shortenLink}</p>
            <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
              <button className={copied ? "copied" : "copy"}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
          </div>
        )}
      </div>
    </>
  );
};

export default ShortenedLinks;
