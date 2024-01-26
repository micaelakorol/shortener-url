import { useContext } from "react";
import axios from "axios";
import { MyContext } from "../../context/ContextCaptureInputs";

const RequestAPI = () => {
  const { captureInput, setShortenLink, setMessages } = useContext(MyContext);
  const request = async () => {
    try {
      setMessages("Loading....");
      const res = await axios.post(`https://is.gd/create.php?format=json&url=${captureInput}`);
      console.log(res.data.shorturl);
     setShortenLink(res.data.shorturl);
    } catch (e) {
      setMessages("An error occurred while shortening the link.", e);
    } finally {
      setMessages("");
    }
  };

  return { request };
};

export default RequestAPI;
