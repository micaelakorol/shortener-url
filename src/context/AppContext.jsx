import React, { createContext, useState } from "react";

export const MyContext = createContext();
export const MyContextProvider = ({ children }) => {
  /* display the shortened link */
  const [shortenLink, setShortenLink] = useState("");
  /* save the url that is entered in the input */
  const [inputValue, setInputValue] = useState("");
  /** capture the value of the input */
  const [captureInput, setCaptureInput] = useState("");
  /** show error messages */
  const [messages, setMessages] = useState("");
  
  /** clear the error messages */
  const handleCleanError = () => {
    setMessages("");
  };
  return (
    <MyContext.Provider
      value={{
        inputValue,
        setInputValue,
        shortenLink,
        setShortenLink,
        captureInput,
        setCaptureInput,
        handleCleanError,
        messages,
        setMessages,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
