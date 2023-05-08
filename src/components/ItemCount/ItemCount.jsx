import React, { useState } from "react";
import styles from "./item-count.module.css";

export const ItemCount = ({ initial, stock, addProducts }) => {
  const [count, setCount] = useState(initial);

  const sumarProducto = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  const restarProducto = () => {
    if (count > initial) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className={styles.stockContainer}>
        <p className={styles.stockDetail}>Stock disponible ({stock})</p>
        <div className={styles.countDetail}>
          <p className={styles.counter}>{"Cantidad"}</p>
          <span>{count}</span>
          <button className={styles.buttonCount} onClick={sumarProducto}>
            <img src="../assets/mas.png" alt="Add Icon" />
          </button>
          <button className={styles.buttonCount} onClick={restarProducto}>
            <img src="../assets/menos.png" alt="Subtract Icon" />
          </button>
        </div>
      </div>
      <button
        className={styles.buttonShopping}
        onClick={() => addProducts(count)}
      >
        Agregar al carrito
      </button>
    </>
  );
};
