import React, { useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { MyContext } from "../../../context/ContextCaptureInputs";

const ButtonCopied = ({ copied, setCopied }) => {
  const { shortenLink } = useContext(MyContext);
  return (
    <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
      <button className={copied ? "copied" : "copy"}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </CopyToClipboard>
  );
};

export default ButtonCopied;
