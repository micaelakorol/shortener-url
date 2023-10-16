/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import Input from "../SectionInput/Elements/Input";
import links from "../../styles/sass/links.module.sass";
import { MyContext } from "../../context/AppState";

const RenderSectionInput = () => {
  const { messages } = useContext(MyContext);
  return (
    <>
      <Input />
      <h2 className={links.center}>{messages}</h2>
    </>
  );
};

export default RenderSectionInput;
