import React, { useContext } from "react";
import Input from "./elements/Input";
import links from "../../styles/sass/links.module.sass";
import { MyContext } from "../../context/ContextCaptureInputs";

const RenderSectionInput = () => {
  const { error } = useContext(MyContext);
  return (
    <>
      <Input />
      <h2 className={links.center}>{error}</h2>
    </>
  );
};

export default RenderSectionInput;
