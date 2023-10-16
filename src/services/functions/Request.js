import { useContext } from "react";
import axios from "axios";
import { MyContext } from "../../context/AppContext";

const Request = () => {
  const { captureInput, setShortenLink, setMessages } = useContext(MyContext);
  const request = async () => {
    try {
      setMessages("Loading....");
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${captureInput}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (e) {
      setMessages("An error occurred while shortening the link.", e);
    }
    setMessages("");
  };

  return {
    request,
  };
};

export default Request;
