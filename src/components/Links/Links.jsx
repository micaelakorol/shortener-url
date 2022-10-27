import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "../../sass/variables.sass";
import links from "../../sass/links.module.sass";

const Links = ({ inputValue, shortenLink }) => {
  const [copied, setCopied] = useState(false);

  //Al actualizarse shotenLink, el boton 'copied' pasa a 'copy'
  useEffect(() => {
    setCopied(false);
  }, [shortenLink]);
  //en este componente, se muestran los links acortados
  return (
    <div className={links.urls}>
      {shortenLink && (
        <div className={links.containerLinks}>
          <p> {inputValue}</p> <p className={links.shorten}>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : "copy"}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
};

export default Links;
