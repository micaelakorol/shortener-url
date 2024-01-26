import { useContext } from "react";
import axios from "axios";
import { MyContext } from "../../context/ContextCaptureInputs";

const RequestAPI = () => {
  const { captureInput, setShortenLink, setError, setInputValue } =
    useContext(MyContext);
  const request = async () => {
    try {
      const res = await axios.post(
        `https://is.gd/create.php?format=json&url=${captureInput}`
      );
      if (res.status === 200) {
        setInputValue(captureInput);
        setShortenLink(res.data.shorturl);
      }
    } catch (e) {
      setError("An error occurred while shortening the link.", e);
    } 
  };

  return { request };
};

export default RequestAPI;
