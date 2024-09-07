import React from "react";
import styles from "./Card.module.scss";

const CardHeader = ({ heading }) => {
  return <h2 className={styles.cardHeader}>{heading}</h2>;
};

export default CardHeader;
