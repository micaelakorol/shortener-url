import input from "../../../styles/sass/input.module.sass";
import "../../../styles/sass/variables.sass";
import HandleActions from "../../../services/functions/HandleActions";
import { useContext } from "react";
import { MyContext } from "../../../context/AppContext";
import Button from "../../../reusable/Button";
import ShortenedLinks from "./ShortenedLinks";
const Input = () => {
  const { captureInput, handleCleanError } = useContext(MyContext);
  const { handleChange, handleSubmit } = HandleActions();
  console.log(captureInput)
  return (
    <>
      <div className={input.containerInput}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Shorten a link here..."
            name="name"
            autoComplete="off"
            value={captureInput}
            onChange={handleChange}
            onClick={handleCleanError}
            required
          />
          <Button type="submit" className={input.btnInput}>
            Shorten It!
          </Button>
        </form>
      </div>
      <ShortenedLinks />
    </>
  );
};

export default Input;
