import { useState } from "react";
import axios from "axios";

const Request = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [shortenLink, setShortenLink] = useState("");
  const [inputValue, setInputValue] = useState("");

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

  return {
    request,
    loading,
    setLoading,
    shortenLink,
    setShortenLink,
    inputValue,
    setInputValue,
    error,
    setError,
  };
};

export default Request;
