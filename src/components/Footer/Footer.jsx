import React from "react";
import styles from "./styles/footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <h3>Made with love by Santiago Barletta </h3>
        <img src="../assets/heart.jpg" alt="Heart Icon" />
      </div>
    </>
  );
};
