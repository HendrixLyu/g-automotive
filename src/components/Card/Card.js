import React from "react";
import styles from "./Card.module.scss";
import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Button from "./Button";

const Card = ({ image, heading, text, buttonLabel, onClick, isSelected }) => {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      <CardImage image={image} />
      <CardHeader heading={heading} />
      <CardBody text={text} />
      <Button label={buttonLabel} onClick={onClick} />
    </div>
  );
};

export default Card;
