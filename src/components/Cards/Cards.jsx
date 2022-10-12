//import React, { useEffect, useState } from "react";
import cards from "../../sass/cards.module.sass";
//import data from "./CardsDescription";
import brand from "../../images/icon-brand-recognition.svg";
import detailed from "../../images/icon-detailed-records.svg";
import fully from "../../images/icon-fully-customizable.svg";
const Cards = () => {
  /*const [card, setCard] = useState([])
    useEffect(() => {
       const cardInfo = data
    setCard(cardInfo.items)   
    },[])*/

  return (
    <div className={cards.containerCards}>
      <section className={cards.titleInformative}>
        <h1>Advanced Statics</h1>
        <p className={cards.pCards}>
          Track how links performing across the web with our advanced statics
          dashboard.
        </p>
      </section>
      <section className={cards.cards}>
        {/* {card.map((item) => (
        <div key={item.id} className={cards.cardBody}>
           <p>{item.title}</p> 
          <p>{item.description}</p>
          <img src={item.image} alt="" />
        </div>
     ))}
   */}
        <article className="cardOne">
          <img src={brand} alt="" />
          <h4>Brand Recognition</h4>
          <p>
            Boost your brand recognition with each click. Generic links dont
            mean a thing. Branded links help instill confidence in your conten
          </p>
        </article>

        <article className="cardTwo">
          <img src={detailed} alt="" />
          <h4>Detailed Records</h4>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </article>

        <article className="cardThree">
          <img src={fully} alt="" />
          <h4>Fully Customizable</h4>
          <p>
            Improve brand awareness and content discoverabillity through
            customizable links, supercharging
          </p>
        </article>
      </section>
    </div>
  );
};

export default Cards;
