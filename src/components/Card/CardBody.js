// src/components/Card/CardBody.js
import React from "react";
import styles from "./Card.module.scss";

const CardBody = ({ text }) => {
  const paragraphs = text.split("\n");

  return (
    <div className={styles.cardBody}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default CardBody;
