import React from "react";
import Image from "../../reusable/Image";
import { facebook, instagram, pinterest, twitter } from "../../assets/variables";

const Social = () => {
  return (
    <>
      <Image src={facebook} alt='facebook' />
      <Image src={twitter} alt='twitter' />
      <Image src={instagram} alt='instagram' />
      <Image src={pinterest} alt='pinterest' />
    </>
  );
};

export default Social;
