import input from "../../../styles/sass/input.module.sass";
import "../../../styles/sass/variables.sass";
import HandleActions from "../../../services/functions/HandleActions";
import { useContext } from "react";
import { MyContext } from "../../../context/ContextCaptureInputs";
import Button from "../../../reusable/Button";
import ShortenedLinks from "./ShortenedLinks";
const Input = () => {
  const { captureInput, setError, setShortenLink } = useContext(MyContext);
  const { handleChange, handleSubmit } = HandleActions();

  const cleanInput = () => {
    setError(null);
    setShortenLink("");
  };

  return (
    <>
      <section className={input.containerInput}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Shorten a link here..."
            name="name"
            autoComplete="off"
            value={captureInput}
            onChange={handleChange}
            onClick={cleanInput}
            required
          />
          <Button type="submit" className={input.btnInput}>
            Shorten It!
          </Button>
        </form>
      </section>
      <ShortenedLinks />
    </>
  );
};

export default Input;
