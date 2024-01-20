import { useContext } from "react";
import axios from "axios";
import { MyContext } from "../../context/AppState";

const RequestAPI = () => {
  const { captureInput, setShortenLink, setMessages } = useContext(MyContext);

  const request = async () => {
    try {
      setMessages("Loading....");
      const res = await axios.post("/api/v1/shorten", { url: captureInput });
      setShortenLink(res.data.result_url);
    } catch (e) {
      setMessages("An error occurred while shortening the link.", e);
    } finally {
      setMessages("");
    }
  };

  return { request };
};

export default RequestAPI;
