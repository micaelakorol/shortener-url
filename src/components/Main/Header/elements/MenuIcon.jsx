import React from 'react'
import { menu } from '../../../../assets/variables';
import header from "../../../../styles/sass/header.module.sass";
import Image from '../../../../reusable/Image';
const MenuIcon = ({lookHeaderMob,setLookHeaderMob}) => {
  return (
    <Image
    src={menu}
    alt="Icon of list of header mobile"
    className={header.imgMobile}
    onClick={() => setLookHeaderMob(!lookHeaderMob)}
  />
  )
}

export default MenuIcon