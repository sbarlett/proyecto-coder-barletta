import React from "react";
import styles from "./banner.module.css";

export const Banner = () => {
  return (
    <section className={styles.bannerContainer}>
      <h2>
        <img src="../assets/airpods_logo.jpg" alt="Logo" />
      </h2>
      <img src="../assets/airpods.png" alt="Banner" />
    </section>
  );
};
