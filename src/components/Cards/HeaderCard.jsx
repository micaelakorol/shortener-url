import React from 'react'
import cards from "../../styles/sass/cards.module.sass";

const HeaderCard = () => {
  return (
    <section className={cards.titleInformative}>
    <h1>Advanced Statics</h1>
    <p className={cards.pCards}>
      Track how links performing across the web with our advanced statics
      dashboard.
    </p> 
  </section>
  )
}

export default HeaderCard