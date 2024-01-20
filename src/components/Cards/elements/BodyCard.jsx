import Image from "../../../reusable/Image";
import cards from "../../../styles/sass/cards.module.sass";
import data from "../InfoCard/CardsDescription";
const BodyCard = () => {
  const infoCard = data.items;
  return (
    <>
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
    </>
  );
};

export default BodyCard;
