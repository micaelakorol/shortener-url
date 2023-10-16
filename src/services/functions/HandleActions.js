import { useContext } from "react";
import { MyContext } from "../../context/AppContext";
import Request from "./Request";

const HandleActions = () => {
  const { setCaptureInput, setInputValue, captureInput } =
    useContext(MyContext);
  const { request } = Request();
  /** Capture values input */
  const handleChange = (e) => {
    setCaptureInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await 
    setInputValue(captureInput);
    request();
  };

  return { handleChange, handleSubmit };
};

export default HandleActions;
