import input from "../../sass/input.module.sass";
import "../../sass/variables.sass";
import Links from "../Links/Links";
const Input = ({
  inputs,
  handleChange,
  handleClick,
  handleSubmit,
  shortenLink,
  inputValue,
}) => {
  return (
    <>
      <div className={input.containerInput}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Shorten a link here..."
            name="name"
            autoComplete="off"
            value={inputs}
            onChange={handleChange}
          />
          <button className={input.btnInput} onClick={handleClick}>
            Shorten It!
          </button>
        </form>
      </div>
      <Links
        inputValue={inputValue}
        shortenLink={shortenLink}
      />
    </>
  );
};

export default Input;
