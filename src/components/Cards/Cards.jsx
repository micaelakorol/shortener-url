import Image from "../../reusable/Image";
import cards from "../../styles/sass/cards.module.sass";
import Boost from "./Boost";
import HeaderCard from "./HeaderCard";
import data from "./InfoCard/CardsDescription";
const Cards = () => {
  const infoCard = data.items;
  return (
    <>
      <HeaderCard />
      <div className={cards.containerCards}>
        {infoCard.map((item) => (
          <section className={cards.cards} key={item.id}>
            <article>
              <Image src={item.image} alt="Logo" />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          </section>
        ))}
      </div>
      {/** Boost your links today */}
      <Boost />
    </>
  );
};

export default Cards;
