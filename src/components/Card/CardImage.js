import React from "react";
import styles from "./Card.module.scss";

const CardImage = ({ image }) => {
  return <img src={image} alt="CardImage" className={styles.cardImage} />;
};

export default CardImage;
