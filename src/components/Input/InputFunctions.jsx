/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Input from "./Input";
import Error from "../Validations/Error";
import Spinners from "../Validations/Spinners";
import EmptyInput from "../Validations/EmptyInput";
import Request from "../../services/Request";

const InputFunctions = () => {

  const [inputs, setInputs] = useState("");
  const [empty, setEmpty] = useState(false);

  const {
    inputValue,
    setInputValue,
    shortenLink,
    error,
    setError,
    loading,
    request,
  } = Request();

  useEffect(() => {
    if (inputValue.length > 0) {
      request();
    }
  }, [inputValue]);
  //////////////////////////////////////////////////////////////////////////////////

  //Validaciones:

  function handleClick(e) {
    setInputValue(inputs);
    if (inputs === "") {
      setEmpty(true);
      setTimeout(() => {
        setEmpty(false);
      }, 2000);
    }
  }
  //Capturo valores:
  function handleChange(e) {
    setInputs(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs("");
  };

  return (
    <div>
      <Input
        handleClick={handleClick}
        handleChange={handleChange}
        inputs={inputs}
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        shortenLink={shortenLink}
      />
      <Spinners loading={loading} />
      <Error error={error} setError={setError} />
      <EmptyInput empty={empty} />
    </div>
  );
};

export default InputFunctions;
