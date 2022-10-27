import cards from "../../sass/cards.module.sass";
import brand from "../../images/icon-brand-recognition.svg";
import detailed from "../../images/icon-detailed-records.svg";
import fully from "../../images/icon-fully-customizable.svg";
const Cards = () => {
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
        <article className="cardOne">
          <img src={brand} alt="Logo" />
          <h4>Brand Recognition</h4>
          <p>
            Boost your brand recognition with each click. Generic links dont
            mean a thing. Branded links help instill confidence in your conten
          </p>
        </article>

        <article className="cardTwo">
          <img src={detailed} alt="Logo" />
          <h4>Detailed Records</h4>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </article>

        <article className="cardThree">
          <img src={fully} alt="Logo" />
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
