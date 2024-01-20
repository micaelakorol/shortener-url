import Image from "../../../reusable/Image";
import cards from "../../../styles/sass/cards.module.sass";
import data from "../dataCard/cardDescription";
const BodyCard = () => {
  const infoCard = data.items;
  return (
    <>
      <div className={cards.containerCards}>
        {infoCard.map((item) => (
          <section className={cards.cards} key={item.id}>
            <section>
              <Image src={item.image} alt="Logo" />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </section>
          </section>
        ))}
      </div>
    </>
  );
};

export default BodyCard;
