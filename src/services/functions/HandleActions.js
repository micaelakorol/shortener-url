import { useContext } from "react";
import { MyContext } from "../../context/ContextCaptureInputs";
import RequestAPI from "./RequestAPI";

const HandleActions = () => {
  const { setCaptureInput} =
    useContext(MyContext);
  const { request } = RequestAPI();

  const handleChange = (e) => {
    setCaptureInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    request();
  };

  return { handleChange, handleSubmit };
};

export default HandleActions;
