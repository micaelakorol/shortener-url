import React, { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";
import Error from "../Validations/Error";
import Spinners from "../Validations/Spinners";
import EmptyInput from "../Validations/EmptyInput";

const InputFunctions = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputs, setInputs] = useState("");
  const [shortenLink, setShortenLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState(false);
  //peticion:
  const request = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (inputValue.length > 0) {
      request();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
  //////////////////////////////////////////////////////////////////////////////////

  //al presionar el boton enviar: validations campos vacios
  function handleClick(e) {
    setInputValue(inputs);
    if (inputs === "") {
      setEmpty(true);
      setTimeout(() => {
        setEmpty(false);
      }, 2000);
    }
  }
  //accedo al value del input
  function handleChange(e) {
    setInputs(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
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
