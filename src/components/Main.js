import React, { useState } from "react";
import styles from "./Main.module.scss";
import Card from "./Card/Card";
import cardImage from "./assets/images/image-card.jpg";

const cardsData = [
  {
    heading: "Heading 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo est obcaecati labore sint odit, delectus placeat enim? Velit, optio est a iure blanditiis adipisci",
    buttonLabel: "Button 1",
    image: cardImage,
  },
  {
    heading: "Heading 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illo est obcaecati labore sint odit, delectus placeat enim? Velit, optio est a iure blanditiis adipisci",
    buttonLabel: "Button 2",
    image: cardImage,
  },
  {
    heading: "Heading 3",
    text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    buttonLabel: "Button 3",
    image: cardImage,
  },
];

const Main = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  const handleCardClick = index => {
    setSelectedCard(index);
  };

  return (
    <div className={styles.main}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          heading={card.heading}
          text={card.text}
          buttonLabel={card.buttonLabel}
          onClick={() => handleCardClick(index)}
          isSelected={index === selectedCard}
        />
      ))}
    </div>
  );
};

export default Main;
